import { setToken, useCommonStore } from "@/stores/common";
import { message } from "@/utils/staticAntd";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const theme = useCommonStore(state => state.theme);

  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const elements: any = formRef.current.elements;
      const username = elements.username.value;
      const password = elements.password.value;
      if (username === "admin" && password === "123456") {
        setToken("admin-123456");
        message.success("登录成功");
        navigate("/");
      } else {
        message.error("用户名或密码错误");
      }
    }
  };

  return (
    <div
      className={`${theme} flex-center flex-col h-screen w-screen text-slate-600 dark:text-slate-200 bg-[url(@/assets/images/bg_login.svg)] bg-fixed bg-no-repeat bg-cover`}
    >
      <div className="flex-center flex-col w-100 p-10 rounded-4 bg-white/10">
        <h1 className="mb-4 text-white/80">Welcome</h1>
        <form className="w-full" onSubmit={onSubmit} ref={formRef}>
          <input
            type="text"
            name="username"
            placeholder="用户名:admin"
            className="w-full px-2 h-9 rounded bg-white/70 border-0 outline-0 placeholder:text-slate-500 text-slate-700"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="密码:123456"
            className="w-full px-2 h-9 rounded bg-white/70 border-0 outline-0 placeholder:text-slate-500 text-slate-700 mt-6"
            autoComplete="off"
          />
          <div className="flex justify-between items-center h-6 mt-4">
            <label className="cursor-pointer text-white/80">
              <input type="checkbox" autoComplete="off" /> 记住密码
            </label>
            <Link to="/forget-password">忘记密码</Link>
          </div>
          <input
            type="submit"
            className="contained-btn mt-4 text-lg w-full"
            role="button"
            value="登录"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
