import { AccountCircle } from "@mui/icons-material";
import {
  AccountBalanceWallet,
  ArrowCircleLeft,
  Article,
  AssignmentReturn,
  ContactPage,
  DownloadForOffline,
  ExitToApp,
  Favorite,
  House,
  Settings,
  ShoppingCart,
  SwitchAccount,
  ViewQuilt,
} from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import { StyledMenu } from "@/components/styledComponents";

import styles from "./UserMenu.module.scss";

export const menuItems = [
  {
    id: 0,
    href: "office",
    hrefSub: "",
    title: "Личный кабинет",
    descr: "",
    icon: <House />,
  },
  {
    id: 1,
    href: "/",
    hrefSub: "/",
    title: "Главная страница",
    descr: "Вернуться на главную страницу",
    icon: <ArrowCircleLeft />,
  },
  {
    id: 2,
    href: "office/balance",
    hrefSub: "balance",
    title: "Баланс",
    descr: "Информация о Вашем счете",
    icon: <AccountBalanceWallet />,
  },
  {
    id: 3,
    href: "office/cart",
    hrefSub: "cart",
    title: "Корзина",
    descr: "Список товаров в корзине",
    icon: <ShoppingCart />,
  },
  {
    id: 4,
    href: "office/favorites",
    hrefSub: "favorites",
    title: "Избранное",
    descr: "Список избранных товаров",
    icon: <Favorite />,
  },
  {
    id: 5,
    href: "office/orders",
    hrefSub: "orders",
    title: "Заказы",
    descr: "Информация о Ваших заказах",
    icon: <ViewQuilt />,
  },
  {
    id: 6,
    href: "office/upload-from-file",
    hrefSub: "upload-from-file",
    title: "Загрузка заказа из файла",
    descr: "Форматы: .xls, .docx, .pdf, .txt",
    icon: <DownloadForOffline />,
  },
  {
    id: 7,
    href: "office/returns",
    hrefSub: "returns",
    title: "Возвраты",
    descr: "Список оформленных возвратов",
    icon: <AssignmentReturn />,
  },
  {
    id: 8,
    href: "office/documents",
    hrefSub: "documents",
    title: "Документы",
    descr: "Шаблоны документов",
    icon: <Article />,
  },
  {
    id: 9,
    href: "office/statutory-documents",
    hrefSub: "statutory-documents",
    title: "Уставные документы",
    descr: "Загрузка уставных документов",
    icon: <ContactPage />,
  },
  {
    id: 10,
    href: "office/profile",
    hrefSub: "profile",
    title: "Профиль",
    descr: "Информация об учетной записи",
    icon: <SwitchAccount />,
  },
  {
    id: 11,
    href: "office/settings",
    hrefSub: "settings",
    title: "Настройки",
    descr: "Изменение учетной записи",
    icon: <Settings />,
  },
  {
    id: 12,
    href: "",
    hrefSub: "",
    title: "Выход",
    descr: "Выход из учетной записи",
    icon: <ExitToApp />,
  },
];

export const UserMenu: FC = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderedItems = menuItems.map((item) => {
    if (item.id !== 1) {
      return (
        <NavLink to={item.href} key={item.id}>
          <MenuItem className="gap-y-[5px]" onClick={handleClose}>
            {item.icon}
            {item.title}
          </MenuItem>
        </NavLink>
      );
    }
    return null;
  });

  return (
    <div>
      <button
        className="btn btn--menu"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircle />
        Меню
      </button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <p className={styles.title}>ООО "РОТА"</p>
        {renderedItems}
      </StyledMenu>
    </div>
  );
};
