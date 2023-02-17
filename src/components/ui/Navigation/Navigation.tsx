import { useState } from "react";
import { NavLink } from "react-router-dom";

import { links } from "@/store/navigationItems";

import { DrawerNavigation } from "./DrawerNavigation";
import styles from "./Navigation.module.scss";

export const Navigation: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className={styles.menu}>
          {links.map(({ ...links }) => (
            <li key={links.id}>
              <NavLink className={styles.link} to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <DrawerNavigation />
    </div>
  );
};
