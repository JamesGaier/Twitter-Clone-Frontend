import { combineReducers } from 'redux';

import posts from './post';
import error from './error';
import auth from './auth';
export const rootReducer = combineReducers({
    posts,
    error,
    auth
});
// export type RootState = ReturnType<typeof rootReducer>;