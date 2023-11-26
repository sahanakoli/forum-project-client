/* eslint-disable react/prop-types */
import { BiDownvote, BiUpvote } from "react-icons/bi";

const PostCard = ({ post }) => {
    const { name, image, title, description, tag, upVote, downVote } = post;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className=" flex gap-4">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} />
                            </div>
                        </div>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <p>{tag}</p>
                    <p>{title}</p>
                    <p>{description}</p>
                    <div className=" flex gap-4">
                        <button className="btn">
                            <BiUpvote />
                            <div className="badge ">{upVote}</div>
                        </button>
                        <button className="btn">
                            <BiDownvote />
                            <div className="badge ">{downVote}</div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PostCard;