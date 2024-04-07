import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Auth from "./pages/Auth/Auth";
import Registration from "./pages/Registration/Registration";
import NotFount from "./pages/NotFount/NotFount";
import DataUser from "./pages/dataUser/DataUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/news",
    element: (
      <>
        <News />
      </>
    ),
  },
  {
    path: "/news/:id",
    element: (
      <>
        <NewsDetail />
      </>
    ),
  },

  {
    path: "/auth",
    element: (
      <>
        <Auth />
      </>
    ),
  },

  {
    path: "/registration",
    element: (
      <>
        <Registration />
      </>
    ),
  },

  {
    path: "/*",
    element: (
      <>
        <NotFount />
      </>
    ),
  },
  {
    path: "/data/user",
    element: (
      <>
        <DataUser />
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
