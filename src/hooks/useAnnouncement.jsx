import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAnnouncement = () => {

    const axiosPublic = useAxiosPublic();
    const {data: announcement = []} = useQuery({
        queryKey: ['announcement'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/announcement');
            return res.data;
        }
    }) 
    return announcement;
};

export default useAnnouncement;