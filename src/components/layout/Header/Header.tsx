import { HeaderBottom } from "@/components/layout/Header/HeaderBottom";
import { HeaderTop } from "@/components/layout/Header/HeaderTop";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};
