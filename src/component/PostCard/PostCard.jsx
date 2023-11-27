/* eslint-disable react/prop-types */
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    const {_id, name, image, title,  tag, upVote, downVote } = post;
    return (
        <div>
        <Link to={`/postDetails/${_id}`}>
            <div className="card w-96 h-[350px] bg-base-100 shadow-xl">
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
                    <div className=" flex gap-4 mt-2">
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
            </Link>
        </div>
    );
};

export default PostCard;