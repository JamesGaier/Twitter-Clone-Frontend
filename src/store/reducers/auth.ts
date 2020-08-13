import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    AUTH_ERROR,
} from '../actionTypes';
import { IUser } from '../actions/auth';

interface Auth {
    token: string | null,
    isAuthenticated: boolean | null,
    isLoading: boolean,
    user: IUser | null
}
interface AuthState {
    type: string
    payload: Auth
}
const initialState: Auth = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};
const auth = (state = initialState, action: AuthState) => {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setToken('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case LOGOUT_SUCCESS:
        case LOGIN_FAILED:
        case REGISTER_FAILED:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            };
    }
};
export default auth;