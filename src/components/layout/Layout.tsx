import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout: FC = (): JSX.Element => {
  const location = useLocation();

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
