import { FC } from "react";

import { Office } from "@/components/Office";
import { Navbar } from "@/components/ui/Navbar";
import { Search } from "@/components/ui/Search";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Search />
      <Office />
    </header>
  );
};
