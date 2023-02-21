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
    fullName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Поле не может содержать цифры")
      .required("Введите Ф.И.О."),
    login: yup.string().required("Введите логин"),
    address: yup.string().required("Введите адрес доставки"),
    phoneNumber: yup
      .string()
      .required("Введите номер телефона")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\&\.]?[0-9]{3}[-\&\.]?[0-9]{4,6}$/,
        "Номер телефона введен неверно"
      ),
    additionalPhoneNumber: yup
      .string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\&\.]?[0-9]{3}[-\&\.]?[0-9]{4,6}$/,
        "Номер телефона введен неверно"
      )
      .notRequired(),
    legalForm: yup.string().required("Выберите организационно-правовую форму"),
    kindOfActivity: yup.string().required("Выберите вид деятельности"),
  })
  .concat(LoginFormSchema);
