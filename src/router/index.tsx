import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "antd";
import { useEffect } from "react";
import { antdUtils } from "@/utils/antdUtils";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

const Router = () => {
  const staticFuction = App.useApp();

  useEffect(() => {
    antdUtils.init(staticFuction);
  }, [staticFuction]);

  return <RouterProvider router={router} />;
};

export default Router;
