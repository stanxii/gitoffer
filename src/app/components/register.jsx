/**
 * Created by may on 2015/3/17.
 */
var React = require('react'),
    mui = require('material-ui'),
    TextField = mui.TextField,
    Tabs = mui.Tabs,
    Tab = mui.Tab;

module.exports = RegisterEntry = React.createClass({
    render: function() {
        return (
            <div className="register_main">
                <div className="register_content">
                    <h2 className="register_title">立即注册</h2>
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Floating Label Text" />
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
                <Tab label="我是程序员" tabWidth="500">
                    <div className="tab-template-container">

                    </div>
                </Tab>
                <Tab label="我是HR" tabWidth="500">
                    <div className="tab-template-container">

                    </div>
                </Tab>
            </Tabs>
        );
    }
});
