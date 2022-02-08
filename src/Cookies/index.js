import { useCookies } from "vue3-cookies";

export default class Cookies {
  constructor() {
    const { cookies } = useCookies();
    this.cookies = cookies;
  }

  setToken(value) {
    this.cookies?.set("token", value);
  }

  getToken() {
    return this.cookies.get("token");
  }

  removeToken() {
    return this.cookies.remove("token");
  }
}
