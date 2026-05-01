/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

const pages:string[] = [
    "helloArcticle", "darkLight", "chatExercise", "todo"
] as const

type TPages = typeof pages[number]

interface TPagesCtx {
    pages : string[]
    presentPage: TPages
    setPresentPage: (page:TPages)=> void
}

const PagesContext = createContext<TPagesCtx | null>(null)

export const PagesProvider = ({children}:{children:ReactNode}) =>{
    const [presentPage, setPresentPage]=useState<TPages>("chatExercise")

    return(
        <PagesContext.Provider value={{pages, presentPage, setPresentPage}}>
            {children}
        </PagesContext.Provider>

    )
}

export const usePageCtx = () =>{
    const context = useContext(PagesContext)
    if(!context){
        throw new Error("UsePageCtx deve ser utilizado dentro de um provider")
    }
    return context
}