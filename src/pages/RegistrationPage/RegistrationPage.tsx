import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, FormGroup, MenuItem } from "@mui/material";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { StyledCheckbox } from "@/components/styledComponents";
import { FormInput } from "@/components/ui/FormInput";

import { RegistrationFormSchema } from "@/utils/validations";

import styles from "./Registration.module.scss";

const selectValue = [
  [
    {
      value: "ООО",
      label: "ООО",
    },
    {
      value: "ИП",
      label: "ИП",
    },
  ],
  [
    {
      value: "Интернет-магазин",
      label: "Интернет-магазин",
    },
    {
      value: "СТО",
      label: "СТО",
    },
    {
      value: "Розничный магазин",
      label: "Розничный магазин",
    },
    {
      value: "Прочее",
      label: "Прочее",
    },
  ],
];

export const RegistrationPage: FC = () => {
  const form = useForm({
    resolver: yupResolver(RegistrationFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <section>
      <div className={styles.registrationWrapper}>
        <h2 className="titleSection">Регистрация</h2>
        <FormProvider {...form}>
          <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
            <div className={styles.inputsContainer}>
              <FormInput name="email" label="E-mail" type="email" />
              <FormInput
                name="login"
                label="Имя пользователя (логин)"
                type="text"
              />
              <FormInput name="fullName" label="Ф.И.О." type="text" />
              <FormInput name="phoneNumber" label="Номер телефона" type="tel" />
              <FormInput
                name="additionalPhoneNumber"
                label="Дополнительный номер телефона"
                type="tel"
              />
              <FormInput
                name="legalForm"
                label="Организационно-правовая форма"
                type="text"
                defaultValue=""
                select
              >
                {selectValue[0].map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
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
                    {option.label}
                  </MenuItem>
                ))}
              </FormInput>
              <FormInput name="password" label="Пароль" type="password" />
              <FormInput
                name="password"
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
            <div className="htmlForm-registration__buttons buttons-registration">
              <button
                className="btn btn--peach"
                type="submit"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                Регистрация
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};
