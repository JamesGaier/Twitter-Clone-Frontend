// import auth from './reducers';
import { IUser } from './actionTypes';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';
export interface IAuth {
    token: string,
    modalOpen: boolean
}

export interface RootState {
    auth: IAuth
    user: IUser
}
// export default RootState;
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: Function,
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:
        typeof compose;
    }
}


export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);