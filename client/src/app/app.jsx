(function () {
    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        Routes = require('./components/routs.jsx');
    var Router = require('react-router');
    //Needed for React Developer Tools
    //window.React = React;

    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

    // Render the main app react component into the document body.
    // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
    //React.render(<IndexHeader />, document.body);
   // React.render(<RegisterEntry />, document.body);
    Router.run(Routes, function (Handler) {
        React.render(<Handler/>, document.body);
    });
})();