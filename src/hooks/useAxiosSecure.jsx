import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_image_hosting_key,
    
})
const useAxiosSecure = () =>{
    const navigate = useNavigate();
    const {logOut} = useAuth();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    // intercepts 401 and 403 status
     axiosSecure.interceptors.response.use(function(response){
        return response;
     }, async(error) =>{
        const status = error.response.status;
        // console.log('status error in the interceptors', status);
        // for 401 or 403 logout the user and move the user to the login 
        if(status === 401 || status === 403){
            await logOut();
            navigate('/joinUs');
        }
        return Promise.reject(error);
     })

    return axiosSecure;
}

export default useAxiosSecure;