import { yupResolver } from "@hookform/resolvers/yup";
import { DialogContent } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import {
  StyledButtonOffice,
  StyledPopupOffice,
} from "@/components/styledComponents";
import { FormInput } from "@/components/ui/FormInput";

import { LoginFormSchema } from "@/utils/validations";

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
  const form = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: "onBlur",
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <StyledButtonOffice onClick={openAuthDialog}>Войти</StyledButtonOffice>
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
      </StyledPopupOffice>
    </>
  );
};
