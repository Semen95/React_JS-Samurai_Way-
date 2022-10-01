export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type SidebarType = {}

export type ProfilePageType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
}
export type DialogsPageType = {
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 10},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: "Valera"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Ira"},
            {id: 5, name: "Egor"},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
        ]
    },
    sidebar: {}
}

export default state;