import { MailOutline, Phone, Room } from "@mui/icons-material";
import {
  DonutSmall,
  Home,
  ImportContacts,
  LiveHelp,
  LocalShipping,
  PeopleAlt,
  Sync,
  WorkspacePremium,
} from "@mui/icons-material";
import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "@/components/Logo";
import { StyledMenuOpen, StylesDrawer } from "@/components/styledComponents";

import styles from "./Navbar.module.scss";

const navLinks = [
  { id: 0, title: "Главная", path: "/", icon: <Home /> },
  { id: 1, title: "О компании", path: "/about", icon: <ImportContacts /> },
  {
    id: 2,
    title: "Поставщикам",
    path: "/provider",
    icon: <DonutSmall />,
  },
  {
    id: 3,
    title: "Оптовым покупателям",
    path: "/wholesale",
    icon: <PeopleAlt />,
  },
  { id: 4, title: "Контакты", path: "/contacts", icon: <LiveHelp /> },
];

const serviceLinks = [
  { id: 0, title: "Доставка", path: "/delivery", icon: <LocalShipping /> },
  {
    id: 1,
    title: "Гарантия и возврат",
    path: "/warrantyReturn",
    icon: <WorkspacePremium />,
  },
  {
    id: 2,
    title: "ЭДО",
    path: "/documentFlow",
    icon: <Sync />,
  },
];

export const Navbar: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <StyledMenuOpen
          className={styles.icon}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        />
        <Link to="/">
          <Logo
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
            {navLinks.map(({ ...navLinks }) => (
              <li key={navLinks.id}>
                <NavLink
                  onClick={() => setIsDrawerOpen(false)}
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : styles.link
                  }
                  to={navLinks.path}
                >
                  {navLinks.icon}
                  {navLinks.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={`${styles.menu} ${styles.menuService}`}>
            {serviceLinks.map(({ ...serviceLinks }) => (
              <li key={serviceLinks.id}>
                <NavLink
                  onClick={() => setIsDrawerOpen(false)}
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : styles.link
                  }
                  to={serviceLinks.path}
                >
                  {serviceLinks.icon}
                  {serviceLinks.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.contacts}>
            <Link className={styles.contactLink} to="tel:+79163934369">
              <Phone />
              8-916-393-43-69
            </Link>
            <Link className={styles.contactLink} to="mailto:info@rotazap.ru">
              <MailOutline />
              info@rotazap.ru
            </Link>
            <Link
              className={styles.contactLink}
              to="https://yandex.ru/maps/-/CCUG56vKPD"
              target="__blank"
            >
              <Room />
              141068, М.О. г. Королёв, <br /> мкр. Текстильщик, ул. Южная, д.3
            </Link>
          </div>
        </nav>
      </StylesDrawer>
    </>
  );
};
