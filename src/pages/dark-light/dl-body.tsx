import { useDarkLightContext } from "./context/dl-context"

export const DarkLightBoddy = () => {
    const {isDark, toggleIsDark}= useDarkLightContext()

    return(
        <div className={isDark? "bg-zinc-950 text-zinc-50" : "bg-zinc-50 text-zinc-950"}>
            <h1>Eu sou um elemento DarkLight</h1>
            <p>Eu sou o conteúdo da página DarkLight</p>
            <button 
                className={!isDark? "bg-zinc-950 text-zinc-50 p-2 rounded-2xl m-2" : "bg-zinc-50 text-zinc-950 p-2 rounded-2xl m-2"}
                onClick={toggleIsDark}
            >
                 Mude o tema
            </button>
        </div>
    )
}