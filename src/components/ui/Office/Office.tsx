import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, DialogContent } from "@mui/material";
import { setCookie } from "nookies";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import {
  StyledButtonOffice,
  StyledPopupOffice,
} from "@/components/styledComponents";
import { FormInput } from "@/components/ui/FormInput";

import { UserApi } from "@/utils/api";
import { LoginDto } from "@/utils/api/types";
import { FormDataLogin, LoginFormSchema } from "@/utils/validations";

import styles from "./Office.module.scss";

interface IOffice {
  onClose: () => void;
  visible: boolean;
  openAuthDialog: () => void;
}

export const Office: React.FC<IOffice> = ({
  onClose,
  visible,
  openAuthDialog,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormDataLogin>({
    resolver: yupResolver(LoginFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      console.log(data);
      setCookie(null, "token", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage("");
    } catch (err: any) {
      console.warn("Register error", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className={styles.officeWrapper}>
        <StyledButtonOffice onClick={openAuthDialog}>Войти</StyledButtonOffice>
      </div>
      <StyledPopupOffice open={visible} onClose={onClose}>
        <DialogContent sx={{ padding: 0 }}>
          <div className={styles.modal}>
            <h3 className="titleSection">Авторизация</h3>
            <FormProvider {...form}>
              <form
                className={styles.modalForm}
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
              >
                <div className={styles.inputsContainer}>
                  <FormInput name="email" label="E-mail" type="email" />
                  <FormInput name="password" label="Пароль" type="password" />
                  {errorMessage && (
                    <Alert className="w-full py-0" severity="error">
                      {errorMessage}
                    </Alert>
                  )}
                </div>
                <div className={styles.buttonsContainer}>
                  <button onClick={onClose} className="btn btn--peach">
                    <Link to="./registration">Регистрация</Link>
                  </button>
                  <button className="btn btn--blue" type="submit">
                    Вход
                  </button>
                </div>
              </form>
            </FormProvider>
            <Link onClick={onClose} to="./recovery" className={styles.recovery}>
              Восстановить доступ к аккаунту
            </Link>
          </div>
        </DialogContent>
      </StyledPopupOffice>
    </>
  );
};
