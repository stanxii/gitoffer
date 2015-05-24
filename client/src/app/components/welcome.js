var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

module.exports = Welcome = React.createClass({
    render: function () {
        return (
            <div className="welcome-background">
                <div className="welcome">
                    <div className="left-info">欢迎来到GitOffer !</div>
                    <div className="middle-info">
                        <div className="top-info">请花15分钟填写简历并提交申请。</div>
                        <div className="bottom-info">一旦您的申请通过，我们会立即将您加入到下一次的程序员拍卖中。</div>
                    </div>
                    <div className="right-info">
                        <RaisedButton className="messagebtn" label="申请参加拍卖" disabled={true} primary />
                    </div>
                </div>
            </div>
        )
    }
});
