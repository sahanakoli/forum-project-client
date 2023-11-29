import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from "sweetalert2";
import {  FaUsers } from "react-icons/fa6";



const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
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

    

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className="flex justify-between gap-10">
                <h2 className=" text-3xl font-semibold">All Users</h2>
                <h2 className=" text-3xl font-semibold">Total Users: {users.length}</h2>
            </div>
            <div className="lg:overflow-x-auto">
                <table className="table w-1/2 lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user.id} >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500 btn-lg"><FaUsers className=' text-white text-xl'></FaUsers></button>
                                    }
                                </td>
                                <td>{user.badge}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default ManageUsers;