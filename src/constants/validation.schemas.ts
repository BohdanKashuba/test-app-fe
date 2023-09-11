import * as yup from "yup";

const passwordLength = 8;
const nameLength = 4;

export const loginFormValidation = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .test(
      "len",
      `Password should contain at least ${passwordLength} characters`,
      (val) => !!val && val.length >= passwordLength
    )
    .required(),
});

export const signUpFormValidation = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  name: yup
    .string()
    .test(
      "len",
      `Name should contain at least ${nameLength} characters`,
      (val) => !!val && val.length >= nameLength
    )
    .required("Email is required"),
  password: yup
    .string()
    .test(
      "len",
      `Password should contain at least ${passwordLength} characters`,
      (val) => !!val && val.length >= passwordLength
    )
    .required(),
});
