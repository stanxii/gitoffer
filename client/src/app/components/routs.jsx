var React = require('react');
var Router = require('react-router');
var IndexHeader = require('./indexheader.js');
var RegisterTable = require('./register.js');
var ProfileHeader = require('./profilenav.js');

var {
    Route,
    DefaultRoute,
    NotFoundRoute,
    RouteHandler,
    Link
    } = Router;

var app = React.createClass({
    render: function() {
        return (
            <div>
                <RouteHandler />
            </div>
        );
    }
});

var Index = React.createClass({
    render: function () {
        return (
            <div>
                <IndexHeader />
            </div>
        )
    }
});

var Register = React.createClass({
    render: function () {
        return (
            <div>
                <IndexHeader />
                <RegisterTable />
            </div>
        )
    }
});

var ProfileEdit = React.createClass ({
    render: function () {
        return (
            <div>
                <ProfileHeader />
            </div>
        )
    }
});

var NotFound = React.createClass({
    render: function () {
        return  (
            <h2>Not found</h2>
        )
    }
});

module.exports = routes = (
    <Route handler={app}>
        <DefaultRoute handler={Index} />
        <Route name="signup" path="register" handler={Register} />
        <Route name="index" path="index" handler={Index}/>
        <Route name="editprofile" path="profile/edit" handler={ProfileEdit} />
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

