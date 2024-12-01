import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { RootRouteError } from "./error-route";
import PageLayout from "../view/layout";
import { ProtectedRoute } from "./protected-route";
import NotFound from "./not-found";
import Home from "../view/home";
import About from "../view/about";
import Login from "../view/auth/login";
import Signup from "../view/auth/signup";
import PublicRoute from "./public-route";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div> created by <a className="text-blue-700 underline" href="https://shubhamvermadev.com" target="blank">shubhamvermadev</a> <Outlet /></div>,
        errorElement: <RootRouteError />,
        children: [
            {
                index: true,
                element: <Navigate to="auth/login" replace />,
            },
            {
                path: "auth",
                element: <PublicRoute/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="login" replace />,
                    },
                    {
                        path: "login",
                        element: <Login/>
                    },
                    {
                        path: "signup",
                        element: <Signup/>
                    },
                ]
            },
            {
                path: "",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "app",
                        element: <PageLayout />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to="home" replace />,
                            },
                            {
                                path: "home",
                                element: <Home />
                            },
                            {
                                path: "about",
                                element: <About />
                            },
                            {
                                path: "*",
                                element: <NotFound />
                            },
                        ],
                    },
                ],
            },
            {
                path: "*",
                element: <NotFound />
            },
        ],
    },
]);
