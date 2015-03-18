
/*
 * GET home page.
 */
var JSX = require('node-jsx').install(),
    React = require('react'),
    IndexHeader = require('../public/javascripts/components/indexheader');


exports.index = function(req, res){
    // Render React to a string, passing in our fetched tweets
    var markup = React.renderToString(
        IndexHeader()
    );

    // Render our 'home' template
    res.render('home', {
        markup: markup
    });
};
