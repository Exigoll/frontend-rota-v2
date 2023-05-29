import { FC } from "react";

import { UserCart } from "@/components/UserCart";
import { UserMenu } from "@/components/UserMenu";

import styles from "./Office.module.scss";

export const Office: FC = (): JSX.Element => {
  return (
    <div className={styles.office}>
      <UserCart />
      <UserMenu />
    </div>
  );
};
