import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Checkbox, FormGroup, MenuItem } from "@mui/material";
import { setCookie } from "nookies";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch } from "redux/hooks";
import { setUserData } from "redux/slices/user";

import { StyledCheckbox } from "@/components/styledComponents";
import { FormInput } from "@/components/ui/FormInput";

import { selectValue } from "@/store/selectValue";

import { UserApi } from "@/utils/api";
import { CreateUserDto } from "@/utils/api/types";
import { FormDataRegister, RegisterFormSchema } from "@/utils/validations";

import styles from "./Registration.module.scss";

export const RegistrationPage: FC = () => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm<FormDataRegister>({
    resolver: yupResolver(RegisterFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      console.log(data);
      setCookie(null, "token", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      dispatch(setUserData(data));
      setErrorMessage("");
    } catch (err: any) {
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <section>
      <div className={styles.registrationWrapper}>
        <h2 className="titleSection">Регистрация</h2>
        <FormProvider {...form}>
          <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
            <div className={styles.inputsContainer}>
              <FormInput
                name="legalForm"
                label="Организационно-правовая форма"
                type="text"
                defaultValue=""
                select
              >
                {selectValue[0].map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </FormInput>
              <FormInput
                name="kindOfActivity"
                label="Вид деятельности"
                type="text"
                defaultValue=""
                select
              >
                {selectValue[1].map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </FormInput>
              <FormInput
                name="fullName"
                label="Ф.И.О. / название организации"
                type="text"
              />
              <FormInput name="email" label="E-mail" type="email" />
              <FormInput name="phoneNumber" label="Номер телефона" type="tel" />
              <FormInput name="password" label="Пароль" type="password" />
              <FormInput
                name="passwordConfirm"
                label="Повторите пароль"
                type="password"
              />
              <FormInput name="address" label="Адрес доставки" type="text" />
            </div>
            <div className={styles.checkboxContainer}>
              <FormGroup>
                <StyledCheckbox
                  control={<Checkbox required />}
                  label="Согласие на обработку персональных данных"
                />
                <StyledCheckbox
                  control={<Checkbox required />}
                  label="Подтверждение регистрации"
                />
              </FormGroup>
            </div>
            {errorMessage && (
              <Alert className="w-full py-0" severity="error">
                {errorMessage}
              </Alert>
            )}
            <div className="htmlForm-registration__buttons buttons-registration">
              <button className="btn btn--peach" type="submit">
                Регистрация
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};
