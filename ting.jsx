const React = require('react'),
      ReactDOM = require('react-dom'),
      ConnectedMessage = require('./containers/connected_message.jsx');

const Ting = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Username is {this.props.username}</h1>
                <ConnectedMessage />
            </div>
        );
    }
});

module.exports = Ting;
