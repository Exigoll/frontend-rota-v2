//import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";

import { IconLogo } from "@/components/icons";
import { Navigation } from "@/components/ui/Navigation";

import styles from "./Header.module.scss";

export const HeaderTop: React.FC = () => {
  return (
    <div className={styles.headerTop}>
      <div className={`${styles.headerTopWrapper} container`}>
        <IconLogo className={styles.logo} />
        <Navigation />
      </div>
    </div>
  );
};
