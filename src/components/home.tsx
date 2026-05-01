import type { ReactNode } from "react"
import { Arcticle } from "../ui/arcticle"
import { usePageCtx } from "../contexts/pagesCtx"
import { Button } from "../ui/button"

interface THome {
    children: ReactNode
}

export const Home = ({children}:THome) =>{
    const {setPresentPage} = usePageCtx()


    return(
        <div className="flex flex-row">
            <div className="flex w-1/5 h-screen bg-zinc-950">
                <Arcticle.Area className="w-full">
                    <Arcticle.Title content="Sidebar"/>
                    <Button 
                        onClick={()=>setPresentPage("helloArcticle")}
                        label="Home"
                    />
                    <Button 
                        onClick={()=>setPresentPage("darkLight")}
                        label="Dark Light"
                    />
                    <Button 
                        onClick={()=>setPresentPage("chatExercise")}
                        label="Chat Exercise"
                    />
                    <Button 
                        onClick={()=>setPresentPage("todo")}
                        label="ToDo List"
                    />
                    <Button 
                        onClick={()=>setPresentPage("tanstack")}
                        label="Tanstack Query"
                    />
                </Arcticle.Area>
            </div>
            <div className="bg-zinc-950 text-amber-50 h-screen text-center flex flex-1">
                {children}
            </div>
        </div>
    )
}