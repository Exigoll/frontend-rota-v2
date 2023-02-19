import { yupResolver } from "@hookform/resolvers/yup";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormInput } from "@/components/ui/FormInput";

import { RegistrationFormSchema } from "@/utils/validations";

import styles from "./Registration.module.scss";

const StyledSelect = styled(Select)({
  width: "360px",
  height: "40px",
  borderRadius: "4px",
});

const StyledFormControlLabel = styled(FormControlLabel)({
  height: "30px",

  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
  },
});

export const RegistrationPage: React.FC = () => {
  const form = useForm({
    resolver: yupResolver(RegistrationFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <section>
      <div className="container">
        <div className={styles.registrationWrapper}>
          <h2 className="titleSection">Регистрация</h2>
          <FormProvider {...form}>
            <form className={styles.form}>
              <div className={styles.inputsContainer}>
                <FormInput name="E-mail" label="E-mail" />
                <FormInput
                  name="Имя пользователя (логин)"
                  label="Имя пользователя (логин)"
                />
                <FormInput name="Ф.И.О." label="Ф.И.О." />
                <FormInput name="Номер телефона" label="Номер телефона" />
                <FormInput
                  name="Дополнительный номер телефона"
                  label="Дополнительный номер телефона"
                />
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Организационно-правовая форма
                  </InputLabel>
                  <StyledSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label={"Организационно-правовая форма"}
                    value={1}
                  >
                    <MenuItem value={1}>ООО</MenuItem>
                    <MenuItem value={2}>ИП</MenuItem>
                  </StyledSelect>
                </FormControl>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Сфера деятельности
                  </InputLabel>
                  <StyledSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label={"Сфера деятельности"}
                    value={1}
                  >
                    <MenuItem value={1}>Интернет-магазин</MenuItem>
                    <MenuItem value={2}>СТО</MenuItem>
                    <MenuItem value={3}>Розничный магазин</MenuItem>
                    <MenuItem value={4}>Прочее</MenuItem>
                    <MenuItem value={5}>ИП</MenuItem>
                  </StyledSelect>
                </FormControl>
                <FormInput name="Пароль" label="Пароль" />
                <FormInput name="Повторите пароль" label="Повторите пароль" />
                <FormInput name="Адрес доставки" label="Адрес доставки" />
              </div>
              <div className={styles.checkboxContainer}>
                <FormGroup>
                  <StyledFormControlLabel
                    control={<Checkbox required />}
                    label="Согласие на обработку персональных данных"
                  />
                  <StyledFormControlLabel
                    control={<Checkbox required />}
                    label="Подтверждение регистрации"
                  />
                </FormGroup>
              </div>
              <div className="htmlForm-registration__buttons buttons-registration">
                <button className="btn btn--peach" type="submit">
                  Регистрация
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};
