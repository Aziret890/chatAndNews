import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Auth from "./pages/Auth/Auth";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Registration from "./pages/Registration/Registration";
import NotFount from "./pages/NotFount/NotFount";
import DataUser from "./pages/dataUser/DataUser";
import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./components/profile/profile";
import InfoUser from "./pages/InfoUser/InfoUser";
import Chat from "./components/chat/chat";
import AuthAdmin from "./pages/AuthAdmin/Auth";
import { ToastContainer } from "react-toastify";
import Chatdetail from "./components/chatdetail/chatdetail";
import Kalendar from "./components/Kalendar/kalendar";
import AdminPage from "./pages/AdminPage/AdminPage";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./ctx/useAuth";

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
    element: <Profile />,
  },
  {
    path: "/PageUser",
    element: <InfoUser />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
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
      <AuthProvider>
        <ToastContainer />
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
