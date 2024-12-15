import { commonAPI } from "./commonAPI";
import { server_url } from "./serverurl";

// registerAPI

export const registerAPI = async(user)=>{
    return await commonAPI('POST', `${server_url}/register`,user,"")
}

// login api

export const loginAPI = async(user)=>{
    return await commonAPI('POST',`${server_url}/login`,user,"")
}