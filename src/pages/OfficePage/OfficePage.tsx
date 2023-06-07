import { FC } from "react";
import { Link } from "react-router-dom";

import { menuItems } from "@/components/UserMenu";

import styles from "./OfficePage.module.scss";

const renderedItems = menuItems.map((item) => {
  if (item.id !== 0) {
    return (
      <li key={item.id} className={styles.menuitem}>
        <Link to={item.hrefSub} className={styles.menuLink}>
          {item.icon}
          <div className={styles.info}>
            <h3>{item.title}</h3>
            <p>{item.descr}</p>
          </div>
        </Link>
      </li>
    );
  }
  return null;
});

export const OfficePage: FC = (): JSX.Element => {
  return (
    <section>
      <div className="container">
        <div className={styles.officeWrapper}>
          <div className={styles.userInfo}></div>
          <ul className={styles.menuList}>{renderedItems}</ul>
        </div>
      </div>
    </section>
  );
};
