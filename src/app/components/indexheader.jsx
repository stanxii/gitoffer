var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.Route;

module.exports = IndexHeader = React.createClass({
    render: function() {
        return (
            <div className="topbar">
                <div className="container">
                    <a href="/">
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
                        <a href="/signup" className="orange-btn">注册</a>
                        <a href="/login" className="green-btn">登录</a>
                    </ul>
                </div>
            </div>
        );
    }
});
