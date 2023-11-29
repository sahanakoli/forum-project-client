import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";


const MyPost = () => {

    

    
    return (
        <div>
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
                                <td></td>
                                <td></td>
                                <td><FaTrash className=" text-red-500"/></td>
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