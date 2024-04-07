const express= require("express");
const router= express.Router();
const contactForm= require("../Controllers/contact-controller"); //logic


router.route("/contact").post(contactForm); //will get its logic from controller

module.exports= router;
