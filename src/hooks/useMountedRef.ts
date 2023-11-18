import { useEffect, useRef } from "react";

/**
 * 用于判断组件是否已挂载
 * @returns 如果还没挂载或已经卸载，返回false；反之返回true
 */
const useMountedRef = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
};

export default useMountedRef;
