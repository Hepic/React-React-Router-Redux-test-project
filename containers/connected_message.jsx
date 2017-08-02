const connect = require('react-redux').connect,
      Action = require('../actions/actions.jsx'),
      Message = require('../message.jsx');

const mapStateToProps = function(state) {
    return {
        message: state.message,
        username: state.username
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        addMessage(user, text) {
            dispatch(Action.addMessage(user, text));
        }
    }
};

const ConnectedMessage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Message);

module.exports = ConnectedMessage;
