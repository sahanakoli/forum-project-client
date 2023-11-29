import { useLoaderData } from "react-router-dom";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { BiComment } from "react-icons/bi";






const PostDetails = () => {


    const post = useLoaderData();
    console.log(post);
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const { image, name, title, description, tag, time, upVote, downVote } = post;

    const onSubmit = async (data) => {

        const addComment = {
            comment: data.comment

        }
        console.log(addComment);
        const commentRes = await axiosSecure.post('/comments', addComment);
        console.log(commentRes.data)
        if (commentRes.data.insertedId) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Comment post successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }

    }



    return (
        <div className=" flex justify-center items-center mt-16">
            <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
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
                    <p className=" font-medium mt-8">{tag}</p>
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
                    </div>
                    <div className=" flex gap-4 mt-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="join"> 
                            <input type="text" name="comment" {...register('comment', { required: true })} className="input input-bordered join-item" placeholder="comment here" />
                            <button className="btn join-item "><BiComment className=" text-lg" /></button>
                        </div>
                        </form>
                        <button className="btn"><FaShareAlt className=" text-lg" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;