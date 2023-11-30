/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ProfileCard = ({ post }) => {
    const {image, name, title, description, time} = post;
    return (
        <div>
            <div className="card w-[300px] h-[320px] bg-base-100 shadow-xl">
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
                    <p className="text-lg font-semibold mt-4">{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;