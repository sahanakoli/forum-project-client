import useComments from "../../../hooks/useComments";
import { MdOutlineFeedback, MdOutlineReport } from "react-icons/md";


const Comments = () => {
    const comments = useComments();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>

                        <tr>
                            <th></th>
                            <th>Comments</th>
                            <th>Feedback</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map((comment, index) => <tr key={comment.id}>
                                <td>{index + 1}</td>
                                <td>{comment.comment}</td>
                                <td><button><MdOutlineFeedback className=" text-xl" /></button></td>
                                <td><button className=""><MdOutlineReport className=" text-red-500 text-xl" /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Comments;