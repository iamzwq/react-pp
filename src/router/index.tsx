import { Navigate, RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import { routeConfig } from "./routes";
import { wrapSuspense } from "./helper";
import { isLogin } from "@/utils/permission";

const routes: RouteObject[] = [
  {
    path: "login",
    element: wrapSuspense(() => import("@/pages/login")),
  },
  {
    path: "/",
    loader: () => {
      if (!isLogin) return redirect("/login");
      return null;
    },
    element: wrapSuspense(() => import("@/layout")),
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
    element: wrapSuspense(() => import("@/pages/not-found")),
  },
];

const router = createBrowserRouter(routes, { basename: "/" });

export default router;
