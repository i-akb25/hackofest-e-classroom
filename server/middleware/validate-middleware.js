// await schema.parseAsync(req.body) is the line where you use Zod to validate the request body data against the defined schema.
// https://github.com/colinhacks/zod#parseasync
//.parse(data: unknown): T
// Given any Zod schema, you can call its .parse method to check data is valid. If it is, error is thrown. a value is returned with full type information Otherwise, an
//.parseAsync(data:unknown): Promise<T>
//// If you use asynchronous [refinements](https://github.com/colinhacks/zod#refine) or [transforms](https://github.com/colinhacks/zod#transform) (more on those later), you'll need to use .parseAsync.

const validate = (schema) => async (req, res, next) => {//middleware that checks validation of req.body i.e, user data and match it with signupschema
  //this schema is signupschema in auth-validate.js
  try {
    const parseBody = await schema.parseAsync(req.body); //parseSchema method ensures if req.body matches with schema(i.e, signupschema) or not
    req.body = parseBody; //validation
    next();
  } catch (err) {  //err is the object, errors  is the property of the obj and itself is an array(array of objects)
    const status = 422;
    const message= "Fill the input properly";
    const extraDetails = err.errors[0].message; // errors is an array of objects //here errors is 
    
    const error={
      status,
      message,
      extraDetails
    }
    console.log(error);
    // res.status(400).json({ msg:message });
    next(error);
  }
};

module.exports = validate;
