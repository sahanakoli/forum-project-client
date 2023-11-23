import { Link } from "react-router-dom";



const Navbar = () => {
    
    const navItem = <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/membership">Membership</Link></li>
      <li><Link to="/notification">Notification</Link></li>
      <li><Link to="/joinUs">Join Us</Link></li>
      
      
    </>
    return (
        <div>
            <div className="navbar bg-base-100 h-28 mb-4 shadow-lg rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className=" normal-case text-xl font-semibold">ChatWave</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                   <button className='btn btn-outline btn-warning'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;