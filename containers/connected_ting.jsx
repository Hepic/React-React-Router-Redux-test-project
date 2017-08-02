const connect = require('react-redux').connect,
      Action = require('../actions/actions.jsx'),
      Ting = require('../ting.jsx');

const mapStateToProps = function(state) {
    return {
        username: state.username
    }
};

const ConnectedTing = connect(
    mapStateToProps,
    null
)(Ting);

module.exports = ConnectedTing;
