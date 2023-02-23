import React from "react";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          © 2023 ROTAZAP.RU - Интернет-магазин запчастей для иномарок
        </p>
      </div>
    </footer>
  );
};
