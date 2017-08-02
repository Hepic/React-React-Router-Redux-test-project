const combineReducers = require('redux').combineReducers,
      usernameReducer = require('./username.jsx'),
      messageReducer = require('./message.jsx');

const rootReducer = combineReducers({
    username: usernameReducer,
    message: messageReducer
});

module.exports = rootReducer;
