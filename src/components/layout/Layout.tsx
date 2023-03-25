import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

/* 
Deleted?
import { ILayout } from "@/common/types/layout";
*/
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
