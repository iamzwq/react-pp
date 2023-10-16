import { useEffect, useRef } from "react";

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
