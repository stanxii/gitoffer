var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

module.exports = BasicInfo = React.createClass({
    render: function () {
        return (
            <div className="profile-block basicinfo" id="basicinfo">
                <a className="title" name="personinfo">
                    <h3>基本信息</h3>
                </a>
                <div className="context">
                    <div className="upload-pic">
                        <div className="image-block">
                            <img className="border" src="./images/talenter.jpg"/>
                            <div className="image-btn">
                                <RaisedButton secondary={true}>
                                    <span className="mui-raised-button-label example-image-button">上传头像</span>
                                    <input type="file" id="imageButton" className="example-image-input"></input>
                                </RaisedButton>
                            </div>
                        </div>
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label">姓名</label>
                        <input className="num-input" />
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label">性别</label>
                        <select className="num-input">
                            <option disabled="disabled" selected="selected" value="">请选择性别</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
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
                        <label className="control-label lshif">工作年限</label>
                        <select className="num-input">
                            <option disabled="disabled" selected="selected" value="">请选择工作年限</option>
                            <option value="fresh_graduate">应届毕业生</option>
                            <option value="one_year">一年</option>
                            <option value="two_year">两年</option>
                            <option value="three_year">三年</option>
                            <option value="four_year">四年</option>
                            <option value="five_year">五年</option>
                            <option value="more_than_five_years">五年以上</option>
                        </select>
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label">手机</label>
                        <input className="num-input" />
                    </div>
                    <div className="profile-edit-input">
                        <label className="control-label">邮箱</label>
                        <input className="num-input" disabled="disabled"/>
                    </div>
                </div>
            </div>
        )
    }
})