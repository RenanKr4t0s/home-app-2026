import { TToDoReducerActions, type TToDo, type ListToDoActions } from "../model/todo-types"

export const ToDoReducer = (
    toDoList : TToDo[],
    action: ListToDoActions
) =>{
    switch (action.type){
        case TToDoReducerActions.Add:
            return [...toDoList, action.payload]
        
        case TToDoReducerActions.Upd:
            return toDoList.map((todo)=>{
                if (todo.id === action.payload.id){
                    return  action.payload 
                }
                return todo
            })
        
        case TToDoReducerActions.Del:
            return toDoList.filter((o) => o.id !== action.payload)

        default:
            return toDoList
    }
}