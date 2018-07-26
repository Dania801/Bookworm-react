import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

// make an api request, then take the result and dispatch an action
export const login = (credentials) => (dispatch) => 
    api.user.login(credentials).then(user => {
        localStorage.bookwormJWT = user.token;
        setAuthorizationHeader(user.token);
        dispatch(userLoggedIn(user));
    });

export const logout = () => (dispatch) => {
    localStorage.removeItem('bookwormJWT');
    setAuthorizationHeader(); 
    dispatch(userLoggedOut());
};