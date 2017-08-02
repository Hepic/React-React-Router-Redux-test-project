const messageReducer = function(state=[], action) {
    var new_state = null;

    switch(action.type) {
        case 'ADD_MESSAGE':
            const obj = {
                user: action.payload.user,
                text: action.payload.text
            }

            new_state = state.concat([obj]);
        break;

        default:
            new_state = state;
        break;
    }

    return new_state;
};

module.exports = messageReducer;
