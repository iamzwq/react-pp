import { useCommonStore } from "@/stores/common";

/**
 * 判断用户是否登录
 * @returns 如果用户已登录返回true，否则返回false
 */
export const hasToken = () => {
  const { token } = useCommonStore.getState();
  return Boolean(token);
};
