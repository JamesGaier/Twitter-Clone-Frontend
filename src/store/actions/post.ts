import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { RootState } from '../';
import { returnErrors } from './error';
import { configToken, loadUser } from './auth';
import {
    POSTS_LOADING,
    POSTS_LOADED,
    POSTS_FAILED,
    IPost,
    ADD_POST,
    POST_FAILED,
    POST_DELETED,
    POST_LIKED
} from '../actionTypes';

const getPosts = (): ThunkAction<void, RootState, unknown, Action> => (dispatch, getState) => {
    dispatch({type: POSTS_LOADING, payload: true});
    axios.get('http://localhost:8080/api/post', configToken(getState))
            .then((res: AxiosResponse) => dispatch({
                type: POSTS_LOADED,
                payload: res.data
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status, 'POSTS_FAILED'));
                dispatch({type: POSTS_FAILED});
            })
};
const addPost = (post: IPost): ThunkAction<void, RootState, unknown, Action> => (dispatch, getState) => {
    axios.post('http://localhost:8080/api/post', post, configToken(getState))
            .then((res: AxiosResponse) => dispatch({
                type: ADD_POST,
                payload: post
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.status.data, 'POST_FAILED'));
                dispatch({type: POST_FAILED});
            })
};

const deletePost = (_id: string): ThunkAction<void, RootState, unknown, Action> => (dispatch, getState) => {
    axios.delete(`http://localhost:8080/api/post/${_id}`, configToken(getState))
            .then((res: AxiosResponse) => dispatch({
                type: POST_DELETED
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.status.data, 'POST_FAILED'));
                dispatch({type: POST_FAILED});
            })

};

const likePost = (_id: string, amount: number): ThunkAction<void, RootState, unknown, Action> => (dispatch, getState) => {
    axios.put(`http://localhost:8080/api/post/${_id}/${amount}`)
            .then((res: AxiosResponse) => dispatch({
                type: POST_LIKED,
                payload: {_id, amount}
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.status.data, 'POST_FAILED'));
                dispatch({type: POST_FAILED});
            })
};