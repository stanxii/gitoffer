var React = require('react');
var mui = require('material-ui');

var MessageVaild = require('./messagevaild.js');

module.exports = RightProfile = React.createClass({
    render: function() {
        return (
            <div className="right-side">
                <MessageVaild />
            </div>
        )
    }
});



