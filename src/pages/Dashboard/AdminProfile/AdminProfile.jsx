import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useComments from "../../../hooks/useComments";
import usePost from "../../../hooks/usePost";


const AdminProfile = () => {

    const {user} = useAuth();
    const comments = useComments();
    const posts = usePost();
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: 'Bearer'
                }
            });
            return res.data;
        }
    })
    return (
        <div>
            <h2 className=" text-3xl font-semibold">My Profile</h2>
            <div className="overflow-x-auto mt-6">
                <table className="table w-1/2 lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Post</th>
                            <th>Comments</th>
                            <th>Users</th>
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
                            <td>{posts.length}</td>
                            <td>{comments.length}</td>
                            <td>{users.length}</td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProfile;