var React = require('react');
var mui = require('material-ui');

var MessageVaild = require('./messagevaild.js');
var BasicInfo = require('./basicinfo.js');
var ExpectJob = require('./expectjob.js');
var Education = require('./education.js');
var WorkExp = require('./workexp.js');
var WeChat = require('./wechat.js');

module.exports = RightProfile = React.createClass({
    render: function() {
        return (
            <div className="right-side">
                <MessageVaild />
                <hr />
                <BasicInfo />
                <hr />
                <Education />
                <hr/>
                <WorkExp />
                <WeChat />
            </div>
        )
    }
});



