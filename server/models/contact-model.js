const {Schema,model}= require("mongoose");
//creating schema
const contactSchema = new Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    message:{type:String, required:true},
})

//creating model 
const Contact = new model("Contact",contactSchema);
module.exports = Contact;