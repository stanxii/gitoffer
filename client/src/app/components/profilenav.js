var React = require('react'),
    mui = require('material-ui'),
    IconButton = mui.IconButton,
    FontIcon = mui.FontIcon;

module.exports = ProfileNavigation = React.createClass({
    render: function() {
        return (
            <div className="topbar">
                <div className="container">
                    <div className="pro-container">
                        <a>
                            <img alt="GitOffer" className="logo" src="/images/GitOffer.png" />
                        </a>
                        <ul className="main-page-nav">
                            <li className="nav-link">
                                <a href="">个人简历</a>
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
                        </ul>
                        <div className="setbtn">
                            <IconButton tooltip="设置" touch={true} iconClassName="muidocs-icon-action-stars mui-font-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

