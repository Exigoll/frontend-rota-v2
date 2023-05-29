import { Checkbox, FormGroup, MenuItem, TextField } from "@mui/material";
import React from "react";

import StyledLoadingButton from "@/components/LoadingButton";
import { StyledCheckbox } from "@/components/styledComponents";

import { IPropsRegister } from "@/common/types/auth";

import styles from "../AuthRoot.module.scss";

export const Register: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors, loading } = props;

  return (
    <>
      <div className={styles.formWrapper}>
        <h2 className="titlePage m-0">Регистрация</h2>
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
            type="text"
            label="Имя пользователя"
            placeholder="Введите имя пользователя"
            variant="outlined"
            error={!!errors.userName}
            helperText={errors.userName ? `${errors.userName.message}` : ""}
            {...register("userName")}
          />
          <TextField
            type="text"
            label="Ф.И.О."
            placeholder="Введите Ф.И.О."
            variant="outlined"
            error={!!errors.fullName}
            helperText={errors.fullName ? `${errors.fullName.message}` : ""}
            {...register("fullName")}
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
          <TextField
            type="password"
            label="Повторите пароль"
            placeholder="Повторите пароль"
            variant="outlined"
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
            }
            {...register("confirmPassword")}
          />
          <TextField
            type="text"
            label="Адрес доставки"
            placeholder="Введите адрес доставки"
            variant="outlined"
            error={!!errors.address}
            helperText={errors.address ? `${errors.address.message}` : ""}
            {...register("address")}
          />
          <TextField
            type="tel"
            label="Номер телефона"
            placeholder="Введите номер телефона"
            variant="outlined"
            error={!!errors.phoneNumber}
            helperText={
              errors.phoneNumber ? `${errors.phoneNumber.message}` : ""
            }
            {...register("phoneNumber")}
          />
          <TextField
            type="text"
            label="Организационно-правовая форма"
            placeholder="Выберите организационно-правовую форму"
            variant="outlined"
            select
            defaultValue=""
            error={!!errors.legalForm}
            helperText={errors.legalForm ? `${errors.legalForm.message}` : ""}
            {...register("legalForm")}
          >
            <MenuItem value="ООО">ООО</MenuItem>
            <MenuItem value="ИП">ИП</MenuItem>
          </TextField>
          <TextField
            type="text"
            label="Вид деятельности"
            placeholder="Выберите вид деятельности"
            variant="outlined"
            select
            defaultValue=""
            error={!!errors.kindOfActivity}
            helperText={
              errors.kindOfActivity ? `${errors.kindOfActivity.message}` : ""
            }
            {...register("kindOfActivity")}
          >
            <MenuItem value="Интернет-магазин">Интернет-магазин</MenuItem>
            <MenuItem value="СТО">СТО</MenuItem>
            <MenuItem value="Розничный магазин">Розничный магазин</MenuItem>
            <MenuItem value="ИДругоеП">Другое</MenuItem>
          </TextField>
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
        <StyledLoadingButton
          variant="contained"
          type="submit"
          loading={loading}
        >
          Регистрация
        </StyledLoadingButton>
        <div className={styles.authLocation}>
          <p> У Вас уже есть аккаунт?</p>
          <span onClick={() => navigate("/login")}>Вход</span>
        </div>
      </div>
    </>
  );
};
