const React = require('react'),
      ReactDOM = require('react-dom');

const Settings = React.createClass({
    getInitialState: function() {
        return {
            inputValue: ''
        };
    },
    onChange: function(e) {
        this.setState({inputValue: e.target.value});
    },
    onClick: function(e) {
        e.preventDefault();
        this.props.updateUsername(this.state.inputValue);
    },
    render: function() {
        return (
            <div>
                <h1>Username is {this.props.username}</h1>
                <input onChange={this.onChange} />
                <button onClick={this.onClick}>Change username</button>
            </div>
        );
    }
});

module.exports = Settings;
