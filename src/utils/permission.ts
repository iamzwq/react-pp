import { useCommonStore } from "@/stores/common";

export const checkPermission = (role: string) => {
  const { token } = useCommonStore.getState();
  if (role === "token") return Boolean(token);
  return false;
};
