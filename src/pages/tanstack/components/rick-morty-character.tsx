import { Lime } from "../../../ui/lime-components";
import { useGetRickCharQuery } from "../api/rick-query";

export const RickMortyById = ({characterId, enabled}:{characterId:number, enabled : boolean})=>{
    const rickChar = useGetRickCharQuery(characterId, enabled )
    useGetRickCharQuery(characterId+1, enabled)
    if (rickChar.isFetching) return (
        <Lime.Area className="h-min">
            <h2>Carregando...</h2>
        </Lime.Area>
    )
    if (rickChar.isPending) return (
        <Lime.Area className="h-min">
            <h2 className="self-center"> Confirmar Personagem</h2>
        </Lime.Area>
    )
    return(
        <Lime.Area className="h-min">
            <div className="flex flex-row gap-2 m-2">
                <div className="w-30">
                    <img src={rickChar.data?.image} />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-2">
                        <p>Name: </p>
                        <p>{rickChar.data?.name}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p>Status: </p>
                        <p>{rickChar.data?.status}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p>Species: </p>
                        <p>{rickChar.data?.species}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p>Gender: </p>
                        <p>{rickChar.data?.gender}</p>
                    </div>
                </div>
            </div>
        </Lime.Area>
    )
}