import {
    createBrowserRouter,

} from "react-router-dom";
import HomePage from "../Pages/Home/home";
import ProductPage from "../Pages/Product/product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,


    },
    {
        path: "/product/:id",
        element: <ProductPage />,

    },

]);

export default router