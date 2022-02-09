export default class Login {
  email = "dev@admin.com";
  password = "admin";

  constructor(FetchAdapter, Cookies) {
    this.httpRequest = FetchAdapter;
    this.cookies = Cookies;
    this.cookies.removeToken();
  }

  async singIn(This) {
    const res = await this.httpRequest.post("/login", {
      email: this.email,
      password: this.password,
    });
    if (!res?.ok) return alert("não foi possível fazer o login");
    const json = await res.json();
    this.cookies.setToken(json.token);
    This.$router.push("/home");
    return res;
  }

  setEmail(valueEmail) {
    this.email = valueEmail;
  }

  setPassword(valuePassword) {
    this.password = valuePassword;
  }
}
