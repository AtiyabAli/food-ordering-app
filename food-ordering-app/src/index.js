import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Body from "./components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/error",
        element: <Error/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
