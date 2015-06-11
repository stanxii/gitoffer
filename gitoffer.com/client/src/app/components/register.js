/**
 * Created by may on 2015/3/17.
 */
var React = require('react'),
    mui = require('material-ui'),
    Checkbox = mui.Checkbox,
    Tabs = mui.Tabs,
    Tab = mui.Tab;

var CityDialog = React.createClass({
    dialog_close:function(e){
        React.findDOMNode(this.refs.citys).setAttribute("display","none");
    },
    render: function () {
        return (
            <div className="citydialog" ref="citys">
                <div className="citydialog_header">
                    <span>期望工作地点只能选一个       </span>
                    <a href="#" id="citydialog_confirm">[确定]</a>
                    <a href="#" id="citydialog_close" onClick={this.dialog_close}>[关闭]</a>
                </div>
                <div className="citydialog_body">
                    <div className="radio_buttons required">
                        <label className="citydialog_lab">
                            <input className="radio-input" name="checkcity" id="city_1" type="radio" value="1" />杭州
                        </label>
                        <label className="citydialog_lab">
                            <input className="radio-input" name="checkcity" id="city_2" type="radio" value="2" />上海
                        </label>
                        <br />
                        <label className="citydialog_lab">
                            <input className="radio-input" name="checkcity" id="city_3" type="radio" value="3" />深圳
                        </label>
                        <label className="citydialog_lab">
                            <input className="radio-input" name="checkcity" id="city_4" type="radio" value="4" />北京
                        </label>
                        <br />
                        <label className="citydialog_lab">
                            <input className="radio-input" name="checkcity" id="city_5" type="radio" value="5" />广州
                        </label>
                        <label className="citydialog_lab">
                            <input className="radio-input" name="checkcity" id="city_6" type="radio" value="6" />其它

                        </label>
                        <input className="city_custom" type="text" />
                    </div>
                </div>
            </div>
        );
    }

});

var RegisterTabs = React.createClass({
    render: function() {
        return (
            <Tabs>
                <Tab label="我是程序员">
                    <div className="tab-template-container">
                        <p>Employer Application </p>
                        <div className="register_form">
                            <div className="register_formrow">
                                <div className="register_item rlb"><label>常用邮箱</label></div>
                                <div className="register_item rip"><input text="email" name="email" placeholder="EMAIL" /> </div>
                            </div>
                            <div className="register_formrow">
                                <div className="register_item rlb"><label>密码</label></div>
                                <div className="register_item rip"><input text="password" name="password" placeholder="Password" /> </div>
                            </div>
                            <div className="register_formrow">
                                <div className="register_item rlb"><label>姓名</label></div>
                                <div className="register_item rip"><input text="text" name="name" placeholder="Name" /> </div>
                            </div>
                            <div className="register_formrow">
                                <div className="register_item rlb"><label>电话号码</label></div>
                                <div className="register_item rip"><input text="text" name="phone" placeholder="xxxx-xxx-xxxx" /> </div>
                            </div>
                            <hr className="register_hr" />
                            <div className="register_formrow">
                                <div className="register_item rab"><label>期望的工作城市</label></div>
                                <div className="register_item rnp"><input text="text" name="city" placeholder="" onkeydown="return false" /> </div>
                            </div>
                            <hr className="register_hr" />
                            <div className="register_agreement">
                                <label className="optional">
                                    <div className="checkbox_agree checked">
                                        <input checked="checked" className="optional" type="checkbox" />
                                    </div>
                                    我已阅读并同意
                                    <a href="#" target="_blank">gitOffer注册协议</a>
                                </label>
                            </div>
                            <div className="register_submit">
                                <input type="submit" value="确定" />
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab label="我是HR">
                    <div className="tab-template-container">
                        <p>Request Your Invite </p>
                        <div className="register_form">
                            <div className="register_formrow">
                                <div className="register_item rlb"><label>企业邮箱</label></div>
                                <div className="register_item rip"><input text="email" name="email" placeholder="EMAIL" /> </div>
                            </div>
                            <div className="register_formrow">
                                <div className="register_item rlb"><label>密码</label></div>
                                <div className="register_item rip"><input text="password" name="password" placeholder="Password" /> </div>
                            </div>
                            <div className="register_formrow">
                                <div className="register_item rlb"><label>联系人</label></div>
                                <div className="register_item rip"><input text="text" name="name" placeholder="Name" /> </div>
                            </div>
                            <div className="register_formrow">
                                <div className="register_item rlb"><label>电话号码</label></div>
                                <div className="register_item rip"><input text="text" name="phone" placeholder="xxxx-xxx-xxxx" /> </div>
                            </div>
                            <hr className="register_hr" />
                            <div className="register_agreement">
                                <label className="optional">
                                    <div className="checkbox_agree">
                                        <input checked="checked" className="optional" type="checkbox" />
                                    </div>
                                    我已阅读并同意,  请仔细阅读
                                    <a href="#" target="_blank">《企业审核需知》</a>
                                </label>
                            </div>
                            <div className="register_submit">
                                <input type="submit" value="确定" />
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        );
    }
});


module.exports = RegisterEntry = React.createClass({
    render: function() {
        return (
            <div className="register_main">
                <div className="register_content">
                    <h2 className="register_title">立即注册</h2>
                    <RegisterTabs />
                    <CityDialog />
                </div>
            </div>

        );
    }
});
