import { useState } from "react"
import { Arcticle } from "../../../ui/arcticle"
import { Button } from "../../../ui/button"
import { Lime } from "../../../ui/lime-components"
import { useGetAllPostsQuery } from "../api/posts-query"
import { useAddPostMutation } from "../api/posts-mutations"
// import { useMutation } from "@tanstack/react-query"
// import { CreatePost } from "../api/mocked-posts-api"

export const ListOfPosts = () => {

    const [page, setPage] = useState<number>(0)
    const [limit, setLimit] = useState<number>(3)
    const allPosts = useGetAllPostsQuery(limit, page*limit)

    const handlePrevPage = () =>{
       if(page === 0) return
       setPage(page -1)
    }
    const handleNextPage = () =>{
        setPage(page +1)
    }

    const {mutate: addPost, isPending } = useAddPostMutation("mangaRosa")

// const useCreatePostMutation = useMutation({
//     mutationFn : CreatePost
// })

    const handleAddPost = () => {
        console.log("mocked Post is starting")
        addPost({
        // useCreatePostMutation.mutate({
            title: "Eu sou o cara",
            body: "Ele não é o cara",
            userId: 2,
            mult: "Dont know"
        },{
            onSuccess(data) {
                console.log("Da pra chamar sideEffects aqui: ", data)
            },
        })
    }

    return(
        <Lime.Area>
            <Button 
                label={ isPending 
                    ?"Adicionando..."
                    :"Adicionar Post"
                }
                onClick={handleAddPost}
            />
            <div className="flex px-3 flex-row justify-between">
            <Button 
                label="Página Anterior" 
                onClick={handlePrevPage}
            />
            <Button 
                label="Próxima Pagina" 
                onClick={handleNextPage}
            />
            </div>
            <Arcticle.Area className={allPosts.isPlaceholderData?"bg-red-800/10":""}>
                <Arcticle.Paragraph content={`Qual Página : ${page}`} />
                <div className="flex flex-row gap-2">
                    <Arcticle.Paragraph 
                        content={`Quantos posts : `} 
                    />
                    <Lime.Input
                        type="number"
                        value={limit}
                        className="w-24"
                        onChange={
                            (e)=>{setLimit(Number(e.target.value))}
                        }
                    />
                </div>
                {allPosts.isPlaceholderData? (
                <Lime.Area className="w-96 h-96 justify-center bg-zinc-900/10">
                    <h2 className="mx-auto animate-pulse">Loading...</h2>
                </Lime.Area>

                ):(
                <Lime.Area className="overflow-y-auto w-96 max-h-96">
                    {allPosts.data?.map(post =>{
                        return(
                            <h2>Post: {post.title} </h2>
                        )
                    })}
                </Lime.Area>
                )}
            </Arcticle.Area>
        </Lime.Area>

    )
}