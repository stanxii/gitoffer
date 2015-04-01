var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

module.exports = RightProfile = React.createClass({
    render: function() {
        return (
            <div className="right-side">
                <MessageVaild />
            </div>
        )
    }
});

var MessageVaild = React.createClass({
    render: function() {
        return (
            <div className="profile-block msg-valid" id="valid">
                <div className="title">
                    <h2>短信验证</h2>
                </div>
                <div className="content">
                    <div className="">
                        <label className="control-label">手机</label>
                        <input className="num-input" />
                        <div className="input-btn">
                            <RaisedButton label="免费发送验证短信" primary />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

