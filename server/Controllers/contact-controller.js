const Contact = require("../models/contact-model");


const contactForm=async(req,res)=>{
    try {
        const response = req.body; //server needs body from frontend and it will add its data on db as given in next line.
        await Contact.create(response);
        return res.status(200).json({message:"messsage send succesfully"});
    } catch (error) {
        return res.status(500).json({message:"message not delievered"});
    }
}
module.exports= contactForm;
