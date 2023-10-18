import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/pages/Login/store";
import Layout from "@/layout";

const ProtectedRoute = () => {
  const token = useAuthStore(state => state.token);

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
