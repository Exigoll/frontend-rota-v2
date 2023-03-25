import * as yup from "yup";

import { AppErrors } from "@/common/errors";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email(AppErrors.InvalidEmail)
    .required(AppErrors.RequiredField),
  password: yup
    .string()
    .min(5, AppErrors.MinLength)
    .required(AppErrors.RequiredField)
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
      AppErrors.InvalidPassword
    ),
});

export const RegisterSchema = yup
  .object()
  .shape({
    confirmPassword: yup
      .string()
      .min(8, AppErrors.MinLength)
      .required(AppErrors.RequiredField)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
        AppErrors.InvalidPassword
      ),
    fullName: yup
      .string()
      .min(6, AppErrors.MinLength)
      .required(AppErrors.RequiredField),
    address: yup
      .string()
      .min(6, AppErrors.MinLength)
      .required(AppErrors.RequiredField),
    phoneNumber: yup
      .string()
      .required(AppErrors.RequiredField)
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\&\.]?[0-9]{3}[-\&\.]?[0-9]{4,6}$/,
        AppErrors.InvalidPhone
      ),
    legalForm: yup.string().required(AppErrors.RequiredField),
    kindOfActivity: yup.string().required(AppErrors.RequiredField),
  })
  .concat(LoginSchema);
