import * as actionTypes from '../action/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    token: localStorage.getItem("token"),
    userCode: localStorage.getItem("USER_CODE"),
    userFullName: localStorage.getItem("USER_FULLNAME"),
    touch: false,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};


const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true, touch: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userCode: action.userCode,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        touch: true,
        loading: false
    });
};


const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null, touch: false });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;