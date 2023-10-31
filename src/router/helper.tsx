import { ComponentType, Suspense, lazy } from "react";

export function wrapSuspense(importer: () => Promise<{ default: ComponentType }>) {
  if (!importer) return null;

  const Component = lazy(importer);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component />
    </Suspense>
  );
}
