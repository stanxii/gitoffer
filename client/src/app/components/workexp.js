var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

module.exports = WorkExp = React.createClass({
    render: function() {
        return (
            <div className="profile-block work-experience" id="work-exper">
                <div className="title">
                    <h3>工作经历</h3>
                </div>
                <div className="content">
                    <div className="profile-edit-input">
                        <label className="control-label lshif">公司名称</label>
                        <input className="num-input" />
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label lshif">职位名称</label>
                        <input className="num-input" />
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label lshif">在职时间</label>
                        <div className="time-group">
                            <span className="input-group-addon">开始</span>
                            <input className="small-input" />
                            <span className="input-group-addons">结束</span>
                            <input className="small-input"/>
                        </div>
                    </div>
                    <div className="profile-edit-input-textarea">
                        <label className="control-label lshif">工作描述</label>
                        <textarea rows="5" className="textarea"></textarea>
                    </div>
                    <div className="sub-btn">
                        <RaisedButton label="添加" secondary="true" />
                    </div>
                </div>
            </div>
        )
    }
});