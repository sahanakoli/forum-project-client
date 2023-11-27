import { useLoaderData } from "react-router-dom";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";


const PostDetails = () => {

    const post = useLoaderData();
    console.log(post);
    const { image, name, title, description, tag, time, upVote, downVote } = post;
    

    return (
        <div className=" flex justify-center items-center">
            <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className=" flex gap-4">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} />
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p>{time}</p>
                        </div>
                    </div>
                    <p className=" font-medium">{tag}</p>
                    <p className=" text-lg font-semibold">Title: {title}</p>
                    <p className=" font-normal">Description: {description}</p>
                    <div className=" flex gap-4 mt-2">
                        <button className="btn">
                            <BiUpvote className=" text-lg" />
                            <div className="badge ">{upVote}</div>
                        </button>
                        <button className="btn">
                            <BiDownvote className=" text-lg" />
                            <div className="badge ">{downVote}</div>
                        </button>
                        <button className="btn"><FaRegCommentAlt className=" text-lg" /></button>
                        <button className="btn"><FaShareAlt className=" text-lg" /></button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default PostDetails;