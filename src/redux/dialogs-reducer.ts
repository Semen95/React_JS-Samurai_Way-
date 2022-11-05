const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 5, message: body}]
            };
        }
        default:
            return state;
    }
};


export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}


export default dialogsReducer;