const express=require("express");
const router= express.Router();
const authControllers= require("../Controllers/auth-controller");
//use object name authcontroller in place of {home,register}
const signupSchema =require("../validators/auth-validator");
const signupSchema2 = require("../validators/auth-validateLogin");
const validate= require("../middleware/validate-middleware");
const authMiddleware= require("../middleware/auth-middleware");
 

//Router in Express.js
router.route("/").get(authControllers.home);
//this way helps in chaining others methods as well(in place of router.get)
router.route("/register").post(validate(signupSchema),authControllers.register); //post method is used to add data to db(here, from register)
//"action" is the description of what u want to do and "dispatch" is the function that carries out that action   in react. but these are controllers in express
router.route("/login").post(validate(signupSchema2), authControllers.login); //post method is used to add data to db(here, from register)
//creating route of user for getting data of logged in user
router.route("/user").get(authMiddleware, authControllers.user); 
//through middleware, we're checking if the user has token or not i.e, user is logged in or not.

module.exports= router;