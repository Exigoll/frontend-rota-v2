import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Dialog, DialogContent, styled } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { FormInput } from "@/components/ui/FormInput";

import { LoginFormSchema } from "@/utils/validations";

import styles from "./Office.module.scss";

interface IOffice {
  onClose: () => void;
  visible: boolean;
  openAuthDialog: () => void;
}

const StyledButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "10px",
  width: "90px",
  height: "40px",
  padding: "0",
  borderRadius: "10px",
  backgroundColor: "#2e3536",
  color: "#fff",
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "700",
  textTransform: "capitalize",
  transition: "transform 0.1s, background-color 0.3s ease-in-out",
  cursor: "pointer",
  willChange: "transform",

  "@media (min-width: 769px)": {
    "&:hover": {
      backgroundColor: "#1b1f20",
    },
  },

  "@media (max-width: 768px)": {
    fontSize: "14px",
    lineHeight: "14px",
  },

  "&:active": {
    transform: "scale(0.99)",
  },
});

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-container": {
    marginRight: "8px",
  },
  "& .MuiDialog-paper": {
    borderRadius: "20px",
    maxWidth: "100%",
    margin: "0 auto",
  },
});

export const Office: React.FC<IOffice> = ({
  onClose,
  visible,
  openAuthDialog,
}) => {
  const form = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <StyledButton onClick={openAuthDialog}>Войти</StyledButton>
      <StyledDialog open={visible} onClose={onClose}>
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
                  <FormInput name="email" label="E-mail" />
                  <FormInput name="password" label="Пароль" />
                </div>
                <div className={styles.buttonsContainer}>
                  <button onClick={onClose} className="btn btn--peach">
                    <Link to="./registration">Регистрация</Link>
                  </button>
                  <button
                    className="btn btn--blue"
                    type="submit"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
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
      </StyledDialog>
    </>
  );
};
