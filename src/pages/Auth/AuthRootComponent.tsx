import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AppErrors } from "@/common/errors";

import { login } from "@/store/slice/auth";

import { instance } from "@/utils/axios";
import { useAppDispatch } from "@/utils/hooks";

import { Login } from "./Login";
import { Register } from "./Register";
import "./style.scss";

export const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [legalForm, setLegalForm] = React.useState("");
  const [kindOfActivity, setKindOfActivity] = React.useState("");
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === "/login") {
      try {
        const userData = {
          email,
          password,
        };
        const user = await instance.post("/auth/login", userData);
        await dispatch(login(user.data));
        navigate("/");
      } catch (e) {
        return e;
      }
    } else {
      if (password === repeatPassword) {
        try {
          const userData = {
            email,
            password,
            fullName,
            phoneNumber,
            address,
            legalForm,
            kindOfActivity,
          };
          const newUser = await instance.post("/auth/register", userData);
          await dispatch(login(newUser.data));
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
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={`5px 5px 10px #ccc`}
        >
          {location.pathname === "/login" ? (
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              navigate={navigate}
            />
          ) : location.pathname === "/register" ? (
            <Register
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFullName={setFullName}
              setPhoneNumber={setPhoneNumber}
              setAddress={setAddress}
              setLegalForm={setLegalForm}
              setKindOfActivity={setKindOfActivity}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};
