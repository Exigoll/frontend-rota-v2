import { FC } from "react";

import { Logo } from "../Logo";

import styles from "./Header.module.scss";

export const LoginHeader: FC = () => {
  return (
    <div className={styles.header}>
      <Logo className={`${styles.logo} ml-5`} />
    </div>
  );
};
