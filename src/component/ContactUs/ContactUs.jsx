import Swal from "sweetalert2";


const ContactUs = () => {

    const handleContact = (e) => {
        e.preventDefault();


        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        console.log(name, email);

        e.target.reset();

        Swal.fire(
            'Good job!',
            'Submit successfully ',
            'success'
        )
    }
    return (
        <div>
            <h2 className=" text-4xl font-semibold mt-20 text-center">Contact Us</h2>
            <form onSubmit={handleContact} className=" w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                        <span className="label-text font-medium">Message</span>
                    </label>
                <input type="text" name='message' placeholder="Type message here" className="input input-bordered input-lg w-full " required/>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-blue-200 font-medium">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
