//import axios from '../../axios-emi';
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userCode) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userCode: userCode,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('USER_CODE');
    localStorage.removeItem('USER_FULLNAME');
    localStorage.removeItem('expirationDate');

    // localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};


export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());

        const formData = new FormData();
        formData.set('username', username);
        formData.set('passwd', password);

        let url = '/login.php';
        axios.post(url, formData)
            .then(response => {

                const expiry = 3600;
                //1800
                const expirationDate = new Date(new Date().getTime() + expiry * 1000);
                localStorage.setItem('token', response.data.auth_token);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('USER_CODE', response.data.USER_CODE);
                localStorage.setItem('USER_FULLNAME', response.data.USER_FULLNAME);

                dispatch(authSuccess(response.data.auth_token, response.data.USER_CODE));
                //dispatch(checkAuthTimeout(expiry));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('USER_CODE');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};