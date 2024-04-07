const mongoose= require("mongoose");
const bcrypt=require("bcryptjs");
const jwt= require("jsonwebtoken");
//creating instance of mongoose schema
const userSchema = new mongoose.Schema ({
  username:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  phone:{
    type:Number,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  isAdmin:{
    type:Boolean,
    require:false,
  },
})
//Model: Acts as a higher-level abstraction that interacts with the database based on the defined schema. It represents a collection and provides an interface for querying, creating, updating, and deleting documents in that collection. Models are created from schemas and enable you to work with MongoDB data in a more structured manner in your application.
userSchema.pre("save",async function(next){//acts as a middleware which makes the above function work first before 'save' the data on database.
//  console.log("pre method",this);
    const user=this;
    if(!user.isModified("password")){
      next();
    }
    try{
      const saltRound= await bcrypt.genSalt(10);
      const hashpassword= await bcrypt.hash(user.password, saltRound);
      user.password= hashpassword;
    }catch(error){
      next(error);
    }
}); 

//json web token
userSchema.methods.generateToken = async function(){ //generateToke is an instance method where we can create any number of function
  try {
    return jwt.sign( //returning token
     {
        userId: this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
    },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      },
     
    );
  } catch (error) {
    console.error(error);
  }
};// function is defined and we can use it anywhere on controller
//using 'methods' method, we can create any function and many functions

userSchema.methods.compPassword= async function(password){
  return bcrypt.compare(password, this.password);
}

//In most cases, converting _id to a string is a good practice because it ensures consistency and compatibility across different JWT libraries and systems. It also aligns with the expectation that claims in a JWT are represented as strings.

//define the model or the collection name....models has two arguments
const User = new mongoose.model("User",  userSchema);//second user is the collection name

module.exports=User;

// json web token
//Tokens, such as JWTS (JSON Web Tokens), are typically not stored in the database along with other user details. Instead, they are issued by the server during the authentication process and then stored on the client-side (e.g., in cookies or local storage) for later use.

// **What is JWT?**

//JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
// JWTS are often used for authentication and authorization in web applications.
// 1. **Authentication:** Verifying the identity of a user or client.
// 2. **Authorization:** Determining what actions a user or client is allowed to perform.

// **Components of a JWT:**
// Header: Contains metadata about the token, such as the type of token and the signing algorithm being used.
// Payload: Contains claims or statements about an entity (typically, the user) and additional data.
//Common claims include user ID, username, and expiration time.
// Signature: To verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way, a signature is included.

