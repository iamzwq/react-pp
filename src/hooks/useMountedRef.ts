import { useEffect, useRef } from "react";

/**
 * 返回组件的挂载状态，如果还没挂载或已经卸载，返回false；反之返回true
 * @returns 组件的挂载状态
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
