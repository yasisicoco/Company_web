import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";

import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/About/About";
import Board from "./pages/Board/Board";
import TeamMember from "./pages/TeamMember/TeamMember";
import History from "./pages/History/History";
import Contact from "./pages/Contact/Contact";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminPosts from "./pages/Admin/AdminPosts";
import AdminCreatePost from "./pages/Admin/AdminCreatePost";
import AdminEditPost from "./pages/Admin/AdminEditPost";
import AdminContacts from "./pages/Admin/AdminContacts";

function AuthRedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(true);
      } catch (error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/admin/posts" replace /> : <Outlet />;
}

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(response.data.isValid);
        setUser(response.data.user);
      } catch (error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? (
    <Outlet context={{ user }} />
  ) : (
    <Navigate to="/admin" replace />
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
}

function BlacklistCheck() {
  useEffect(() => {
    const checkIP = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/check-ip");
        const data = await response.json();

        if (!data.allowed) {
          alert("접근이 거부되었습니다.");
          window.location.href = "/";
        }
      } catch (error) {
        console.error("IP 체크 오류:", error);
        alert("IP체크 오류에 문제가 발생했습니다.");
        window.location.href = "/";
      }
    };

    checkIP();
  }, []);

  return <AdminLogin />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/team-member",
        element: <TeamMember />,
      },

      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AuthRedirectRoute />,
    children: [{ index: true, element: <AdminLogin /> }],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "posts",
            element: <AdminPosts />,
          },
          {
            path: "create-post",
            element: <AdminCreatePost />,
          },
          {
            path: "edit-post/:id",
            element: <AdminEditPost />,
          },
          {
            path: "contacts",
            element: <AdminContacts />,
          },
        ],
      },
    ],
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
