import { Navigate, RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import { routeConfig } from "./routes";
import { isLogin } from "@/utils/permission";
import { lazy } from "react";

const routes: RouteObject[] = [
  {
    path: "login",
    Component: lazy(() => import("@/pages/login")),
  },
  {
    path: "/",
    loader: () => {
      if (!isLogin()) return redirect("/login");
      return null;
    },
    Component: lazy(() => import("@/layout")),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      ...routeConfig,
    ],
  },
  {
    path: "*",
    Component: lazy(() => import("@/pages/not-found")),
  },
];

const router = createBrowserRouter(routes, { basename: "/" });

export default router;
