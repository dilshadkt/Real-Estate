import { Layout, RequireAuth } from "./components/layouts/Layout";
import Register from "./routes/register/Register";
import Home from "./routes/home/Home";
import ListPage from "./routes/listPage/ListPage";
import Profile from "./routes/profile/Profile";
import SinglePage from "./routes/singlePage/SinglePage";
import "./layout.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/login/Login";
import UpdateProfile from "./routes/updateProfile/UpdateProfile";
import NewPost from "./routes/newPost/NewPost";
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
        {
          path: "/add",
          element: <NewPost />,
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
