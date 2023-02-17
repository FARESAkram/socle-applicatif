import { createBrowserRouter } from "react-router-dom";
import Users from "../components/Users";
import UserCard from "../components/Users/UserCard";
import UserRegister from "../components/Users/UserRegister";

export const routes = [
    {
        path: "/users",
        element: <Users/>,
    },
    {
        path: "/users/:id",
        element: <UserCard />,
    },
    {
        path: "/users/create",
        element: <UserRegister />,
    },
    {
        path: "/",
        element: <Users/>,
    }
];

