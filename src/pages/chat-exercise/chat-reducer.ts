import { type TChat, type TMessage } from "./chat-types"

export enum TOperateUser {
    SetU = "setUser",
    AddM = "addMessage"
}

interface setUser {
    type: TOperateUser.SetU
    payload: string
}

interface addMessage {
    type: TOperateUser.AddM
    payload: TMessage
}

type TChatActions = setUser | addMessage

export const ChatReducer = (chat:TChat, action:TChatActions) => {
    switch (action.type){
        case TOperateUser.SetU:
            return {...chat, user:action.payload}
        case TOperateUser.AddM:
            return {...chat, messages:[...chat.messages, action.payload]}

        default:
            return chat
    }
}