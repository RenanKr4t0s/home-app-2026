/* eslint-disable react-refresh/only-export-components */
import type { ComponentPropsWithoutRef, ReactNode, ComponentProps } from "react"

interface TInput extends ComponentPropsWithoutRef<'input'> {
    label? : string
    onEnter? : ()=>void
}

interface TArea extends ComponentProps<'div'> {
    children : ReactNode
}

const Input = (props:TInput)=>{
    const{
        className,
        onChange,
        onEnter = ()=>{console.log("Deu enter")},
        placeholder,
        type = "text",
        value
    } = props

    const handleKeyDown= ({e} :{e: React.KeyboardEvent<HTMLInputElement>}) => {
        if (e.key === 'Enter'){
            onEnter()
        }
    }

    return(
        <input 
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
            onKeyDown={(e)=>handleKeyDown({e})}
            className={`mx-2 px-2 py-1 border border-lime-800/60 rounded-2xl
            hover:bg-lime-900/10
            ${className}`
        }/>
    )
}

const Area = ({children, className, ...rest}:TArea) =>{
   return(
        <div className={`m-2 border border-lime-950/30 rounded-2xl
      flex flex-col gap-2 p-2 text-start ${className}`} {...rest}>
            {children}
        </div>
    )
}

export const Lime = {
    Input,
    Area
}