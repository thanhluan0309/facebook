const User = require("../model/user");
const jwt = require("jsonwebtoken");
class UserController {
  async register(req, res) {
    const { username, password } = req.body;
    try {
      const userExits = await User.findOne({ username: username });
      if (!userExits) {
        const newUser = User({
          username: username,
          password: password,
        });
        await newUser.save();
        const Accesstoken = jwt.sign(
          { UserExit: newUser._id },
          process.env.Accestoken
        );
        return res
          .status(200)
          .json({ success: true, newUser: newUser, token: Accesstoken });
      } else {
        return res
          .status(500)
          .json({ success: false, message: "This account already exits" });
      }
    } catch (error) {
      console.log(error);
    }
    return res.status(200).json({ success: true, message: "register success" });
  }
}
module.exports = new UserController();
