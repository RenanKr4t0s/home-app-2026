import { useState, type KeyboardEvent } from "react"
import { Arcticle } from "../../../ui/arcticle"
import { Lime} from "../../../ui/lime-components"
import { useChatCtx } from "../chat-context"
import { Button } from "../../../ui/button"

export const WelcomeUser = () => {
    const { setUser} = useChatCtx()

    const [tempUser, setTempUser] = useState<string>("Usuário")

    const handleSaveClick = () =>{
        setUser(tempUser)
    }

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.code === "Enter") {
            handleSaveClick()
        }
    }

    return(
        <Arcticle.HalfArea>
            <Arcticle.Title content={`Bem Vindo ${tempUser}`} />
            <Arcticle.Paragraph content="Insira seu nome" />
            <Lime.Input 
                placeholder="Nome" 
                onChange={e=>{setTempUser(e.target.value)}}
                onKeyUp={handleKeyUp}
            />
            <Button 
                onClick={handleSaveClick} 
                label="Salvar Usuário"
            />
        </Arcticle.HalfArea>
    )
}