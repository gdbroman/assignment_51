import isLogged from './isLogged';
import settings from './settings';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  loggedIn: isLogged,
  settings: settings
});

export default allReducers;