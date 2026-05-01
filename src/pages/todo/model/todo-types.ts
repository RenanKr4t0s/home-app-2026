export interface TToDo {
    id?: number
    description: string
    isDone: boolean
}

export interface TToDoCtx {
    toDos: TToDo[]
    addToDo: (toDo:TToDo)=>void
    delToDo: (id:number)=>void
    updateToDo:(toDo:TToDo)=>void
}

export enum TToDoReducerActions {
    Add = "Adicionar",
    Del = "Delete",
    Upd = "Update"
}

interface TAddToDo {
    type: TToDoReducerActions.Add
    payload: TToDo
}

interface TUpdateToDo {
    type: TToDoReducerActions.Upd
    payload: TToDo
}

interface TDelToDo {
    type: TToDoReducerActions.Del
    payload:number
}

export type ListToDoActions = TAddToDo | TUpdateToDo | TDelToDo
