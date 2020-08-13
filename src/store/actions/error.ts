import { GET_ERRORS, CLEAR_ERRORS } from '../actionTypes';
export interface IErrorPayload {
    msg: Object,
    status: number | null | undefined,
    id: string | null | undefined
}
export interface IError {
    type: string,
    payload: IErrorPayload
}

export const returnErrors = (msg: string, status: number, id?: Partial<string>): IError => {
    return {
        type: GET_ERRORS,
        payload: {msg, status, id}
    };
};
export const clearErrors = (): IError => {
    return {
        type: CLEAR_ERRORS,
        payload: {msg: {}, status: null, id: null}
    };
};