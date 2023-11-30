import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ProfileCard from "./ProfileCard";



const MyProfile = () => {


    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: posts } = useQuery({
        queryKey: ['posts', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts/${user?.email}`);
            return res.data;
        }
    })
    

    return (
        <div>
            <Helmet>
                <title>Forum | User Profile</title>
            </Helmet>
            <h2 className=" text-3xl font-semibold">My Profile</h2>
            <div className="lg:overflow-x-auto mt-6">
                <table className="table w-1/2 lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                            </td>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
             {
                posts?.map(post => <ProfileCard key={post.id} post={post}></ProfileCard>)
             }
             </div>
        </div>
    );
};

export default MyProfile;