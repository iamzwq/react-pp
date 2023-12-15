import { useEffect, useRef } from "react";

/**
 * 使用指定的title，并在组件卸载时恢复原来的title
 * @param title - 要使用的title
 * @param keepOnUnmount - 是否在组件卸载时保留新的title，默认为false
 */
const useTitle = (title: string, keepOnUnmount = false) => {
  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = titleRef.current;
      }
    };
  }, [keepOnUnmount]);
};

export default useTitle;
