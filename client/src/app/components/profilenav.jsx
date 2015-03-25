var React = require('react'),
    mui = require('material-ui');

module.exports = ProfileNavigation = React.createClass({
    render: function() {
        return (
            <div className="topbar">
                <div className="pro-container">
                    <a>
                        <img alt="GitOffer" className="logo" src="/images/GitOffer.png" />
                    </a>
                    <ul className="main-page-nav">
                        <li className="nav-link">
                            <a href="">预览简历</a>
                        </li>
                        <li className="nav-link">
                            <a href="">修改简历</a>
                        </li>
                        <li>
                            <a>如何使用</a>
                        </li>
                        <li className="nav-recommend">
                            <a href="">推荐高手</a>
                        </li>
                        <a href="/signup" className="orange-btn">注册</a>
                        <a href="/login" className="green-btn">登录</a>
                    </ul>
                </div>
            </div>
        )
    }
});