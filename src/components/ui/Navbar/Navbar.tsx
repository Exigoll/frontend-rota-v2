import { MenuOpen } from "@mui/icons-material";
import { Drawer, styled } from "@mui/material";
import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { IconLogo } from "@/components/icons";
import { Contacts } from "@/components/ui/Contacts";

import { links } from "@/store/navigationItems";

import styles from "./Navbar.module.scss";

const StylesDrawer = styled(Drawer)({
  top: "70px",

  "@media (max-width: 768px)": {
    top: "112px",
  },

  "& .MuiDrawer-paper": {
    top: "70px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    rowGap: "28px",
    width: "340px",
    height: "100%",
    backgroundColor: "#1b2f52",
    borderRadius: "0",
    boxShadow: "none",

    "@media (max-width: 768px)": {
      top: "112px",
    },
  },
  "& .MuiModal-backdrop": {
    top: "70px",

    "@media (max-width: 768px)": {
      top: "112px",
    },
  },
});

const StyledMenuOpen = styled(MenuOpen)({
  width: "40px",
  height: "40px",
  fill: "white",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",

  "@media (min-width: 769px)": {
    "&:hover": {
      fill: "rgb(231 124 88)",
    },
  },

  "@media (max-width: 490px)": {
    width: "30px",
    height: "30px",
  },
});

export const Navbar: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-x-[5px]">
        <StyledMenuOpen
          className={styles.icon}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        />
        <Link to="/">
          <IconLogo
            className={styles.logo}
            onClick={() => setIsDrawerOpen(false)}
          />
        </Link>
      </div>
      <StylesDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <nav className={styles.navbar}>
          <ul className={styles.menu}>
            {links.map(({ ...links }) => (
              <li key={links.id}>
                <NavLink
                  onClick={() => setIsDrawerOpen(false)}
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : styles.link
                  }
                  to={links.path}
                >
                  {links.icon}
                  {links.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Contacts />
      </StylesDrawer>
    </>
  );
};
