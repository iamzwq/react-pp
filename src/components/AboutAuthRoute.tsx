import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AboutAuthRoute = () => {
  const permission = false;
  const navigate = useNavigate();
  const [delay, setDelay] = useState(3);

  useEffect(() => {
    if (!permission) {
      const timer = setInterval(() => {
        setDelay(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [permission]);

  useEffect(() => {
    if (delay === 0) {
      navigate("/", { replace: true });
    }
  }, [delay, navigate]);

  if (!permission) {
    return (
      <div className="text-lg">您没有访问此页面的权限！{delay}秒后跳转到Home Page！</div>
    );
  }
  return <Outlet />;
};

export default AboutAuthRoute;
