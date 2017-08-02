module.exports = {
    updateUsername(username) {
        return {
            type: 'UPDATE_USERNAME',
            payload: {
                username: username  
            }
        };
    },
    addMessage(user, text) {
        return {
            type: 'ADD_MESSAGE',
            payload: {
                user: user,
                text: text
            }
        };
    }
};
