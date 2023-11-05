import { useRef } from "react";

/**
 * Returns true if component is just mounted (on first render) and false otherwise.
 * 若组件刚刚加载（在第一次渲染时），则返回 true，否则返回 false
 */
const useFirstMount = () => {
  const isFirstMountRef = useRef(true);

  if (isFirstMountRef.current) {
    isFirstMountRef.current = false;

    return true;
  }

  return isFirstMountRef.current;
};

export default useFirstMount;
