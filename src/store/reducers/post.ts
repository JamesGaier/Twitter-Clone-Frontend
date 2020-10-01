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
interface IPostState {
    type: string,
    loading: boolean | null,
    amount: number,
    payload: IPost
}

const initialState = {
    posts: [],
    loading: false
};

const posts = (state = initialState, action: IPostState) => {
    switch(action.type) {
        case POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case POSTS_LOADED:
            return {
                ...state,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case POST_DELETED:
            return {
                ...state,
                posts: state.posts.filter((el: IPost) => el._id === action.payload)
            }
        case POST_LIKED:
            const likedPost: IPost = state.posts.filter((el: IPost) => el._id === action.payload._id)[0];
            likedPost.likes += action.amount;
            return {
                ...state,
                posts: [likedPost, ...state.posts]
            }
        case POST_FAILED:
        case POSTS_FAILED:
            return {
                ...state,
                loading: null,
                amount: null,
                posts: []
            }
        default:
            return state;
    }
};

export default posts;