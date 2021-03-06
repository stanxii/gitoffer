var fs = require('fs');
var express = require('express');
var path = require('path');

import React from 'react'
import { renderToString } from 'react-dom/server'

import { Router, RouterContext, match } from 'react-router';
import routes from '../common/routes/routing';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promiseMiddleware from '../common/middlewares/PromiseMiddleware';
import combinedReducers from '../common/reducers';

import fetchComponentData from '../common/utils/fetchComponentData';


const finalCreateStore = applyMiddleware(promiseMiddleware)( createStore );

// console.log( 'env: ', process.env.NODE_ENV )

var app = express();
// app.use('/build', express.static(path.join(__dirname, '../build')))
app.use('/assets', express.static(path.join(__dirname, '../client/assets')))

// initialize webpack HMR
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config')
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

//set cros
/*
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});  
*/

// server rendering
app.use( ( req, res, next ) => {
   
	const store = finalCreateStore(combinedReducers);

	// react-router
	match( {routes, location: req.url}, ( error, redirectLocation, renderProps ) => {

		if ( error )
			return res.status(500).send( error.message );

		if ( redirectLocation )
			return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );

		if ( renderProps == null ) {
			// return next('err msg: route not found'); // yield control to next middleware to handle the request
			return res.status(404).send( 'Not found' );
		}

		// console.log( '\nserver > renderProps: \n', require('util').inspect( renderProps, false, 1, true) )
		// console.log( '\nserver > renderProps: \n', require('util').inspect( renderProps.components, false, 3, true) )

		// this is where universal rendering happens,
		// fetchComponentData() will trigger actions listed in static "needs" props in each container component
		// and wait for all of them to complete before continuing rendering the page,
		// hence ensuring all data needed was fetched before proceeding
		//
		// renderProps: contains all necessary data, e.g: routes, router, history, components...
		
	    fetchComponentData( store.dispatch, renderProps.components, renderProps.params)

		.then( () => {
			//console.log('fuck server jobs=' + JSON.stringify(jobs));
			

			const initView = renderToString((
				<Provider store={store}>
				  <RouterContext {...renderProps} />
				</Provider>
			))

			// console.log('\ninitView:\n', initView);

			let state = JSON.stringify( store.getState() );
			// console.log( '\nstate: ', state )

			let page = renderFullPage( initView, state )
			// console.log( '\npage:\n', page );

			return page;

		})

		.then( page => res.status(200).send(page) )

		.catch( err => res.end(err.message) );
	})
})


function renderFullPage(html, initialState) {
  return `
	<!doctype html>
	<html lang="utf-8">
	  <head>
		<title>Universal Redux Example</title>
		<link rel="shortcut icon" type="image/png" href="assets/images/react.png">
		<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-pink.min.css" />
		<link rel="stylesheet" href="//cdn.materialdesignicons.com/1.2.65/css/materialdesignicons.min.css">
		<script src="https://code.getmdl.io/1.1.3/material.min.js"></script>
		<link rel="stylesheet" 
		href="/assets/css/main.css">
	  </head>
	  <body>
	  <div class="container">${html}</div>
		<script>window.$REDUX_STATE = ${initialState}</script>
		<script src="/static/bundle.js"></script>
	  </body>
	</html>
	`
}

// example of handling 404 pages
app.get('*', function(req, res) {
	res.status(404).send('Server.js > 404 - Page Not Found');
})

// global error catcher, need four arguments
app.use((err, req, res, next) => {
  console.error("Error on request %s %s", req.method, req.url);
  console.error(err.stack);
  res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
  console.log( 'uncaughtException: ', evt );
})

app.listen(3000, function(){
	console.log('Listening on port 3000');
});


