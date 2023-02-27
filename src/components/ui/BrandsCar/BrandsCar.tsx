import React from "react";
import { Link } from "react-router-dom";

import { brandsCarItem } from "@/store/brandsCarItem";

import styles from "./BrandsCar.module.scss";

export const BrandsCar: React.FC = () => {
  return (
    <section className="section container">
      <ul className={styles.categoryContainer}>
        {brandsCarItem.map((item) => (
          <li key={item.id}>
            <Link to={item.path} key={item.id} className={styles.link}>
              {item.icon}
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
