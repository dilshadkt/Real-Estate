import { Layout, RequireAuth } from "./components/layouts/Layout";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/routes/register/Register";
import Home from "./components/routes/home/Home";
import ListPage from "./components/routes/listPage/ListPage";
import Profile from "./components/routes/profile/Profile";
import SinglePage from "./components/routes/singlePage/SinglePage";
import "./layout.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/routes/login/Login";
import UpdateProfile from "./components/routes/updateProfile/UpdateProfile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },

        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/update",
          element: <UpdateProfile />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
