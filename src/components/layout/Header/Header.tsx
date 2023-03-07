import { FC, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectUserData } from "redux/slices/user";

import { Navbar } from "@/components/ui/Navbar";
import { Office } from "@/components/ui/Office";
import { Search } from "@/components/ui/Search";
import { UserMenu } from "@/components/ui/UserMenu/UserMenu";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  const userData = useAppSelector(selectUserData);
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
      {userData ? (
        <UserMenu />
      ) : (
        <Office
          onClose={closeAuthDialog}
          visible={authVisible}
          openAuthDialog={openAuthDialog}
        />
      )}
    </header>
  );
};
