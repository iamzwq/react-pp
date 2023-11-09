import { useCommonStore } from "@/stores/common";

/**
 * 判断用户是否登录
 * @returns 如果用户已登录返回true，否则返回false
 */
export const isLogin = () => {
  const { token } = useCommonStore.getState();
  return Boolean(token);
};

export const checkRole = (roleIds: string[], relation: "and" | "or" = "or") => {
  // const { roles } = useCommonStore.getState();
  const roles: { id: string; name: string }[] = [];
  if (relation === "and") {
    // 如果关系为 "and"，则返回角色列表中所有角色的ID是否都在roleIds中
    return roles.every(role => roleIds.includes(role.id));
  }
  // 如果关系为 "or"，则返回角色列表中是否存在角色的ID在roleIds中
  return roles.some(role => roleIds.includes(role.id));
};
