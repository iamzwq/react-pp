enum apiUrl {
  login = "/login",
}

export interface LoginForm {
  username: string;
  password: string;
}

const loginApi = {
  fetchLogin: async (loginForm: LoginForm) => {
    const res = await fetch(apiUrl.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    });
    return res.json();
  },
};

export default loginApi;
