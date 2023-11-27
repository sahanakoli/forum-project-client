import { useForm } from "react-hook-form";
import { FaSignsPost } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPost = () => {

    const {register, handleSubmit} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
            });
        if(res.data.success){
            // now send the menu item data to the server with the image url
            const addPost = {
                name: data.name,
                email: data.email,
                title: data.title,
                description: data.description,
                image: res.data.data.display_url,
                time: data.time,
                tag: data.tag,
                upVote: data.upVote,
                downVote: data.downVote
            }
            const postRes = await axiosSecure.post('/posts', addPost);
            console.log(postRes.data)
            if(postRes.data.insertedId){
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is create a post`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url', res.data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                   {/* Name */}
                    <div className="form-control w-1/2 lg:w-full my-6">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Author Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    {/* Email */}
                    <div className="form-control w-1/2 lg:w-full my-6">
                        <label className="label">
                            <span className="label-text">Author Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Author Email"
                            {...register('email', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    {/* Title */}
                    <div className="form-control w-1/2 lg:w-full my-6">
                        <label className="label">
                            <span className="label-text">Post Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Post Title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    {/* Description */}
                    <div className="form-control w-1/2 lg:w-full my-6">
                        <label className="label">
                            <span className="label-text">Post Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Post Description"
                            {...register('description', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    {/* time */}
                    <div className="form-control w-1/2 lg:w-full my-6">
                        <label className="label">
                            <span className="label-text">Post Time</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Post Time"
                            {...register('time', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* Image */}
                    <div className="form-control w-full my-10">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                        {/* Tag */}
                        <div className="form-control w-1/2 lg:w-full my-5">
                        <label className="label">
                            <span className="label-text">Tag</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Tag"
                            {...register('tag', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    </div>
                    <div className=" flex gap-6">
                    <div className="form-control w-1/2 lg:w-full my-6">
                        <label className="label">
                            <span className="label-text">UpVote</span>
                        </label>
                        <input
                            type="text"
                            placeholder="UpVote"
                            {...register('upVote', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2 lg:w-full my-6">
                        <label className="label">
                            <span className="label-text">DownVote</span>
                        </label>
                        <input
                            type="text"
                            placeholder="DownVote"
                            {...register('downVote', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    </div>

                    <button className="btn bg-blue-300 w-1/2">
                        Add Post <FaSignsPost className="ml-4"></FaSignsPost>
                    </button>
                </form>
        </div>
    );
};

export default AddPost;