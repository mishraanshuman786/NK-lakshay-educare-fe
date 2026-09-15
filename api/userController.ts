import { ApiUrls, publicAxios } from "./config";

export interface TeacherQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  language?:string[];
  course?:string[];
  subject?:string[];
}

export interface StudentQueryParams {
  page?: number;
  limit?: number;
  name?: string;
  city?: string;
  pincode?: string;
  id?: string;
  search?: string;
  className?: string;
}

export const UserController = {
  getTeachers: async (params: TeacherQueryParams={}) => {
    try{
        const response=await publicAxios.get(`${ApiUrls.userUrl}/teachers`,{params});
        return response.data;

    }
    catch(error){
        throw error;
    }
  },

  getStudents: async (params: StudentQueryParams = {}) => {
    try {
      const response = await publicAxios.get(`${ApiUrls.userUrl}/students`, {
        params,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
