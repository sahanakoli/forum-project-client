import useAuth from "../../../hooks/useAuth";



const MyProfile = () => {


    const { user } = useAuth();
    

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
        </div>
    );
};

export default MyProfile;