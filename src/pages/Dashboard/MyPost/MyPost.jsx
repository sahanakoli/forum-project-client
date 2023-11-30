import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const MyPost = () => {

    const axiosPublic = useAxiosPublic();
    const {data: posts } = useQuery({
        queryKey: ['posts'],
        queryFn: async () =>{
           const res = await axiosPublic.get(`/posts/${posts.email}`);
           return res.data;
        }
    })

    
    return (
        <div>
            <Helmet>
                <title>Forum | My Post</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Title</th>
                            <th>Votes</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                                <td>{posts.title}</td>
                                <td></td>
                                <td><button className="btn"><FaTrash className=" text-red-500"/></button></td>
                            </tr>
                    </tbody>
                </table>
            </div>
             <Link to='/dashboard/comments'>
             <button className="btn bg-blue-300 mt-10">Comments</button>
             </Link>
        </div>
    );
};

export default MyPost;