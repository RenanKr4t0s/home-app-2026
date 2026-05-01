/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, type ReactNode } from "react"
import { type TChat, type TChatCtx, type TMessage } from "./chat-types"
import { ChatReducer, TOperateUser } from "./chat-reducer"


const ChatContext =  createContext<TChatCtx|null>(null)

export const ChatCtxProvider = ({children}:{children : ReactNode}) =>{

    const initialUser:TChat = {
        user: null,
        messages:[]
    }

    const [chat, dispatch] = useReducer( ChatReducer, initialUser )

    const setUser = (user:string) => {
        dispatch({
            type:TOperateUser.SetU,
            payload: user
        })
    }

    const AddMessage = (message:TMessage)=>{
        dispatch({
            type:TOperateUser.AddM,
            payload:message
        })
    }

    return(
        <ChatContext.Provider value={{
            user:chat.user, 
            messages:chat.messages, 
            setUser, 
            AddMessage
        }}>
            {children}
        </ChatContext.Provider>
    )

}

export const useChatCtx = () => {
    const context = useContext(ChatContext)
    if (!context){
        throw new Error ("Chat context precisa ser utilizado dentro de um provider")
    }
    return context
}