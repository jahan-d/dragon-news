import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router= createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayouts></HomeLayouts>,
            children:[
                {
                    path:'',
                    element: <Home></Home>,
                },
                {
                    path:'/category/:id',
                    element: <CategoryNews></CategoryNews>,
                },
            ]
        },
        
        {
            path:"/auth",
            element: <div>Authentication </div>
        },
        
        {
            path:"/news",
            element: <div>News</div>
        },
        
        {
            path:"/*",
            element: <div>error page</div> 
        },
        
    ]
)

export default router;