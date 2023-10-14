import { Navigate, Outlet } from "react-router-dom";
import { useStorageStore } from "@/stores/storage";
import Layout from "@/layout";

const ProtectedRoute = () => {
  const token = useStorageStore(state => state.token);

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
