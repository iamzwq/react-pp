import { useCallback, useReducer } from "react";
import { useMountedRef } from ".";

interface State<T> {
  error: Error | null;
  data: T | null;
  stat: "idle" | "loading" | "error" | "success";
}

const defaultInitialState: State<null> = {
  error: null,
  data: null,
  stat: "idle",
};

const useSafeDispatch = <T>(dispatch: (...args: T[]) => void) => {
  const mountedRef = useMountedRef();

  return useCallback(
    (...args: T[]) => (mountedRef.current ? dispatch(...args) : void 0),
    [dispatch, mountedRef]
  );
};

const useAsync = <T>(initialState?: State<T>) => {
  const [state, dispatch] = useReducer(
    (state: State<T>, action: Partial<State<T>>) => ({ ...state, ...action }),
    {
      ...initialState,
      ...defaultInitialState,
    }
  );

  const safeDispatch = useSafeDispatch(dispatch);

  const setData = useCallback(
    (data: T) => {
      safeDispatch({
        data,
        error: null,
        stat: "success",
      });
    },
    [safeDispatch]
  );

  const setError = useCallback(
    (error: Error) => {
      safeDispatch({
        error,
        data: null,
        stat: "error",
      });
    },
    [safeDispatch]
  );

  const run = useCallback(
    async (promise: Promise<T>) => {
      if (!promise || !promise.then) {
        throw new Error("请传入 Promise 类型的数据");
      }
      safeDispatch({ stat: "loading" });

      return promise
        .then(data => {
          setData(data);
          return data;
        })
        .catch(error => {
          setError(error);
          return error;
        });
    },
    [setData, setError, safeDispatch]
  );

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    run,
    setData,
    setError,
    ...state,
  };
};

export default useAsync;
