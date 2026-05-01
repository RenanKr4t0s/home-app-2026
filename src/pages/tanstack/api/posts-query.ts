import { GetAllPosts } from "./posts-api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllPostsQuery = (limit: number, start: number) => {
    const query = useQuery({
        queryKey: ['posts', { limit, start }],
        queryFn: () => GetAllPosts(limit, start),
        placeholderData: keepPreviousData
    })
    return query
}
