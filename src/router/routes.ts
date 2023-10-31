import { set } from "lodash-es";
import { RouteObject } from "react-router-dom";
import { wrapSuspense } from "./helper";

export const genarateRoutes = () => {
  const modules = import.meta.glob([
    "/src/pages/**/index.tsx",
    "!**/(login|not-found)/index.tsx",
  ]);
  const pathConfig = {};
  Object.keys(modules).forEach(filePath => {
    const routePath = filePath
      .replace("/src/pages/", "")
      .replace(/.tsx$/, "")
      .replace(/\[([\w-]+)]/, ":$1")
      .split("/");
    set(pathConfig, routePath, modules[filePath]);
  });
  return pathConfig;
};

export const mapPathConfigToRoutes = (pathConfig: Record<string, any>): RouteObject[] => {
  return Object.entries(pathConfig).map(([path, child]) => {
    const { index, ...rest } = child;
    return {
      path,
      element: wrapSuspense(index),
      children: mapPathConfigToRoutes(rest),
    };
  });
};

export const routeConfig = mapPathConfigToRoutes(genarateRoutes());
