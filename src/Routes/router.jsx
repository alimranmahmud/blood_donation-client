import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../RootLayout/DashboardLayout";
import MainDashboard from "../Pages/DashboardPage/MainDashboard";
import AddRequest from "../Pages/DashboardPage/AddRequest";
import AllUsers from "../Pages/DashboardPage/AllUsers";
import PrivateRoutes from "./PrivateRoutes";
import MyRequest from "../Pages/DashboardPage/MyRequest";
import Donate from "../Pages/Donate";
import PaymentSuccess from "../Pages/PaymentSuccess";
import SearchRequest from "../Pages/SearchRequest";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path:'/donate',
                element:<PrivateRoutes><Donate></Donate></PrivateRoutes>
            },
            {
                path:'/payment-success',
                element:<PaymentSuccess></PaymentSuccess>
            },
            {
                path:'/search',
                element:<SearchRequest></SearchRequest>
            }
        ]
    },

    //dashboard 
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        children: [
            {
                path: 'main',
                element: <MainDashboard />
            },


            {
                path: 'add-request',
                element:<AddRequest></AddRequest>
            },
            {
                path: 'all-users',
                element:<AllUsers></AllUsers>
            },
            {
                path: 'my-request',
                element: <MyRequest></MyRequest>
            }
        ]
    }


])

export default router;