import { useCommonStore } from "@/stores/common";
import { useCallback } from "react";

/**
 * 权限判断hook
 * @returns hasAuth 权限判断方法
 */
const useAuth = () => {
  // 获取用户信息
  const userInfo = useCommonStore(state => state.userInfo);
  const userRole = userInfo.role;

  /**
   * 判断是否有权限的方法
   * @param auths 权限列表
   */
  const hasAuth = useCallback(
    (auths: string | string[]) => {
      if (Array.isArray(auths)) {
        return auths.some(auth => userRole.includes(auth));
      }
      return userRole.includes(auths);
    },
    [userRole]
  );

  return { hasAuth };
};

export default useAuth;
