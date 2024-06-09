import Layout from "./components/layouts/Layout";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/routes/home/Home";
import ListPage from "./components/routes/listPage/ListPage";
import Profile from "./components/routes/profile/Profile";
import SinglePage from "./components/routes/singlePage/SinglePage";
import "./layout.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
          path: "/profile",
          element: <Profile />,
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
