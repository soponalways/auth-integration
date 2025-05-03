import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/', 
        Component: Root, 
        children: [
            {index: true, Component:Home}, 
            {path: '/Login', Component: Login}, 
            {path: '/SignUp', Component: SignUp}
        ]
    }
])