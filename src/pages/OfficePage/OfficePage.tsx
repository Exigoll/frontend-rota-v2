import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./OfficePage.module.scss";

export const OfficePage: FC = (): JSX.Element => {
  return (
    <div>
      <h1>OfficePage</h1>
      <Link to="cart">Корзина</Link>
    </div>
  );
};
