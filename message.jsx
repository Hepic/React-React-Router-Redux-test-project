const React = require('react'),
      ReactDOM = require('react-dom');

const Message = React.createClass({
    getInitialState: function() {
        return {
            inputValue: '' 
        };
    },
    onChange: function(e) {
        this.setState({inputValue: e.target.value});
    },
    onSubmit: function(e) {
        e.preventDefault();
        this.props.addMessage(this.props.username, this.state.inputValue);
        this.setState({inputValue: ''});
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.inputValue} onChange={this.onChange} />
                </form>

                {
                    this.props.message.map(function(elem, ind) {
                        return <p key={ind}>{elem.user}: {elem.text}</p>;
                    })
                }
            </div>
        );
    }
});

module.exports = Message;
