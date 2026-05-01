
export interface TMessage {
    sender: "chatbot"|"user"
    message: string
}

export interface TChat {
    user: string | null
    messages: TMessage[]
}

export interface TChatCtx extends TChat {
    setUser: (name:string) => void
    AddMessage: (newMessage:TMessage) => void
}