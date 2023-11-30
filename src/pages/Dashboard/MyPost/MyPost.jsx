import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { FaRegCommentDots } from "react-icons/fa6";


const MyPost = () => {
    const { user } = useAuth();

    const axiosPublic = useAxiosPublic();
    const { data: posts } = useQuery({
        queryKey: ['posts', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts/${user?.email}`);
            return res.data;
        }
    })

    console.log(posts)
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
                            <th></th>
                            <th>Title</th>
                            <th>Votes</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts?.map((post, index) => <tr key={post.id}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td></td>
                                <td><Link to='/dashboard/comments'>
                                    <button className="btn "><FaRegCommentDots /></button>
                                </Link></td>
                                <td><button className="btn"><FaTrash className=" text-red-500" /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPost;