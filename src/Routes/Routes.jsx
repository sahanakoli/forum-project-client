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
import Comments from "../pages/Dashboard/Comments/Comments";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../component/ContactUs/ContactUs";
import RulesPage from "../component/RulesPage/RulesPage";




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
          element:<PrivateRoute><Membership></Membership></PrivateRoute>
        },
        {
          path:'joinUs',
          element:<JoinUs></JoinUs>
        },
        {
          path:'contactUs',
          element:<ContactUs></ContactUs>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'postDetails/:id',
          element: <PostDetails></PostDetails>,
          loader: ({params}) => fetch(`https://forum-project-server.vercel.app/posts1/${params.id}`)
        },
        {
          path:'rulesPage',
          element:<RulesPage></RulesPage>
        }
        
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
        },
        {
          path:'comments',
          element:<Comments></Comments>
        }
        
      ]
    }
  ]);

  export default router;