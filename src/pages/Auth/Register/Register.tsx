import { Checkbox, FormGroup, MenuItem, Typography } from "@mui/material";
import React from "react";

import AppLoadingButton from "@/components/LoadingButton";
import { StyledCheckbox, StyledInput } from "@/components/styledComponents";

import { IPropsRegister } from "@/common/types/auth";

import styles from "../AuthRoot.module.scss";

export const Register: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors, loading } = props;

  return (
    <>
      <div className={styles.registerWrapper}>
        <h2 className="titleSection">Регистрация</h2>
        <div className={styles.inputsContainer}>
          <StyledInput
            type="email"
            label="E-mail"
            placeholder="Введите E-mail"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? `${errors.email.message}` : ""}
            {...register("email")}
          />
          <StyledInput
            type="password"
            label="Пароль"
            placeholder="Введите пароль"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? `${errors.password.message}` : ""}
            {...register("password")}
          />
          <StyledInput
            type="password"
            label="Пароль"
            placeholder="Повторите пароль"
            variant="outlined"
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
            }
            {...register("confirmPassword")}
          />
          <StyledInput
            type="text"
            label="Ф.И.О. / название организации"
            placeholder="Введите Ф.И.О. / название организации"
            variant="outlined"
            error={!!errors.fullName}
            helperText={errors.fullName ? `${errors.fullName.message}` : ""}
            {...register("fullName")}
          />
          <StyledInput
            type="text"
            label="Адрес доставки"
            placeholder="Введите адрес доставки"
            variant="outlined"
            error={!!errors.address}
            helperText={errors.address ? `${errors.address.message}` : ""}
            {...register("address")}
          />
          <StyledInput
            type="text"
            label="Номер телефона"
            placeholder="Введите номер телефона"
            variant="outlined"
            error={!!errors.phoneNumber}
            helperText={
              errors.phoneNumber ? `${errors.phoneNumber.message}` : ""
            }
            {...register("phoneNumber")}
          />
          <StyledInput
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
          </StyledInput>
          <StyledInput
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
          </StyledInput>
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
        <div className={styles.buttonsContainer}>
          <AppLoadingButton variant="contained" type="submit" loading={loading}>
            Регистрация
          </AppLoadingButton>
          <Typography variant="body1">
            У Вас уже есть аккаунт?
            <span
              className={styles.incitingText}
              onClick={() => navigate("/login")}
            >
              Авторизация
            </span>
          </Typography>
        </div>
      </div>
    </>
  );
};
