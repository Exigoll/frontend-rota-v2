import { Button, TextField, Typography } from "@mui/material";
import React from "react";

import { IPropsRegister } from "@/common/types";

export const Register: React.FC<IPropsRegister> = ({
  setEmail,
  setPassword,
  setRepeatPassword,
  setFullName,
  setPhoneNumber,
  setAddress,
  setLegalForm,
  setKindOfActivity,
  navigate,
}: IPropsRegister): JSX.Element => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Poppins",
          textAlign: "center",
        }}
        variant="h3"
      >
        Регистрация
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          textAlign: "center",
          marginBottom: 3,
        }}
        variant="body1"
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Имя"
        placeholder="Введите Ваше имя"
        variant="outlined"
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Номер телефона"
        placeholder="Введите номер телефона"
        variant="outlined"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Адрес"
        placeholder="Введите адрес доставки"
        variant="outlined"
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Организационно-правовая форма"
        placeholder=""
        variant="outlined"
        onChange={(e) => setLegalForm(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Вид деятельности"
        placeholder=""
        variant="outlined"
        onChange={(e) => setKindOfActivity(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="email"
        label="E-mail"
        placeholder="Введите E-mail"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="password"
        label="Пароль"
        placeholder="Повторите пароль"
        variant="outlined"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <Button
        sx={{
          fontFamily: "Poppins",
          marginTop: 2,
          marginBottom: 2,
          width: "60%",
        }}
        variant="contained"
        type="submit"
      >
        Регистрация
      </Button>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
        }}
      >
        У Вас уже есть аккаунт?
        <span className="incitingText" onClick={() => navigate("/login")}>
          Авторизация
        </span>
      </Typography>
    </>
  );
};
