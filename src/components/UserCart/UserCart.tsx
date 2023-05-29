import { ShoppingCart } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./UserCart.module.scss";

export const UserCart: FC = (): JSX.Element => {
  return (
    <Link to="office/cart" className={styles.cart}>
      <div className={styles.icon}>
        <ShoppingCart />
        <span>100</span>
      </div>
      <div className={styles.info}>
        <p>В корзине:</p>
        <span>100 ед. на 1 000 000,55 руб.</span>
      </div>
    </Link>
  );
};
