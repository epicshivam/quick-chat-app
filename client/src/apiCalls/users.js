import { axiosInstance } from ".";
const API = import.meta.env.VITE_API_URL;

export const getLoggedUser = async () => {
    const response = await axiosInstance.get(`${API}/api/user/get-logged-user`);
    return response.data;
}