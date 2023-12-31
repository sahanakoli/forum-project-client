import { NavLink, Outlet } from "react-router-dom";
import {  FaComment, FaHouse,  FaSignsPost,  FaUser  } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-200">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                        <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">
                                <CgProfile />
                                    Admin Profile</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/manageUsers">
                                    <FaUser></FaUser>
                                    Manage Users</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/reportedComments">
                                    <FaComment></FaComment>
                                    Reported Comments</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/makeAnnouncement">
                                <GrAnnounce />
                                    Make Announcement</NavLink></li>
                        </>
                           : 
                            <>
                                <li>
                                    <NavLink to="/dashboard/myProfile">
                                    <CgProfile />
                                        My Profile</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/addPost">
                                    <FaSignsPost />
                                        Add Post </NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/myPost">
                                    <FaSignsPost />
                                        My Posts</NavLink></li>
                                
                            </> 
                        }
                    
                    {/* sheard navLinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHouse></FaHouse>
                            Home</NavLink></li>
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