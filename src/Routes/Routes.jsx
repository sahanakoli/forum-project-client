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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

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
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);

  export default router;