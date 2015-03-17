
/*
 * GET home page.
 */
var JSX = require('node-jsx').install(),
    React = require('react'),
    CommentBox = require('../public/javascripts/components/componentbox');


exports.index = function(req, res){
    // Render React to a string, passing in our fetched tweets
    var markup = React.renderToString(
        CommentBox()
    );

    // Render our 'home' template
    res.render('home', {
        markup: markup
    });
};
