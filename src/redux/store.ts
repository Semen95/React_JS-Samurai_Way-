import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
type DialogType = {
    id: number,
    name: string,
}
type MessageType = {
    id: number
    message: string
}
export type SidebarType = {}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>,
    newMessageBody: string;
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocationType
}

export type UsersLocationType = {
    city: string
    country: string
}


export type UserPageType = {
    users: Array<UserType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UserPageType
}

export type StoreType = {
    _state: StateType,
    _callSubscriber: (_state) => void,
    getState: () => StateType,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    AddPostType
    | UpdateNewTextType
    | UpdateNewMessageBodyType
    | SendMessageType

export type AddPostType = ReturnType<typeof addPostAC>
export type UpdateNewTextType = ReturnType<typeof updateNewPostTextAC>

export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
export type SendMessageType = ReturnType<typeof sendMessageCreator>


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 10},
                {id: 3, message: "Blabla", likesCount: 23},
                {id: 4, message: "Dada", likesCount: 3},
            ],
            newPostText: "it-kamasutra.com",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: "Valera"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Ira"},
                {id: 5, name: "Egor"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Niga"}
            ],
            newMessageBody: ""
        },
        sidebar: {},
        usersPage: {
            users: [
                {
                    id: 1,
                    photoUrl: "https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg",
                    followed: false,
                    fullName: "Dmitry",
                    status: "I am a boss",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: "https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg",
                    followed: true,
                    fullName: "Ivan",
                    status: "I am a boss too",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 3,
                    photoUrl: "https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg",
                    followed: false,
                    fullName: "Andrew",
                    status: "I am a boss too",
                    location: {city: "Kiev", country: "Ukraine"}
                }]
        }
    },
    _callSubscriber(_state: StateType) {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}


export default store;
