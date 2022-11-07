import {UserType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



let initialState:InitialStateType = {
    users: []
};

export type InitialStateType ={
    users:Array<UserType>
}

export const usersReducer = (state = initialState, action):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id !== action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id !== action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}


export const followAC = (userId:number) => ({type: FOLLOW, userId} as const)

export const unfollowAC = (userId:number) => ({type: UNFOLLOW, userId} as const)

export const setUsersAC = (users:Array<UserType>) => ({type: SET_USERS, users} as const)

export default usersReducer;
