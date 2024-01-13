import React from "react";
import Home from "./routes/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutHome from "./routes/LayoutHome";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
