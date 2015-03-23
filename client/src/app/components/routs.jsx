var React = require('react');
var Router = require('react-router');
//var app = require('./indexheader.js');
var Register = require('./register.js');

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
            <div className="topbar">
                <div className="container">
                    <a>
                        <img alt="GitOffer" className="logo" src="/images/GitOffer.png" />
                    </a>
                    <ul className="main-page-nav">
                        <li className="nav-link">
                            <a href="">我要招人</a>
                        </li>
                        <li className="nav-link">
                            <a href="">如何使用</a>
                        </li>
                        <li className="nav-recommend">
                            <a href="">推荐高手</a>
                        </li>
                        <Link to="signup" className="orange-btn">注册</Link>
                        <a href="/login" className="green-btn">登录</a>
                    </ul>
                </div>
                <div className="main-content">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

var Index = React.createClass({
    render: function () {
        return <h1>Address Book</h1>;
    }
});

var NotFound = React.createClass({
    render: function () {
        return <h2>Not found</h2>;
    }
});

module.exports = routes = (
    <Route handler={app}>
        <DefaultRoute handler={Register}/>
        <Route name="signup" path="signup" handler={Register}/>
        <Route name="index" path="index" handler={Index}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

