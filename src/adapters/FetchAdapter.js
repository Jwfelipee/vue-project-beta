import { ROUTE } from "../routeApi/Route.js";

export default class FetchAdapter {
  constructor(token) {
    this.token = "Bearer " + token;
  }

  post(url, body) {
    return fetch(`${ROUTE}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(body),
    });
  }

  get(url) {
    return fetch(`${ROUTE}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Authorization: this.token,
      },
    }).then((data) => data?.json());
  }
}
