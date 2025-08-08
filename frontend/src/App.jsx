import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/About/About";
import Board from "./pages/Board/Board";
import TeamMember from "./pages/TeamMember/TeamMember";
import History from "./pages/History/History";
import Contact from "./pages/Contact/Contact";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
