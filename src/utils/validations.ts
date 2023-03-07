import * as yup from "yup";

export type FormDataLogin = yup.InferType<typeof LoginFormSchema>;

export type FormDataRegister = yup.InferType<typeof RegisterFormSchema>;

export const LoginFormSchema = yup.object({
  email: yup.string().email("Неверный E-mail").required("Введите E-mail"),
  password: yup
    .string()
    .min(6, "Длина пароля не менее 6 символов")
    .max(18, "Длина пароля не более 18 символов")
    .required("Введите пароль"),
});

export const RegisterFormSchema = yup
  .object({
    passwordConfirm: yup
      .string()
      .min(6, "Длина пароля не менее 6 символов")
      .max(18, "Длина пароля не более 18 символов")
      .required("Введите пароль")
      .oneOf([yup.ref("password")], "Пароли не совпадают"),
    fullName: yup
      .string()
      .min(6, "Поле должно содержать не менее 6 символов")
      .required("Введите Ф.И.О. / название организации"),
    address: yup.string().required("Введите адрес доставки"),
    phoneNumber: yup
      .string()
      .required("Введите номер телефона")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\&\.]?[0-9]{3}[-\&\.]?[0-9]{4,6}$/,
        "Номер телефона введен неверно (пример: 89021234567)"
      ),
    legalForm: yup.string().required("Выберите организационно-правовую форму"),
    kindOfActivity: yup.string().required("Выберите вид деятельности"),
  })
  .concat(LoginFormSchema);
