import {PostType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 10},
        {id: 3, message: "Blabla", likesCount: 23},
        {id: 4, message: "Dada", likesCount: 3},
    ],
    newPostText: "it-kamasutra.com",
    profile:null
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,profile:action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {type: ADD_POST, newPostText: newPostText} as const
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile} as const)

export const updateNewPostTextAC = (newText: string | undefined) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}


export default profileReducer;
