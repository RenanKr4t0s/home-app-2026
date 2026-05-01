import { type TRickMortyCharacter } from "../models/rick-morty-models"
import axios from 'axios'

const api = axios.create({
    baseURL:"https://rickandmortyapi.com/api"
})


export const GetRickChar = async (characterId:number):Promise<TRickMortyCharacter> => {
    const result = await api.get(`/character/${characterId}`)
    return result.data
}