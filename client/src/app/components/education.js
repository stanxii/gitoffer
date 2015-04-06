var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

module.exports = Education = React.createClass({
    render: function() {
        return (
            <div className="profile-block eduction-history" id="education">
                <div className="title">
                    <h3>教育经历</h3>
                </div>
                <div className="content">
                    <div className="profile-edit-input">
                        <label className="control-label lshif">学校名称</label>
                        <input className="num-input" />
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label">学历</label>
                        <select className="num-input">
                            <option disabled="disabled" selected="selected" value="">请选择学历</option>
                            <option value="junior">大专</option>
                            <option value="bachelor">本科</option>
                            <option value="master">硕士</option>
                            <option value="doctor">博士</option>
                        </select>
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label lshif">就读时间</label>
                        <div className="time-group">
                            <span className="input-group-addon">开始</span>
                            <input className="small-input" />
                            <span className="input-group-addons">结束</span>
                            <input className="small-input"/>
                        </div>
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label">专业</label>
                        <input className="num-input" />
                    </div>
                    <div className="sub-btn">
                        <RaisedButton label="添加" secondary="true" />
                    </div>

                </div>
            </div>
        )
    }

});