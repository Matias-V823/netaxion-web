import { createBrowserRouter } from "react-router";
import Home from '../src/page/Home';


export const router = createBrowserRouter([
    { path: "/", Component: Home}
])