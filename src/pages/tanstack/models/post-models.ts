
export type TPost = {
    userId: number,
    id: number,
    title: string,
    mult: string,
    body: string
}

export type TAddPost = Omit<TPost, "id">