const connect = require('react-redux').connect,
      Action = require('../actions/actions.jsx'),
      Settings = require('../settings.jsx');

const mapStateToProps = function(state) {
    return {
        username: state.username
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        updateUsername(username) {
            dispatch(Action.updateUsername(username));
        }
    }
};

const ConnectedSettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);

module.exports = ConnectedSettings;
