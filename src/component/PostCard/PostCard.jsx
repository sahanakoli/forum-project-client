/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    
    const {_id, name, image, title, time,  tag,  downVote } = post;
    return (
        <div>
        <Link to={`/postDetails/${_id}`}>
            <div className="card w-96 h-[250px] bg-base-200 text-slate-900 shadow-xl">
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
                    <p className=" font-medium mt-3">{tag}</p>
                    <p className=" text-lg font-semibold">Title: {title}</p>
                    <div className=" flex gap-4 mt-2">
                        <div className="flex">
                            <h2>Comments</h2>
                            <div className="badge ">0</div>
                        </div>
                        <div className=" flex ">
                            <h2>Votes</h2>
                            <div className="badge ">{downVote}</div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>
        </div>
    );
};

export default PostCard;