import { redirect } from "react-router-dom";

export const userBeforeEnter = async () => {
  // const token = useGlobalStore.getState().user;
  const auth = false;
  if (!auth) return redirect("/login");
  return null;
};
