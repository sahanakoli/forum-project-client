import usePost from "../../../hooks/usePost";


const MyPost = () => {

    const [posts] = usePost();
    const post = posts.filter(post => post._id === '_id')
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                              
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                                <th>
                                
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={post.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {post.title}
                                </td>
                                <td></td>
                                {/* <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash className=' text-red-600'></FaTrash></button>
                                </th> */}
                            </tr>
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPost;