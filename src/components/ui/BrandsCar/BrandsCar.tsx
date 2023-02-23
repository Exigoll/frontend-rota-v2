import React from "react";
import { Link } from "react-router-dom";

import { brandsCarItem } from "@/store/brandsCarItem";

import styles from "./BrandsCar.module.scss";

export const BrandsCar: React.FC = () => {
  return (
    <section className="section container">
      <ul className={styles.categoryContainer}>
        {brandsCarItem.map((obj) => (
          <li>
            <Link to={obj.path} key={obj.id} className={styles.link}>
              {obj.icon}
              <h3>{obj.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
