import { commonAPI } from "./commonAPI"
import { server_url } from "./serverUrl"

export const addUserApi = async (reqBody,reqHeader)=>{
    return await commonAPI('POST',`${server_url}/users/add`,reqBody,reqHeader)
}

export const getDetailsApi = async ()=>{
    return await commonAPI('GET',`${server_url}/users/get`,"","")
}

export const deleteUserApi = async (id)=>{
    return await commonAPI('DELETE',`${server_url}/users/delete/${id}`,{})
}

export const editUserApi = async (reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${server_url}/users/edit`,reqBody,reqHeader)
}
export const oneuserApi = async (id,reqBody)=>{
    return await commonAPI('GET',`${server_url}/users/oneuser/${id}`,reqBody,"")
}