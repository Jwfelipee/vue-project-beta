export default class Login {
  constructor(FetchAdapter) {
    this.httpRequest = FetchAdapter;
  }

  async singIn({ email, password }) {
    const res = await this.httpRequest.post("/login", {
      email,
      password,
    });
    if (!res?.ok) return alert("não foi possível fazer o login");
    return res;
  }
}
