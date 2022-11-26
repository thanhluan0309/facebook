const User = require("../model/user");

class UserController {
  async register(req, res) {
    return res.status(200).json({ success: true, message: "register success" });
  }
}
module.exports = new UserController();
