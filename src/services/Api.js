import axios from "axios"

const getDataApi = async () => {
    let response = await axios.get("https://rickandmortyapi.com/api/character")
    return response.data
}

const getPageCharacters = async (pageId) => {
    let response = await axios.get("https://rickandmortyapi.com/api/character/?page=" + pageId)
    return response.data
} 

const getDataApiEpisodes = async () => {
    let response = await axios.get("https://rickandmortyapi.com/api/episode")
    return response.data
}

const getPageEpisode = async (pageId) => {
    let response = await axios.get("https://rickandmortyapi.com/api/episode?page=" + pageId)
    return response.data
} 

const getCharacter = async (Elemented) => {
    let response = await axios.get("https://rickandmortyapi.com/api/character/" + Elemented)
    return response.data
}

const getEpisode = async (Elemented) => {
    let response = await axios.get("https://rickandmortyapi.com/api/episode/" + Elemented)
    return response.data
}

const api = {
    getData  : getDataApi ,
    getPage : getPageCharacters,
    getAllEpisodes : getDataApiEpisodes,
    getPageEpisode : getPageEpisode ,
    getCharacter : getCharacter,
    getEpisode : getEpisode

}

export  default api