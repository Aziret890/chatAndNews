import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Auth from "./pages/Auth/Auth";
import Registration from "./pages/Registration/Registration";
import NotFount from "./pages/NotFount/NotFount";
import DataUser from "./pages/dataUser/DataUser";
import { ChakraProvider } from "@chakra-ui/react";
import InfoUser from "./pages/InfoUser/InfoUser";

import Profile from "./components/profile/profile";

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
  {
    path: "/chat",
    element: (
      <>
        <InfoUser />
    path: "/PageProfile",
    element: <Profile />,
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
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;
