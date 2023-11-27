import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { CgProfile } from "react-icons/cg";


const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    return (
        <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
          
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <div className=''>
          {
                        user ?
                            <div className=" ">
                                <img className=" w-14 h-14 rounded-full" src={user?.photoURL ? user.photoURL : `https://i.ibb.co/D9wWRM6/olivia.jpg`} alt="" />
                            </div>
                            :
                            <div>
                              <CgProfile className=" text-3xl" />
                            </div>
                    }
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            {
              user? <>
                <p className=" text-lg ml-4 font-semibold">{user?.displayName}</p>
              {
                user && isAdmin && <NavLink
                to='/dashboard/adminProfile'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Dashboard
              </NavLink>
              }
              {
                user && !isAdmin && <NavLink
                to='/dashboard/myProfile'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Dashboard
              </NavLink>
              }
            <div onClick={logOut}
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer '
            >
             Logout
            </div>
              </> : <>
              <Link
              to='/joinUs'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Login
            </Link>
            <Link
              to='/signUp'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Sign Up
            </Link>
              </>
            }
          </div>
        </div>
      )}
    </div>
    );
};

export default MenuDropdown;