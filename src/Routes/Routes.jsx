import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import JoinUs from "../pages/Home/JoinUs/JoinUs";
import SignUp from "../Shared/SignUp/SignUp";
import Membership from "../pages/Home/Membership/Membership";
import Dashboard from "../layout/Dashboard";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ReportedComments from "../pages/Dashboard/ReportedComments/ReportedComments";
import MakeAnnouncement from "../pages/Dashboard/MakeAnnouncement/MakeAnnouncement";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AddPost from "../pages/Dashboard/AddPost/AddPost";
import MyPost from "../pages/Dashboard/MyPost/MyPost";
import PostDetails from "../pages/Home/PostDetails/PostDetails";
import Notification from "../pages/Home/Notification/Notification";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'membership',
          element:<Membership></Membership>
        },
        {
          path:'joinUs',
          element:<JoinUs></JoinUs>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'postDetails/:id',
          element: <PostDetails></PostDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
        },
        {
          path:'notification',
          element:<Notification></Notification>
        }
        
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children: [
        //Admin routes
        {
          path:'adminProfile',
          element:<AdminProfile></AdminProfile>
        },
        {
          path:'manageUsers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'reportedComments',
          element:<ReportedComments></ReportedComments>
        },
        {
          path:'makeAnnouncement',
          element:<MakeAnnouncement></MakeAnnouncement>
        },

        // user routes
        {
          path:'myProfile',
          element:<MyProfile></MyProfile>
        },
        {
          path:'addPost',
          element:<AddPost></AddPost>
        },
        {
          path:'myPost',
          element:<MyPost></MyPost>
        }
        
      ]
    }
  ]);

  export default router;