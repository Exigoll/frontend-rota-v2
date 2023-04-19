import { TextField, Typography } from "@mui/material";
import React from "react";

import StyledLoadingButton from "@/components/LoadingButton";

import { IPropsLogin } from "@/common/types/auth";

import styles from "../AuthRoot.module.scss";

export const Login: React.FC<IPropsLogin> = (
  props: IPropsLogin
): JSX.Element => {
  const { navigate, register, errors, loading } = props;

  return (
    <>
      <div className={styles.formWrapper}>
        <h3 className={`titlePage m-0`}>Авторизация</h3>
        <div className={styles.inputWrapper}>
          <TextField
            type="email"
            label="E-mail"
            placeholder="Введите E-mail"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? `${errors.email.message}` : ""}
            {...register("email")}
          />
          <TextField
            type="password"
            label="Пароль"
            placeholder="Введите пароль"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? `${errors.password.message}` : ""}
            {...register("password")}
          />
        </div>
        <StyledLoadingButton
          type="submit"
          variant="contained"
          loading={loading}
        >
          Войти
        </StyledLoadingButton>
        <div className={styles.authLocation}>
          <p>У Вас нет аккаунта?</p>
          <span onClick={() => navigate("/register")}>Регистрация</span>
        </div>
      </div>
    </>
  );
};
