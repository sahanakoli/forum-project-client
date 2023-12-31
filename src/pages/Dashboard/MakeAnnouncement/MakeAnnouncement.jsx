import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MakeAnnouncement = () => {

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
            const announcement = {
                name: data.name,
                email: data.email,
                title: data.title,
                description: data.description,
                image: res.data.data.display_url

            }
            const announcementRes = await axiosSecure.post('/announcement', announcement);
            console.log(announcementRes.data)
            if(announcementRes.data.insertedId){
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Announcement create successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('announcement', res.data)
    }
    return (
        <div>
            <Helmet>
                <title>Forum | Make Announcement</title>
            </Helmet>
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
                    
                        {/* Image */}
                    <div className="form-control w-full my-8">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn bg-blue-300 w-1/2">
                         Announcement
                    </button>
                </form> 
        </div>
    );
};

export default MakeAnnouncement;