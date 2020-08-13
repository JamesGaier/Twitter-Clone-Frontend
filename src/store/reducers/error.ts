import { IError, IErrorPayload } from '../actions/error';
import { GET_ERRORS, CLEAR_ERRORS } from '../actionTypes';
const initialState: IErrorPayload = {
    msg: {},
    status: null,
    id: null
};
const error = (state = initialState, action: IError) => {
    switch(action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
    }
};
export default error;