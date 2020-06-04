const loggedIn = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return !state; 
        default:
            return false;
    }
}
export default loggedIn;