import { GetRickChar } from "./rick-api"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { mockedRenanMorty } from "./renan-morty-data"
import { myQueryClient } from "./queryClient"

export const useGetRickCharQuery = (characterId: number, enabled?: boolean) => useQuery({
    // networkMode:'offlineFirst',
    queryKey: ['character', characterId],
    queryFn: () => GetRickChar(characterId),
    staleTime: Infinity,
    enabled,

    // Esse causa problema nesse caso pois não damos add e sim substituimos
    // initialData: mockedRenanMorty
    placeholderData: mockedRenanMorty
})

export const usePrefetchRickCharQuery = (characterId: number, enabled?: boolean) => {
    const queryClient = useQueryClient()
    // myQueryClient.prefetchQuery({
    queryClient.prefetchQuery({
        queryKey: ['character', characterId],
        queryFn: () => GetRickChar(characterId),
        enabled
    })
}

export const invalidateCharQuery = () => {
    myQueryClient.invalidateQueries({
        queryKey: ['character'],
        // exact:true
        // 'all' força o refetch de queries ativas e inativas
        refetchType: 'all'
    })
}