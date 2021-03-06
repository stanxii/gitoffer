var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

module.exports = MessageVaild = React.createClass({
    getInitialState: function() {
      return {send: false};
    },
    MobileValid: function(event) {
        this.setState({send: !this.state.send});
        var mobile = $('.num-input').val().trim();
        var validReg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/;
        if(validReg.test(mobile))
        {
            React.render(
                <ReSendButton />,
                document.getElementById('MessageSend')
            );
        }
        else
            alert(mobile);
    },

    render: function() {
        var labels = this.state.send ? '60 秒后重新获取' : '免费发送验证短信';
        return (
            <div className="profile-block msg-valid" id="valid">
                <div className="title">
                    <h3>短信验证</h3>
                </div>
                <div className="content">
                    <div className="">
                        <label className="control-label">手机</label>
                        <input className="num-input" type="tel" ref="numInput"/>
                        <div className="input-btn" onClick={this.MobileValid}>
                            <div id="MessageSend">
                                <RaisedButton className="messagebtn" label={labels} primary />
                            </div>
                        </div>
                    </div>
                    <div className="tip">
                        <img className="icon-info" src="/images/info.svg" />
                        <span className="icon-text">短信验证成功后才能提交申请哦</span>
                    </div>
                </div>
            </div>
        );
    }
});