import { FC } from "react";

import { Navbar } from "@/components/ui/Navbar";
import { Search } from "@/components/ui/Search";
import { UserMenu } from "@/components/ui/UserMenu/UserMenu";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Search />
      <UserMenu />
    </header>
  );
};
