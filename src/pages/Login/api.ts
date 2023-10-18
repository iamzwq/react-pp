import { LoginForm } from "./types";

enum apiUrl {
  login = "/login",
}

export const fetchLogin = async (loginForm: LoginForm) => {
  const res = await fetch(apiUrl.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginForm),
  });
  return res.json();
};
