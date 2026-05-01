import { useDarkLightContext } from "./context/dl-context"

export const DarkLightHeader = () =>{

    const {isDark, toggleIsDark} = useDarkLightContext()
    
    return(
        <div className="w-full h-30">
            <button 
                onClick={toggleIsDark}
                className="border border-amber-700/40 rounded-2xl p-2"
            > 
                Mudar para {!isDark ? "Claro":"Escuro"}
            </button>
        </div>
    )
}