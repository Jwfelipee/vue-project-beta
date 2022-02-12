export default class CollaboratorController {
  constructor(httpAdapter) {
    this.httpRequest = httpAdapter;
  }

  get() {
    return this.httpRequest.get("/users");
  }
}
