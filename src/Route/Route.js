import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import DetalsCard from "../Home/VideoSection/DetalsCard";
import Main from "../ShareableContent/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/details/:id",
                element: <DetalsCard />
            }
        ]

    }
])