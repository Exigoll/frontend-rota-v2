import { AccountCircle } from "@mui/icons-material";
import {
  AccountBalanceWallet,
  Article,
  AssignmentReturn,
  ContactPage,
  DownloadForOffline,
  ExitToApp,
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

const menuItems = [
  { id: 0, patch: "office", title: "Личный кабинет", icon: <House /> },
  {
    id: 1,
    patch: "office/balance",
    title: "Баланс",
    icon: <AccountBalanceWallet />,
  },
  { id: 2, patch: "office/cart", title: "Корзина", icon: <ShoppingCart /> },
  { id: 3, patch: "office/orders", title: "Заказы", icon: <ViewQuilt /> },
  {
    id: 4,
    patch: "office/upload-from-file",
    title: "Загрузка заказа из файла",
    icon: <DownloadForOffline />,
  },
  {
    id: 5,
    patch: "office/returns",
    title: "Возвраты",
    icon: <AssignmentReturn />,
  },
  { id: 6, patch: "office/documents", title: "Документы", icon: <Article /> },
  {
    id: 7,
    patch: "office/statutory-documents",
    title: "Уставные документы",
    icon: <ContactPage />,
  },
  { id: 8, patch: "office/profile", title: "Профиль", icon: <SwitchAccount /> },
  { id: 9, patch: "office/settings", title: "Настройки", icon: <Settings /> },
  { id: 10, patch: "", title: "Выход", icon: <ExitToApp /> },
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
        {menuItems.map((item) => (
          <NavLink to={item.patch} key={item.id}>
            <MenuItem className="gap-y-[5px]" onClick={handleClose}>
              {item.icon}
              {item.title}
            </MenuItem>
          </NavLink>
        ))}
      </StyledMenu>
    </div>
  );
};
