const { z } = require("zod");

const signupSchema2 = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be of at least 7 characters" })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

module.exports= signupSchema2;