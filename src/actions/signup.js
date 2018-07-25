import api from '../api';
import { userLoggedIn } from './auth';

export const signup = (credentials) => (dispatch) => 
    api.user.signup(credentials).then(user => {
        localStorage.bookwormJWT = user.token;
        dispatch(userLoggedIn(user));
    });

export const confirm = (token) => (dispatch) => 
   api.user.confirm(token).then(user => {
       localStorage.bookwormJWT = user.token;
       dispatch(userLoggedIn);
   });