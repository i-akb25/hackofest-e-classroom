//In an express,js application, a "Controller" refers to a part of the code that is responsible for handling application's logic.
//Process incoming request, interact with models (data sources), and send responses back to the clients.
//Helps in organizing an application by separating concerns and following the MVC(Model-View-Controller) design pattern.

//User Registration Logic
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
//Home Logic

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the home page using routerrr.");
  } catch (error) {
    console.log(error);
  }
};
//Register logic

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body; //this email is email of registering user
    const userExist = await User.findOne({ email }); // first email is field, from User created in models...
    if (userExist) {
      //checks if above email by user matches with email field which is created in model and saved on database on atlas or not.
      return res.status(400).json({ msg: "Email already exists" });
    }
    const userCreated = await User.create({ username, email, phone, password }); //for database

    res.status(201).json({ // typically the response sent after POST requests, or some PUT requests.
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

//login logic

const login = async (req, res) => {
  //we do not need create any user model and import it like we did for register
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.send(400).json({ msg: "Invalid Credentials" });
    }
    //then compare password
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.compPassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid Email or Password" });
    }
  } catch (error) {
    // res.status(500).json({ msg: "internal server error" });
    next(error); //this will ensure that error is first passed to error handling middleware, and then response is sent to client.
  }
};

//user logic

const user = async (req, res) => {
  try {
    const userData = req.user; // req.user created in auth-middleware, which actually contains all data(except password) of a logged in user(checked with token from postman/frontend)
    //basically controller is able to get this custom property of middleware through next() and router.
    console.log(userData);
    return res.status(200).json({ userData }); // to pass to frontend
    // res.status(200).json({msg: "hi user"});
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};
module.exports = { home, register, login, user };
