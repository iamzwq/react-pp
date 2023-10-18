import { setToken, setUser, useCommonStore } from "@/stores/common";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "./api";

const Login = () => {
  const navigate = useNavigate();
  const theme = useCommonStore(state => state.theme);

  const onSubmit = () => {
    fetchLogin({ username: "admin", password: "123456" }).then(() => {
      setToken("lalala");
      setUser({
        name: "admin",
        email: "admin@admin.com",
        phone: "12345678901",
      });
      navigate("/");
    });
  };

  return (
    <div className={theme}>
      <div className="flex-center flex-col min-h-screen text-slate-600 dark:text-slate-200 bg-white dark:bg-slate-800 bg-[url(https://www.dpm.org.cn/Uploads/Picture/2023/03/29/s64238f0b5d679.jpg)]">
        <div className="flex-center flex-col w-120 p-4 rounded shadow-md shadow-indigo-200 min-h-100 bg-white/40">
          <h1 className="mb-12">Welcome</h1>
          <form className="w-80%">
            <div className="flex items-center">
              <div className="inline-block w-20 text-justify text-shadow">用户名：</div>
              <input
                type="text"
                name="username"
                placeholder="请输入用户名"
                className="flex-1 p-1 h-9 rounded border border-solid border-indigo-500 outline-indigo-600"
              />
            </div>
            <div className="flex mt-4 items-center">
              <label className="w-20 text-justify text-shadow">密码：</label>
              <input
                type="password"
                name="password"
                placeholder="请输入密码"
                className="flex-1 p-1 h-9 rounded border border-solid border-indigo-500 outline-indigo-600"
                autoComplete="off"
              />
            </div>
            <div className="flex justify-between items-center h-6 mt-4">
              <div className="">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="cursor-pointer"
                  autoComplete="off"
                />
                <label htmlFor="rememberMe" className="cursor-pointer">
                  记住密码
                </label>
              </div>
              <Link to="/forget-password">忘记密码</Link>
            </div>
            <input
              type="submit"
              className="contained-btn mt-4 text-lg w-full"
              onClick={onSubmit}
              role="button"
              value="登录"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
