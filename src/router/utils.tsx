import { Suspense, createElement, lazy } from "react";

export const lazyLoad = (
  component: () => Promise<{
    default: React.ComponentType<any>;
  }>
) => {
  return <Suspense>{createElement(lazy(component))}</Suspense>;
};
