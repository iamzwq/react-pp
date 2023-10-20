import { userRouterBefore } from "@/pages/User/routerBefore";
import { suspenseLazy } from "./utils";
import { Navigate, RouteObject } from "react-router-dom";
import AuthRoute from "@/components/AuthRoute";
import AboutAuthRoute from "@/components/AboutAuthRoute";

const publicRoutes: RouteObject[] = [
  {
    path: "login",
    element: suspenseLazy(() => import("@/pages/Login")),
  },
];

const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AuthRoute />,
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
        element: <AboutAuthRoute />,
        children: [
          {
            index: true,
            element: suspenseLazy(() => import("@/pages/About")),
          },
        ],
      },
      {
        path: "user",
        loader: userRouterBefore,
        element: suspenseLazy(() => import("@/pages/User")),
      },
    ],
  },
];

export const routes: RouteObject[] = [
  ...publicRoutes,
  ...protectedRoutes,
  {
    path: "*",
    element: suspenseLazy(() => import("@/pages/NotFound")),
  },
];
