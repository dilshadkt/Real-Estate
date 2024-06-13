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
import {
  ListPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loader";
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
          loader: ListPageLoader,
          element: <ListPage />,
        },
        {
          path: "/:id",
          loader: singlePageLoader,
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
          loader: profilePageLoader,
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
// TODO;
// 1. personalise the list based on the users previous histroy
//     [hint : use the cookies for get the previous search history ]
// 2 . Admin panel for manage users and list
// 3  . Try to impliment som chat bot for suggestion for the list
