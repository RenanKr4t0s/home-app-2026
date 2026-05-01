import type { ComponentPropsWithoutRef } from "react"

interface TButton extends ComponentPropsWithoutRef<'button'> {
    label : string
}

export const Button = (props:TButton)=>{
    const{
        label,
        className,
        onClick
    } = props

    return(
        <button 
            onClick={onClick}
            className={`
            text-zinc-200 py-1 px-4 bg-amber-950/10 rounded-2xl border border-amber-800/50   
            hover:bg-amber-900/20
            ${className}`
        }>
        {label}
        </button>
    )
}