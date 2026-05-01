import { useChatCtx } from "./chat-context"
import { ChatArea } from "./components/chat-area"
import { WelcomeUser } from "./components/welcome-user"


export const ChatPage = () => {

    const {user} = useChatCtx()
    if (user) return <ChatArea/>
    return  <WelcomeUser />
}