import { suspenseLazy } from "./utils";
import { Navigate, RouteObject, redirect } from "react-router-dom";
import { checkPermission } from "@/utils/permission";

export const routes: RouteObject[] = [
  {
    path: "login",
    element: suspenseLazy(() => import("@/pages/Login")),
  },
  {
    path: "/",
    loader: () => {
      if (!checkPermission("token")) return redirect("/home");
      return null;
    },
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: suspenseLazy(() => import("@/pages/Home")),
      },
      {
        path: "about",
        element: suspenseLazy(() => import("@/pages/About")),
      },
      {
        path: "user",
        element: suspenseLazy(() => import("@/pages/User")),
      },
      {
        path: "setting",
        element: suspenseLazy(() => import("@/pages/Setting")),
      },
    ],
  },
  {
    path: "*",
    element: suspenseLazy(() => import("@/pages/NotFound")),
  },
];
