var React = require('react');
var mui = require('material-ui');
var MessageBox = require('./messagebox.js');

module.exports = WeChat = React.createClass({

    render: function() {
        return (
            <div className="wechat-pcbin">
                <span id="MECHAT-BTN">寻求帮助</span>
            </div>
        )
    }
});