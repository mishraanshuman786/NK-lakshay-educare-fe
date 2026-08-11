import axios,{ type InternalAxiosRequestConfig } from "axios";
import serverConstant from "./serverConstant";

const publicAxios=axios.create({
    baseURL:serverConstant.baseUrl,
    headers:{
        "Content-Type":"application/json"
    }
});

const securedAxios=axios.create({
    baseURL:serverConstant.baseUrl,
    headers:{
        "Content-Type":"application/json"
    }
});

securedAxios.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    const token=localStorage.getItem("token");

    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }

    return config;
});


const ApiUrls={
    authUrl:`${serverConstant.baseUrl}/api/auth`
}


export {publicAxios,securedAxios, ApiUrls};