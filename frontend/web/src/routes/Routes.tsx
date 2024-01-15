import React from "react";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutHome from "./LayoutHome";
import ErrorPage from "./pages/ErrorPage";
import BasicInfo from "./pages/BasicInfo";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import ContactMe from "./pages/ContactMe";
import OtherInterests from "./pages/OtherInterests";

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
      {
        path: "/basic-info",
        element: <BasicInfo />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/work-experience",
        element: <WorkExperience />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/contact-me",
        element: <ContactMe />,
      },
      {
        path: "/other-interests",
        element: <OtherInterests />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
