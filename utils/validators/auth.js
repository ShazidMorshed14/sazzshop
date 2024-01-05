import * as Yup from "yup";
export const loginValidation = Yup.object({
  login_email: Yup.string()
    .required("Email is required!")
    .email("Please insert a valid email"),
  login_password: Yup.string().required("Password must be given"),
});

export const signupValidation = Yup.object({
  name: Yup.string()
    .required("Name must be given")
    .matches(/^[aA-zZ]/, "Numbers and Special Charecters are not allowed"),
  email: Yup.string()
    .required("Email must be given")
    .email("Please enter a valid email"),
  password: Yup.string()
    .required("Password must be given")
    .min(6, "Password must be 6 charecter long"),
  conf_password: Yup.string()
    .required("Please type the password again")
    .oneOf([Yup.ref("password")], "Password didn't macthed!"),
});
