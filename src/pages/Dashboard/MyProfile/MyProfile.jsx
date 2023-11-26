import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyProfile = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users } = useQuery({
        queryKey: ['users.email'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${users.email}`, {
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
                            <th>Badge</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                                <td>Photo</td>
                                <td></td>
                                <td></td>
                                <td>Badge</td>
                            </tr>
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;