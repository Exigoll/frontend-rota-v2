import { FC } from "react";

import { Navbar } from "@/components/Navbar";
import { Office } from "@/components/Office";
import { Search } from "@/components/Search";

import { NewSearch } from "../NewSearch";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      {/* <Search /> */}
      <NewSearch />
      <Office />
    </header>
  );
};
