import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import SocialLogin from "../../../component/SocialLogin/SocialLogin";



const JoinUs = () => {

    const {signIn} = useAuth();
    const navigate = useNavigate();
    const { register, formState: { errors } } = useForm();

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
           const user = result.user;
           console.log(user);
           event.target.reset();

           Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          
          navigate('/');
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-6">
        <div className="hero-content flex-col lg:flex-row ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className=" text-4xl text-center font-semibold mt-3">Login Now</h2>
                <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
              {errors.email && <span className=" text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
              })} name='password' placeholder="password" className="input input-bordered" />
              {errors.password?.type === 'required' && <p className=" text-red-600">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className=" text-red-600">Password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className=" text-red-600">Password must be less then 20 characters</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-blue-300 text-white" type="submit" value="Login" />
                    </div>
                    <p>New here? Create a New Account <Link to='/signUp' className=' text-blue-300'>Sign Up</Link></p>
                    <div className='divider'></div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
            <div className="ml-10 w-1/2">
                <img className=" rounded-lg" src="https://i.ibb.co/86Z06fF/login.jpg" alt="" />
            </div>
        </div>
    </div>
        </div>
    );
};

export default JoinUs;