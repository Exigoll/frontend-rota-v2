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

import { StyledMenu } from "@/components/styledComponents";

import styles from "./UserMenu.module.scss";

const menuItems = [
  { title: "Личный кабинет", icon: <House /> },
  { title: "Баланс", icon: <AccountBalanceWallet /> },
  { title: "Корзина", icon: <ShoppingCart /> },
  { title: "Заказы", icon: <ViewQuilt /> },
  { title: "Загрузка заказа из файла", icon: <DownloadForOffline /> },
  { title: "Возвраты", icon: <AssignmentReturn /> },
  { title: "Документы", icon: <Article /> },
  { title: "Уставные документы", icon: <ContactPage /> },
  { title: "Профиль", icon: <SwitchAccount /> },
  { title: "Настройки", icon: <Settings /> },
  { title: "Выход", icon: <ExitToApp /> },
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
          <MenuItem
            key={item.title}
            className="gap-y-[5px]"
            onClick={handleClose}
          >
            {item.icon}
            {item.title}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};
