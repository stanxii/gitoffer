var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

module.exports = Require = React.createClass({
    render: function() {
        return (
            <div className="req-main">
                <div className="require">
                    <div className="require-item">您还需要填写：</div>
                    <div className="require-info">
                        <a href="">短信验证</a>
                        <span className="separator">|</span>
                        <a href="#/profile/edit#personinfo">个人信息</a>
                        <span className="separator">|</span>
                        <a href="">期望工作</a>
                        <span className="separator">|</span>
                        <a href="#/profile/edit#education">教育经历</a>
                        <span className="separator">|</span>
                        <a href="">工作经历</a>
                        <span className="separator">|</span>
                        <a href="">技术总结</a>
                    </div>
                    <SubmitBtn />
                </div>
            </div>
        )
    }
});

var SubmitBtn = React.createClass({
    render: function () {
        return (
            <RaisedButton label="提交申请" primary={true} disabled={true}/>
        )
    }
});

