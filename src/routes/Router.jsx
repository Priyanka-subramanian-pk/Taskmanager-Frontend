import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";


export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {path:"/",element:<LandingPage/>},
            {path:"/home",element:<HomePage/>},
            {path:"/login",element:<LoginPage/>},
            {path:"/register",element:<RegisterPage/>},
        ]
    }
])