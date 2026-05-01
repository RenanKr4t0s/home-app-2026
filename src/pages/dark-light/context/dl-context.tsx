/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import { DarkLightReducer, TIsDarkActions } from "../reducer/dl-reducer";

interface TDarkLightContext {
    isDark : boolean,
    toggleIsDark : () => void
}

const IS_DARK_KEY = "localIsDark"

const DarkLightContext = createContext<TDarkLightContext | null>(null)

export const DarkLightProvider = ({children}:{children : React.ReactNode}) => {

    const localIsDark = () => {
        return JSON.parse(localStorage.getItem(IS_DARK_KEY)|| "true")
    } 

    // const [isDark, setIsDark] = useState<boolean>(localIsDark)
    const [ isDark, dispatch] = useReducer(DarkLightReducer, localIsDark())


    const toggleIsDark = () =>{
        // setIsDark(!isDark)
        dispatch({
           type: TIsDarkActions.Toggle
        })
    }

    useEffect(()=>{
        localStorage.setItem(IS_DARK_KEY,JSON.stringify(isDark))
    },[isDark])

    return(
        <DarkLightContext.Provider value={{isDark, toggleIsDark}}>
            {children}
        </DarkLightContext.Provider>
    )
}

export const useDarkLightContext = () =>{
    const context = useContext(DarkLightContext)
    if (!context){
        throw new Error ("DarkLight context deve ser utilizado dentro de um provider")
    }
    return context
} 