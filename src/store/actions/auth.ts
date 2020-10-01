import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../../store';
import
    {
        USER_LOADING,
        USER_LOADED,
        LOGIN_FAILED,
        LOGIN_SUCCESS,
        LOGOUT_SUCCESS,
        REGISTER_FAILED,
        REGISTER_SUCCESS,
        AUTH_ERROR,
        MODAL_OPEN,
        MODAL_CLOSE
    } from '../actionTypes';
import { returnErrors } from './error';


export const configToken = (getState: () => RootState): AxiosRequestConfig => {
    const token: string = getState().auth['token'];

    // Header
    const config: AxiosRequestConfig = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": ""
        }
    };

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;

}
export const loadUser = (): ThunkAction<void, RootState, unknown, Action> =>
                            (dispatch: Dispatch<any>, getState) =>  {
    dispatch({type: USER_LOADING, payload: true});
    axios.get('http://localhost:8080/api/auth/', configToken(getState))
            .then((res:AxiosResponse) => dispatch({
                type: USER_LOADED,
                payload: res.data
            }))
            .catch(err => {
                dispatch({type: AUTH_ERROR, payload: err.message});
            })
};

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

interface LoginRequest {
    email: string,
    phone: number,
    password: string
}
export const login = ({email, phone, password}: LoginRequest):
                        ThunkAction<void, RootState, unknown, Action> =>
                        (dispatch, getState) => {

    const config: AxiosRequestConfig = {
        "headers": {
            "Content-type": "application/json"
        }
    };

    const body = JSON.stringify({email, phone, password});

    axios.post('http://localhost:8080/api/auth/login', body, config)
            .then((res: AxiosResponse) => dispatch({
                type: LOGIN_SUCCESS, payload: res.data
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAILED'));
                dispatch({type: LOGIN_FAILED});
            })
};
export interface IUser {
    name: string,
    phone?: number,
    email?: string,
    password: string,
    birthday: Date,
    avatar?: string,
}
interface RegisterRequest {
    body: IUser
}
export const register = (req: RegisterRequest):
                            ThunkAction<void, RootState, unknown, Action> =>
                            (dispatch, getState) => {

    const config = {
        "headers": {
            "Content-type": "application/json"
        }
    };
    axios.post('http://localhost:8080/api/auth/register', req.body, config)
            .then((res: AxiosResponse) => dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            }))
            .catch(err => {
                dispatch(returnErrors(err.message, err.status, 'REGISTER_FAILED'));
                dispatch({type: REGISTER_FAILED});
            })
}
export const setModalState = (modalState: boolean):
                                ThunkAction<void, RootState, unknown, Action> => dispatch => {
    if(modalState) {
        dispatch({ type: MODAL_OPEN })
    }
    else {
        dispatch({ type: MODAL_CLOSE })
    }
}