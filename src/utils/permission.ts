import { useCommonStore } from "@/stores/common";

/**
 * 判断用户是否登录
 * @returns 如果用户登录返回true，否则返回false
 */
export const hasToken = () => {
  const { token } = useCommonStore.getState();
  return Boolean(token);
};

/**
 * 判断用户是否拥有指定角色
 * @param roleIds 角色id 数组
 * @param anyOrEvery 角色判断逻辑，any表示只要有一个角色满足即可，every表示所有角色都满足
 * @returns 如果用户拥有指定角色返回true，否则返回false
 */
export const hasRole = (
  roleIds: number | number[],
  anyOrEvery: "any" | "every" = "any"
) => {
  // const roles:any[] = useCommonStore.getState().roles;
  const roles: any[] = [];
  if (Array.isArray(roleIds)) {
    if (anyOrEvery === "any") {
      return roleIds.some(roleId => roles.some(role => role.id === roleId));
    } else {
      return roleIds.every(roleId => roles.some(role => role.id === roleId));
    }
  }
  return roles.some(role => role.id === roleIds);
};
