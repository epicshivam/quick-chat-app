import { axiosInstance } from "./index.js";

const API = import.meta.env.VITE_API_URL;

export const signupUser = async (user) => {
    try {
        const reponse = await axiosInstance.post(`${API}/api/auth/signup`, user);
        return reponse.data;
    } catch (error) {
        return error;
    }
}