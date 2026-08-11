import { ApiUrls, publicAxios } from "./config";


export const AuthController={
    registerStudent: async (payload:FormData)=>{
       try{
          const response=await publicAxios.post(`${ApiUrls.authUrl}/student/register`, payload,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
          });

          return response.data;

       }
       catch(error){
        throw error;
       }
    },

    registerTeacher: async (payload:FormData)=>{
        try{
            const data=await publicAxios.post(`${ApiUrls.authUrl}/teacher/register`,payload,{
                headers:{
                     "Content-Type":"multipart/form-data"
                }
            });
            return data;

        }
        catch(error){
            throw error;
        }
    },

    login: async (payload:any)=>{
        try{
            const data=await publicAxios.post(`${ApiUrls.authUrl}/login`,payload);
            return data;

        }
        catch(error){
            throw error;
        }
    }
}