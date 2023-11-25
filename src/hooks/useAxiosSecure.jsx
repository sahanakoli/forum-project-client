import axios from "axios";

const useAxiosSecure = axios.create({
    baseURL: import.meta.env.VITE_api_url,
    withCredentials: true
})

export default useAxiosSecure;