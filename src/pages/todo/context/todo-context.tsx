import { createContext, useReducer, type ReactNode} from "react";
import { TToDoReducerActions, type TToDoCtx, type TToDo } from "../model/todo-types";
import { ToDoReducer } from "../reducer/todo-reducer";



const ToDoCtx = createContext<TToDoCtx | null>(null) 



export const ToDoProvider = ({children}:{children: ReactNode}) => {

    const initialToDos : TToDo[] = [] 
    const [toDos, dispatch] = useReducer(ToDoReducer, initialToDos )

    const addToDo = (toDo:TToDo) => {
        dispatch({
            type: TToDoReducerActions.Add,
            payload: toDo
        })
    }

    const delToDo = (id:number) =>{
        dispatch({
            type: TToDoReducerActions.Del,
            payload: id
        })
    }

    const updateToDo = (toDo:TToDo)=>{
        dispatch({
            type: TToDoReducerActions.Upd,
            payload: toDo
        })
    }


    return(
        <ToDoCtx.Provider value={{toDos, addToDo, delToDo, updateToDo}}>
            {children}
        </ToDoCtx.Provider>
    )
}

