import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useComments from "../../../hooks/useComments";
import usePost from "../../../hooks/usePost";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { PieChart, Pie, Cell} from 'recharts';
import { Helmet } from "react-helmet-async";



const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AdminProfile = () => {

    const { user } = useAuth();
    const comments = useComments();
    console.log(comments);
    const [posts] = usePost();
    console.log(posts)
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
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
    });

    const data = [
        { name: 'post', value: posts.length },
        { name: 'comment', value: comments.length },
        { name: 'user', value: users.length },

    ];


    const onSubmit = async (data) => {

        const addTag = {
            tag: data.tag

        }
        const tagRes = await axiosSecure.post('/tags', addTag);
        console.log(tagRes.data)
        if (tagRes.data.insertedId) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Tag post successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    // // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <Helmet>
                <title>Forum | Admin Profile</title>
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
                            <td> {posts.length}</td>
                            <td> {comments.length}</td>
                            <td> {users.length}</td>

                        </tr>

                    </tbody>
                </table>
            </div>
            {/* tag form */}
            <div>
                <h2 className=" text-2xl font-semibold mt-8">Add Tag</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="join">
                        <input type="text" name="tag" {...register('tag', { required: true })} className="input input-bordered join-item" placeholder="Tag" />
                        <button className="btn join-item ">Post</button>
                    </div>
                </form>
            </div>
            {/* pie chart */}
            
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            <div className="flex gap-4">
                <div className="flex gap-2 justify-center items-center">
                    <div className="bg-blue-600 w-12 h-3"></div>
                    <h3 className=" text-xl font-medium">Posts</h3>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <div className=" bg-emerald-600 w-12 h-3"></div>
                    <h3 className=" text-xl font-medium">Comments</h3>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <div className=" bg-yellow-500 w-12 h-3"></div>
                    <h3 className=" text-xl font-medium">Users</h3>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;