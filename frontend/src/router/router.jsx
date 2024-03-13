import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/signup";
import Login from "../pages/login";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetRoute>
        <App />
      </PrivetRoute>
    ),
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
