import { ROUTE } from "../routeApi/Route.js";

export default class FetchAdapter {
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
}
