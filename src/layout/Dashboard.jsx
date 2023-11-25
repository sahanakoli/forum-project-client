import { NavLink, Outlet } from "react-router-dom";
import {  FaComment, FaHouse,  FaUser, FaUsers,  } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdContactMail } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-200">
                <ul className="menu p-4">
                    
                        <>
                            <li>
                                <NavLink to="/dashboard/userHome">
                                <CgProfile />
                                    Admin Profile</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUser></FaUser>
                                    Manage Users</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/manageItem">
                                    <FaComment></FaComment>
                                    Reported Comments</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/review">
                                <GrAnnounce />
                                    Make Announcement</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/booking">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>

                        </>
                            
                            {/* <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                    <CgProfile />
                                        My Profile</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                    <FaSignsPost />
                                        Add Post </NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                    <FaSignsPost />
                                        My Posts</NavLink></li>
                                
                            </> */}
                    
                    {/* sheard navLinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHouse></FaHouse>
                            Home</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/contact">
                            <MdContactMail />
                            Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="users">
                        <FaUsers />
                            All users</NavLink>
                    </li>
                </ul>

            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;