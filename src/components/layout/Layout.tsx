import { FC, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { getPublicUser } from "@/store/thunks/auth";

import { useAppDispatch } from "@/utils/hooks";

export const Layout: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getPublicUser());
  }, [dispatch]);

  return location.pathname === "/login" || location.pathname === "/register" ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
