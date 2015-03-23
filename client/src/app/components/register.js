/**
 * Created by may on 2015/3/17.
 */
var React = require('react'),
    mui = require('material-ui'),
    Tabs = mui.Tabs,
    Tab = mui.Tab;

module.exports = RegisterEntry = React.createClass({
    render: function() {
        return (
            <div className="register_main">
                <div className="register_content">
                    <h2 className="register_title">立即注册</h2>
                    <RegisterTabs />
                </div>
            </div>

        );
    }
});

var RegisterTabs = React.createClass({
    render: function() {
        return (
            <Tabs>
                <Tab label="我是程序员">
                    <div className="tab-template-container">

                    </div>
                </Tab>
                <Tab label="我是HR">
                    <div className="tab-template-container">

                    </div>
                </Tab>
            </Tabs>
        );
    }
});