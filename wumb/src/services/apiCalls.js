import { api } from './auth'

const tryCatchAPICall = async (methodString, urlString, data = null) =>
{
   
    try
    {
        let response = await api({ method: methodString, url: urlString, data: data })
        return response
    }
    catch (error)
    {
        console.log(error)
    }
}

export const getAllSongs = async () =>
{
    let response = await tryCatchAPICall("GET", "/SONGS")
    return response
}

export const getSong = async (songId) =>
{
    let response = await tryCatchAPICall("GET", `/songs/${songId}`)
    return response
}



export const getUser = async (userId) =>
{
    let response = await tryCatchAPICall("GET", `/users/${userId}`)
    return response
}


export const createPost = async (post) =>
{
    let response = await tryCatchAPICall("POST", `/posts`, post)
    return response
}


export const editPost = async (songId, postId) =>
{
    let response = await tryCatchAPICall("PUT", `/songs/${songId}/${postId}`)
    return response
}


export const getProfile = async () =>
{
    let response = await tryCatchAPICall("GET", `/profile`)
    return response
}

export const editProfile = async (editedProfile) =>
{
    let response = await tryCatchAPICall("PUT", `/profile`, editedProfile)
    return response
}