import { yupResolver } from "@hookform/resolvers/yup";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  TextField,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormInput } from "@/components/ui/FormInput";

import { RegistrationFormSchema } from "@/utils/validations";

import styles from "./Registration.module.scss";

const StyledSelect = styled(TextField)({
  "@media (max-width: 768px)": {
    width: "320px",
  },

  "@media (max-width: 490px)": {
    width: "280px",
  },
  "& .MuiOutlinedInput-root": {
    height: "40px",
  },
  "& .MuiInputLabel-root": {
    top: "-7px",

    "@media (max-width: 490px)": {
      fontSize: "14px",
    },
  },
  "& .MuiSelect-select": {
    "@media (max-width: 490px)": {
      fontSize: "14px",
    },
  },
});

const StyledFormControlLabel = styled(FormControlLabel)({
  height: "30px",

  "& .MuiFormLabel-root.MuiInputLabel-root": {
    top: "-7px",
  },

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

  const [selectOne, setSelectOne] = React.useState("");
  const [selectTwo, setSelectTwo] = React.useState("");

  const handleChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectOne(event.target.value as string);
  };

  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectTwo(event.target.value as string);
  };

  return (
    <section>
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

              <StyledSelect
                fullWidth
                value={selectOne}
                label="Организационно-правовая форма"
                select
                onChange={handleChangeOne}
              >
                <MenuItem value={"ООО"}>ООО</MenuItem>
                <MenuItem value={"ИП"}>ИП</MenuItem>
              </StyledSelect>
              <StyledSelect
                fullWidth
                value={selectTwo}
                label="Сфера деятельности"
                select
                onChange={handleChangeTwo}
              >
                <MenuItem value={1}>Интернет-магазин</MenuItem>
                <MenuItem value={2}>СТО</MenuItem>
                <MenuItem value={3}>Розничный магазин</MenuItem>
                <MenuItem value={4}>Прочее</MenuItem>
                <MenuItem value={5}>ИП</MenuItem>
              </StyledSelect>
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
    </section>
  );
};
