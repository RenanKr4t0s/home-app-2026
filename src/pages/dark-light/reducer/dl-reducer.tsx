/* eslint-disable react-refresh/only-export-components */
export enum TIsDarkActions {
    Toggle = "toggle"
}


interface TTogleIsDark {
    type : TIsDarkActions.Toggle
}



export const DarkLightReducer = (isDark:boolean, action:TTogleIsDark) =>{
    switch (action.type){
        case TIsDarkActions.Toggle:
            return !isDark
        default:
            return isDark
    }

}