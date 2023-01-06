const User = require("../model/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const user = require("../model/user");
const { model } = require("mongoose");
dotenv.config();
class userController {
  async userRegister(req, res) {
    try {
      const { username, password } = req.body;
      if ((username, password)) {
        const userExist = await User.findOne({ username: username });
        if (!userExist) {
          const newuser = User({
            username: username,
            password: password,
          });
          await newuser.save();
          const accesstoken = jwt.sign(
            { userExist: newuser._id },
            process.env.Token
          );
          return res.status(200).json({
            success: true,
            newuser: newuser,
            message: "create acoout success",
            accesstoken: accesstoken,
          });
        } else {
          return res
            .status(500)
            .json({ success: false, message: "user name has been Exist" });
        }
      }
      return res
        .status(400)
        .json({ success: false, message: "User name password need required" });
    } catch (error) {
      return console.log(error);
    }
  }
  async userLogin(req, res) {
    try {
      const { username, password } = req.body;
      if ((!username, !password)) {
        return res.status(400).json({
          success: false,
          message: "Username and Password need required",
        });
      } else {
        const userlogin = await User.findOne({
          username: username,
          password: password,
        });
        if (!userlogin) {
          return res.status(500).json({
            success: false,
            message: "Username or Password not true",
          });
        }
        const accesstoken = jwt.sign(
          { userExist: userlogin._id },
          process.env.Token
        );
        return res.status(200).json({
          success: true,
          userLogin: userlogin,
          message: "login account success",
          accesstoken: accesstoken,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getAlluser(req, res) {
    try {
      const response = await User.find();
      return res.status(200).json({ success: true, alluser: response });
    } catch (error) {
      console.log(error);
    }
  }

   async changePasword(req, res){
  
  try{
    const{ userid, oldpass, newpass, passconfirm} = req.body;
    if((userid, oldpass, newpass,passconfirm)) {
      const userChangepass = await User.findById({_id:userid});
      //   if(oldpass != user.password){
      //    return res.status(702).json({
      //      success:false,
      //      message:"password is wrong"
      //    })
      //  }
      if(userChangepass.password!== oldpass){
        return res.status(500).json({
          success: false,
          message: "password is wrong"
        })
      }

     
      if(passconfirm!=newpass){
        return res.status(602).json({
          success:false,
          message:"password cofirm is same password"
        })
      }
      if(!userChangepass){
        return res.status(601).json({
          success: false,
          message:"account is not exist"
        })
      }
      if(userChangepass ){
        const changPass = User({
          userid: User._id,
            oldpass : newpass,
        });
        await User.findByIdAndUpdate({
          _id: userid
          
          
        }, {password:newpass});
        
        // await changPass.save();
        const accesstoken = jwt.sign(
          {
             userChangepass: changPass
          },
          process.env.Token
        );
        return res.status(201).json({
          success: true,
          // changPass: changPass,
          message: "change password is success",
          accesstoken: accesstoken,
        });
      }else{
        return res
        .status(501)
        .json({ success: false, message:"pass word is does not matched"});
      }
    }
    return res
    .status(401)
    .json({success:false, message:" password, newpass, password confirm need reuired"});
  }catch(error){
    return console.log(error);
  }

};
}
  

module.exports = new userController();
