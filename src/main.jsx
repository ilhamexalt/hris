import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LoginAdmin from "./pages/auth/LoginAdmin";
import Profile from "./pages/profile/Index";
import ListEmployee from "./pages/employee/ListEmployee";
// import { useMediaQuery } from "react-responsive";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <LoginAdmin />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/employee",
    element: <ListEmployee />,
  },
]);

// const mQuery = () => {
//   const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
//   // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
//   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
//   // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
//   return <></>;
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
