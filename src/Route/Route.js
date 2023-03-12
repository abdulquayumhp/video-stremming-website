import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import DetalsCard from "../Home/VideoSection/DetalsCard";
import Notificaton from "../Notification/Notificaton";
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
            },
            {
                path: "/notification",
                element: <Notificaton />
            }
        ]

    }
])