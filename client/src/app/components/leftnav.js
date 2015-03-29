var React = require('react');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;

module.exports = LeftNavigation = React.createClass({
    render: function() {
        return (
                <div className="left-side">
                    <div className="side-nav">
                        <div className="side-li">
                            <div className="circle"></div>
                            短信验证
                        </div>
                        <div className="side-li">
                            <div className="circle"></div>
                        个人信息
                        </div>
                        <div className="side-li">
                            <div className="circle"></div>
                        期望工作
                        </div>
                        <div className="side-li">
                            <div className="circle"></div>
                        教育经历
                        </div>
                        <div className="side-li">
                            <div className="circle"></div>
                        工作经历
                        </div>
                        <div className="side-li">
                            <div className="circle"></div>
                        技术总结
                        </div>
                        <div className="side-li">
                            社交网络
                        </div>
                        <div className="side-li">
                            隐私保护
                        </div>
                        <FlatButton className="submit-btn" label="保存" secondary={true}/>
                        <a className="button-arrow" href="">预览</a>
                    </div>
                </div>
        )
    }
});