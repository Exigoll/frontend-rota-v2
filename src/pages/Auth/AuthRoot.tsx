import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header, LoginHeader } from "@/components/Header";

import { AppErrors } from "@/common/errors";

import { loginUser, registerUser } from "@/store/thunks";

import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { LoginSchema, RegisterSchema } from "@/utils/validations";

import styles from "./AuthRoot.module.scss";
import { Login } from "./Login";
import { Register } from "./Register";

export const AuthRoot: FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.isLoading);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      location.pathname === "/login" ? LoginSchema : RegisterSchema
    ),
    mode: "onBlur",
  });

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === "/login") {
      try {
        await dispatch(loginUser(data));
        navigate("/");
      } catch (e) {
        return e;
      }
    } else {
      if (data.password === data.confirmPassword) {
        try {
          const userData = {
            email: data.email,
            password: data.password,
            fullName: data.fullName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            legalForm: data.legalForm,
            kindOfActivity: data.kindOfActivity,
          };
          await dispatch(registerUser(userData));
          navigate("/");
        } catch (e) {
          return e;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className={styles.wrapperRoot}>
      <LoginHeader />
      <div className={styles.root}>
        <form
          className={styles.formAuth}
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className={styles.wrapper}>
            {location.pathname === "/login" ? (
              <Login
                navigate={navigate}
                register={register}
                errors={errors}
                loading={loading}
              />
            ) : location.pathname === "/register" ? (
              <Register
                navigate={navigate}
                register={register}
                errors={errors}
                loading={loading}
              />
            ) : null}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
