import { check, validationResult } from "express-validator";

export const validateSignupRequest = [
  check("name").notEmpty().withMessage("firstName is required"),
  check("email")
    .notEmpty("Email not found")
    .isEmail()
    .withMessage("Valid Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const validateSigninRequest = [
  check("identifier")
    .notEmpty()
    .withMessage("Valid Email or Phone is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const isRequestValidated = (req, res, next) => {
  // Ensure that the 'body' property exists in the request object
  if (!req.body) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const errors = validationResult(req);
  console.log(errors);
  if (errors.isEmpty()) {
    // If there are no validation errors, proceed to the next middleware
    next();
  } else {
    // If there are validation errors, return a 400 response with the first error message
    return res.status(400).json({ message: errors.array()[0].msg });
  }
};
