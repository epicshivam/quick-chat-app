import { axiosInstance } from "./index.js";

const API = import.meta.env.VITE_API_URL;

export const signupUser = async (user) => {
    const reponse = await axiosInstance.post(`${API}/api/auth/signup`, user);
    return reponse.data;
}

export const loginUser = async (user) => {
    const reponse = await axiosInstance.post(`${API}/api/auth/login`, user);
    return reponse.data;
}