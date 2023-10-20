import { Navigate, Outlet } from "react-router-dom";
import { useCommonStore } from "@/stores/common";
import Layout from "@/layout";

const ProtectedRoute = () => {
  const token = useCommonStore(state => state.token);

  if (!token) {
    return <Navigate to="login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
