import { debounce, throttle } from "@/utils/utils";
import { useCallback, useEffect, useState } from "react";

interface UseRequestOptions {
  manual?: boolean; // 手动触发
  ready?: boolean;
  refreshDeps?: any[]; // 刷新依赖
  debounceInterval?: number; // 防抖间隔
  throttleInterval?: number; // 节流间隔
  onSuccess?: (data: any) => void; // 成功回调
}

export const useRequest = <T = any, R = any>(
  requestFn: (...args: any[]) => Promise<R>,
  options: UseRequestOptions
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    manual = false,
    ready = true,
    refreshDeps = [],
    debounceInterval,
    throttleInterval,
    onSuccess,
  } = options;

  const request = useCallback(async (...args: any[]) => {
    try {
      const result = await requestFn(...args);
      setData(result as typeof data);
      onSuccess && onSuccess(result);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const run = useCallback(() => {
    if (debounceInterval) {
      debounce(request, debounceInterval);
    } else if (throttleInterval) {
      throttle(request, throttleInterval);
    } else {
      request();
    }
  }, [debounceInterval, throttleInterval, request]);

  useEffect(() => {
    setData(null);
    setError(null);
    setLoading(true);
    !manual && ready && run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manual, ready, ...refreshDeps, run]);

  return { data, error, loading, run };
};
