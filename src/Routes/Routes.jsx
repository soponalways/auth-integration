import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Orders from "../Components/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Components/Profile/Profile";
import Dashboard from "../Components/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/Login', Component: Login },
            { path: '/SignUp', Component: SignUp },
            {
                path: '/orders',
                element: <PrivateRoute>
                    <Orders></Orders>
                </PrivateRoute>
            }, 
            {
                path: '/Profile', 
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }, 
            {
                path: '/dashboard', 
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    }
])