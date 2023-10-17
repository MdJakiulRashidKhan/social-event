import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error from "../ErrorElement/Error";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ServiceDescription from "../pages/ServiceDescription/ServiceDescription";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root> ,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/service/:id",
                element:<PrivateRoute>
                    <ServiceDescription></ServiceDescription>
                </PrivateRoute>
                 
            },
        ] 
    }
]);
export default router;