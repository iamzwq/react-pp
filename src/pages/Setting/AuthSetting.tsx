import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

const AuthSetting: FC<PropsWithChildren> = ({ children }) => {
  const isAuth = false;

  if (!isAuth) {
    return (
      <Result
        status="warning"
        title="您没有权限查看此页面！"
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    );
  }

  return children;
};

export default AuthSetting;
