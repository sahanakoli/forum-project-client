import { useLoaderData } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    console.log(post);
    const {image, name, title, description, tag} = post;

    return (
        <div className=" flex justify-center items-center">
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
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default PostDetails;