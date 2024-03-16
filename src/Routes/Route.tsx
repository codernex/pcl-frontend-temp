import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SigninPage from "../pages/SigninPage";
import AddUser from "../pages/User/AddUser";
import ManageUsers from "../pages/User/ManageUsers";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/add-user",
        element: <AddUser />,
      },
      {
        path: "/user/manage-users",
        element: <ManageUsers />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

export default router;
