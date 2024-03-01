import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Mirocom from "pages/Home";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "mirocom",
      element: <Mirocom />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
