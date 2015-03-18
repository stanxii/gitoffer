var React = require('react');

module.exports = IndexHeader = React.createClass({
    render: function() {
        return (
            <div className="topbar">
                <div className="container">
                    <a href="/">
                        <img alt="GitOffer" className="logo" src="../../images/GitOffer.png" />
                    </a>
                    <ul className="main-page-nav">
                        <li className="nav-link">
                            <a href="">我要招人</a>
                        </li>
                        <li className="nav-link">
                            <a href="">如何使用</a>
                        </li>
                        <li className="nav-link">
                            <a href="">推荐高手</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});
