import { useMutation } from "@tanstack/react-query";
import { CreatePost } from "./posts-api";
import { myQueryClient } from "./queryClient";

export const useAddPostMutation = (key: string) => {
    return useMutation({
        mutationFn: CreatePost,
        mutationKey: ["addPost", key],
        onSuccess: () => {
            console.log("Deu tudo certo!")
            myQueryClient.invalidateQueries({
                queryKey: ["posts"]
            })

        },
        onError: (error) => {
            console.error("Deu um erro: ", error)
        }
    })
}