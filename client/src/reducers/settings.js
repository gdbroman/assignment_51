const settings = (state = false, action) => {
    switch(action.type) {
        case 'UPDATE':
            return !state; 
        default:
            return false;
    }
}
export default settings;