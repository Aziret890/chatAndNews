import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Auth from "./pages/Auth/Auth";
import Registration from "./pages/Registration/Registration";
import NotFount from "./pages/NotFount/NotFount";
import DataUser from "./pages/dataUser/DataUser";
import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./components/profile/profile";
import InfoUser from "./pages/InfoUser/InfoUser";
import Chat from "./components/chat/chat";
import Password from "./components/password/Password";
import AuthAdmin from "./pages/AuthAdmin/Auth";
import Chatdetail from "./components/chatdetail/chatdetail";
import Admin from "./components/admin/Admin";
import Kalendar from "./components/Kalendar/kalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: <NewsDetail />,
  },

  {
    path: "/auth",
    element: <Auth />,
  },

  {
    path: "/registration",
    element: <Registration />,
  },

  {
    path: "/*",
    element: <NotFount />,
  },
  {
    path: "/data/user",
    element: <DataUser />,
  },
  {
    path: "/chat",
    element: (
      <>
        <Profile />,
      </>
    ),
  },
  {
    path: "/data/user",
    element: <DataUser />,
  },
  {
    path: "/PageUser",
    element: <InfoUser />,
  },
  {
    path: "/admin",
    element: (
      <>
        <Admin />
      </>
    ),
  },
  {
    path: "/admin/auth",
    element: <AuthAdmin />,
  },
  {
    path: "/pageChat",
    element: <Chat />,
  },
  {
    path: "/PageProfile",
    element: <Profile />,
  },
  {
    path: "/PageDetailchat",
    element: <Chatdetail />,
  },
  {
    path: "/",
    element: <Kalendar />,
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
