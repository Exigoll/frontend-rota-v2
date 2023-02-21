import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { IconLogo } from "@/components/icons";
import { StyledMenuOpen, StylesDrawer } from "@/components/styledComponents";
import { Contacts } from "@/components/ui/Contacts";

import { links } from "@/store/navigationItems";

import styles from "./Navbar.module.scss";

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
