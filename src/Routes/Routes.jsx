import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import JoinUs from "../pages/Home/JoinUs/JoinUs";
import SignUp from "../Shared/SignUp/SignUp";
import Membership from "../pages/Home/Membership/Membership";

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
  ]);

  export default router;