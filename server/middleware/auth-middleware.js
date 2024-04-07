//here json web token will be verified if it is valid or not
// // if it is verified, then we will get the user data and pass it through req. user (custom property)(in controller)
const jwt = require("jsonwebtoken");
const User= require("../models/user-model");

const authMiddleware = async (req, res, next) => {
const token = req.header("Authorization"); //token getting from postman/frontend
  if (!token) {
    //if you're attempting to use an expired token, you'll recieve a '401 Unauthorized HTTP' response.
    return res
      .status(401)
      .json({ message: "Uauthorized HTTP, Token not provided" });
  }

  //assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("token from auth middleware", token);

  //verifying token

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // console.log(isVerified); //returns only userid,email an isAdmin as specified in generateToken method of jwt in user model
    const userData = await User.findOne({email: isVerified.email}).select({password:0});
    
    console.log(userData); //all data of user(from model), matching with token

    //creating custom properties
    //In Express.js, req (request) object is an object that contains information about the HTTP request. By adding custom properties to req, you can pass information between middleware functions or make it available in your route handlers.
    req.user= userData; //now this req.user can be used anywhere when using middleware
    req.token= token;
    req.userID= userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized, Invalid Token" });
  }
};
module.exports = authMiddleware;
