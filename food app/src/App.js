import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header"
import Body from "./component/Body"
import About from "./component/About";
import Error  from "./component/Error";
import Contact from "./component/Contact"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./component/ResturantMenu";

const AppLayout = () => (
  <div className="App">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
     children: [
      {
    path: "/",
    element: <Body />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/resturants/:resId",
    element: <ResturantMenu/>,
  },
],
errorElement: <Error/>
  },
  
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);