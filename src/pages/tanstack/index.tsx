import { SuperProvider } from "./utils/super-provider"
import { RickMortyById } from "./components/rick-morty-character"
import { Lime } from "../../ui/lime-components"
import { useState } from "react"
import { Button } from "../../ui/button"
import { ListOfPosts } from "./components/list-of-posts"
import { invalidateCharQuery } from "./api/rick-query"

export const TanstackPage = () => {
    const [numberId, setNumberId] = useState(1)
    const [startLoadQuery, setStartLoadQuery] = useState<boolean>(false)

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const id = Number(e.target.value)
        setStartLoadQuery(false)
        setNumberId(id)
    }

    const resetAllChars = () =>{
        invalidateCharQuery()
    }

    return(
        <SuperProvider>
            <Lime.Area>
                <Button
                    label="Invalidate Chars"
                    onClick={resetAllChars}
                    className="mx-8"
                />
                <Lime.Input 
                    onChange={handleInputChange}
                    type="number" 
                    value={numberId} 
                    placeholder="insira um numero de personagem" 
                    className="mx-8"
                />
                <Button 
                    label="Get Char" 
                    onClick={()=>setStartLoadQuery(true)}
                    className="mx-8"
                />
            <RickMortyById characterId={numberId} enabled={startLoadQuery} />
            <ListOfPosts />
            </Lime.Area>
            
        </SuperProvider>
    )
}