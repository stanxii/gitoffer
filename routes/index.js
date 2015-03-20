
/*
 * GET home page.
 */
var JSX = require('node-jsx').install(),
    React = require('react'),
    _IndexHeader = require('../public/javascripts/components/indexheader'),
    _Register = require('../public/javascripts/components/register');;


exports.index = function(req, res){
    // Render React to a string, passing in our fetched tweets
    var markup = React.renderToString(
        _IndexHeader()
    );

    // Render our 'home' template
    res.render('home', {
        markup: markup
    });
};

exports.register = function(req, res){
    // Render React to a string, passing in our fetched tweets
    var header = React.renderToString(
        _IndexHeader()
    );
    var markup = React.renderToString(
        _Register()
    );

    // Render our 'home' template
    res.render('home', {
        markup: markup,
        header: header
    });
};
