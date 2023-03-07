import { AccountCircle } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { useState } from "react";

import { StyledMenu } from "@/components/styledComponents";

import { menuItems } from "@/store/menuItems";

import styles from "./UserMenu.module.scss";

export const UserMenu: React.FC = () => {
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
