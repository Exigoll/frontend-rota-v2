import * as yup from "yup";

export const LoginFormSchema = yup.object({
  email: yup.string().email("Неверный E-mail").required("Введите E-mail"),
  password: yup
    .string()
    .min(6, "Длина пароля не менее 6 символов")
    .required("Введите пароль"),
});

export const RegistrationFormSchema = yup
  .object({
    fullName: yup.string().required("Введите Ф.И.О."),
  })
  .concat(LoginFormSchema);
