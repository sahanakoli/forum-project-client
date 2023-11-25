import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
// import Swal from "sweetalert2";
// import { FaTrash, FaUsers } from "react-icons/fa6";



const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [],  } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // const handleDelete = (user) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "(#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.delete(`/users/${user._id}`)
    //                 .then(res => {
    //                     if (res.data.deletedCount > 0) {
    //                         refetch();
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }

    // const handleMakeAdmin = user => {
    //     axiosSecure.patch(`/users/admin/${user._id}`)
    //         .then(res => {
    //             console.log(res.data)
    //             if (res.data.modifiedCount > 0) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: `${user.name} is an Admin Now!`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             }
    //         })
    // }
    return (
        <div>
            <div className="flex justify-between gap-10">
                <h2 className=" text-3xl font-semibold">All Users</h2>
                <h2 className=" text-3xl font-semibold">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-1/2 lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user.id} >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {/* {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500 btn-lg"><FaUsers className=' text-white text-xl'></FaUsers></button>
                                    } */}
                                </td>
                                {/* <td><button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg"><FaTrash className=' text-red-600 text-xl'></FaTrash></button></td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;