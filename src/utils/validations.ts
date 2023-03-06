import * as yup from "yup";

export const LoginFormSchema = yup.object({
  email: yup.string().email("Неверный E-mail").required("Введите E-mail"),
  password: yup
    .string()
    .min(6, "Длина пароля не менее 6 символов")
    .required("Введите пароль"),
});

export type FormDataLogin = yup.InferType<typeof LoginFormSchema>;

export const RegisterFormSchema = yup
  .object({
    fullName: yup
      .string()
      .min(6, "Поле должно содержать не менее 6 символов")
      .matches(/^([^0-9]*)$/, "Поле не может содержать цифры")
      .required("Введите Ф.И.О."),
    address: yup.string().required("Введите адрес доставки"),
    phoneNumber: yup
      .string()
      .required("Введите номер телефона")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\&\.]?[0-9]{3}[-\&\.]?[0-9]{4,6}$/,
        "Номер телефона введен неверно"
      ),
    legalForm: yup.string().required("Выберите организационно-правовую форму"),
    kindOfActivity: yup.string().required("Выберите вид деятельности"),
  })
  .concat(LoginFormSchema);

export type FormDataRegister = yup.InferType<typeof RegisterFormSchema>;
