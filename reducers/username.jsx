const usernameReducer = function(state=null, action) {
    var new_state = null;

    switch(action.type) {
        case 'UPDATE_USERNAME':
            new_state = action.payload.username;
        break;

        default:
            new_state = state;
        break;
    }

    return new_state;
};

module.exports = usernameReducer;
