/* eslint-disable react-refresh/only-export-components */

import type { ComponentProps, ReactNode } from "react"

interface TText {
    content : string
}

interface TArea extends ComponentProps<'div'> {
    children : ReactNode
}

const HalfArea = ({children, className, ...rest}:TArea) =>{
   return(
        <div className={`w-1/2 p-2 m-auto h-1/2 border rounded-2xl border-lime-800/50 
            flex flex-col gap-2 text-start ${className}`} {...rest}>
            {children}
        </div>
    )
}

const Area = ({children, className, ...rest}:TArea) =>{
   return(
        <div className={`m-2 border border-amber-950/30 rounded-2xl
      flex flex-col gap-2 p-2 text-start ${className}`} {...rest}>
            {children}
        </div>
    )
}

const Title = ({content}:TText) => {
    return(<h2 className="text-amber-200 text-2xl">{content}</h2>);
}

const Paragraph = ({content}:TText) => {
    return(<p className="text-zinc-100">{content}</p>);
}

export const Arcticle = {
    Area,
    HalfArea,
    Title,
    Paragraph
}