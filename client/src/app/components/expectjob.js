var React = require('react');
var mui = require('material-ui');
var Checkbox = mui.Checkbox;
var RadioButtonGroup = mui.RadioButtonGroup;
var RadioButton = mui.RadioButton;


module.exports = ExpectJob = React.createClass({
    render: function() {
        return (
            <div className="profile-block expect-job" id="expect">
                <div className="title">
                    <h3>期望工作</h3>
                </div>
                <div className="context">
                    <h4>您擅长的技能是？</h4>
                    <hr className="dash" />
                    <div className="talent-skills">
                       <div className="">

                       </div>
                    </div>
                    <h4>您期望的工作地点是？</h4>
                    <hr className="dash" />
                    <div className="">
                        <div className="">
                            <RadioButtonGroup name="" defaultSelected="">
                                <RadioButton value="" label="北京" />
                            </RadioButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});