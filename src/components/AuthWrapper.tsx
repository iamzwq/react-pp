import { FC, ReactNode } from "react";
import { useAuth } from "@/hooks";

/**
 * 权限控制组件
 * @param auth 权限
 * @returns 如果有权限，则渲染 children，否则返回 null
 *
 * @example
 * <AuthWrapper auth={["admin", "editor"]}>
 *   <div>admin</div>
 * </AuthWrapper>
 *
 * <AuthWrapper auth="admin">
 *   {(auth) => <div>{ auth ? "admin" : "no auth" }</div>}
 * </AuthWrapper>
 */
const AuthWrapper: FC<{
  auth: string | string[];
  children: ReactNode | ((auth: boolean) => ReactNode);
}> = ({ auth, children }) => {
  const { hasAuth } = useAuth();

  if (typeof children === "function") {
    return children(hasAuth(auth));
  }

  return hasAuth(auth) ? children : null;
};

export default AuthWrapper;
