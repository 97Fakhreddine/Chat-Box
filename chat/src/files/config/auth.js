class Auth {
  constructor() {
    this.authenticated = false;
  }
  login(callback) {
    this.authenticated = true;
    callback();
  }
  logout(callback) {
    localStorage.removeItem("token");
    callback();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
