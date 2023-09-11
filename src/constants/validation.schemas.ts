import * as yup from "yup";

const passwordLength = 8;

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
