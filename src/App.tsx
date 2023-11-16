import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Projects from "./pages/projects/Projects";
import Clients from "./pages/clients/Clients";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Project from "./pages/project/Project";
import Client from "./pages/client/Client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };


const router = createBrowserRouter([
  {
   
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/clients",
        element:<Clients />
      },
      {
        path:"/projects",
        element:<Projects />
      },
      {
        path:"/clients/:id",
        element:<Client />
      },
      {
        path:"/projects/:id",
        element:<Project />
      },
    ]
  },
  {
    path:"/login",
    element:<Login />
  },
]);




 return (
  <RouterProvider router={router}/>
 )
}

export default App
