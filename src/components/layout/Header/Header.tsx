import { FC, useState } from "react";

import { Navbar } from "@/components/ui/Navbar";
import { Office } from "@/components/ui/Office";
import { Search } from "@/components/ui/Search";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  const [authVisible, setAuthVisible] = useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <header className={styles.header}>
      <Navbar />
      <Search />
      <Office
        onClose={closeAuthDialog}
        visible={authVisible}
        openAuthDialog={openAuthDialog}
      />
    </header>
  );
};
