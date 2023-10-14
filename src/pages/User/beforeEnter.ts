import { useStorageStore } from "@/stores/storage";
import { redirect } from "react-router-dom";

export const userBeforeEnter = async () => {
  const token = useStorageStore.getState().user;
  if (!token) return redirect("/login");
  return null;
};
