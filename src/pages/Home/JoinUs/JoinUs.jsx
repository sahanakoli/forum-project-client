import { Link } from "react-router-dom";



const JoinUs = () => {

    const handleLogin = event =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-6">
        <div className="hero-content flex-col lg:flex-row ">
            <div className="mr-10">
                <img className=" rounded-lg" src="https://i.ibb.co/86Z06fF/login.jpg" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <h1 className="text-4xl text-center mb-4 font-bold">Login now!</h1>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-300">Sign In</button>
                    </div>
                    <p>New here? Create a New Account <Link to='/signUp' className=' text-blue-300'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    </div>
        </div>
    );
};

export default JoinUs;