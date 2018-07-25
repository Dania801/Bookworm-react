import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

// make an api request, then take the result and dispatch an action
export const login = (credentials) => (dispatch) => 
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));