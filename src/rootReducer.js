import { combineReducers } from 'redux';
import user from './reducers/user';

export default combineReducers({
    // current user 
    user: () => ({})
});