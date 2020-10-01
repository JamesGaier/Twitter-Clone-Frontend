import { Document } from 'mongoose';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';

export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_LOADED = 'POSTS_LOADED';
export const POSTS_FAILED = 'POSTS_FAILED';
export const ADD_POST = 'ADD_POST';
export const POST_FAILED = 'POST_FAILED';
export const POST_LIKED = 'LIKE_POST';
export const POST_DELETED = 'POST_DELETED';
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export interface IPost extends Document {
    dateCreated: Date,
    postBody: string,
    likes: number,
    shares: number,
    owner: IUser["_id"]
}

export interface IUser extends Document{
    name: string,
    phone?: number,
    email?: string,
    password: string,
    birthday: Date,
    avatar?: string,
    posts: Array<IPost['_id']>,
}

