import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useUrlQueryParams = <T extends string>(keys: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return keys.reduce(
      (prev, key) => {
        return { ...prev, [key]: searchParams.get(key) || "" };
      },
      {} as { [key in T]: string }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // const setParams = (params: Partial<{ [key in T]: string }>) => {
  //   setSearchParams(
  //     new URLSearchParams({ ...Object.fromEntries(searchParams), ...params })
  //   );
  // };

  return [params, setSearchParams] as const;
};

export default useUrlQueryParams;
