import { Drawer, styled } from "@mui/material";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import { IconMenu } from "@/components/icons";

import { links } from "@/store/navigationItems";

import styles from "./Navigation.module.scss";

const StylesDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "130px",
    width: "300px",
    height: "100%",
    backgroundColor: "#1b2f52",
    borderRadius: "10px 0 0 10px",
  },
});

export const DrawerNavigation: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {isDrawerOpen ? (
        ""
      ) : (
        <IconMenu
          className={styles.icon}
          onClick={() => setIsDrawerOpen(true)}
        />
      )}
      <StylesDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <nav>
          <ul className={styles.menuMobile}>
            {links.map(({ ...links }) => (
              <li key={links.id}>
                <NavLink className={styles.link} to={links.path}>
                  {links.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </StylesDrawer>
    </>
  );
};
