import {
  DirectionsBus,
  LocalShipping,
  TimeToLeave,
  TwoWheeler,
} from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./BrandsCar.module.scss";

export const BrandsCar: FC = (): JSX.Element => {
  const brandsCarItem = [
    {
      id: 0,
      title: "Легковые автомобили",
      path: "./cars",
      icon: <TimeToLeave />,
    },
    {
      id: 1,
      title: "Грузовые автомобили",
      path: "./truck",
      icon: <LocalShipping />,
    },
    {
      id: 2,
      title: "Автобусы",
      path: "./buses",
      icon: <DirectionsBus />,
    },
    {
      id: 3,
      title: "Мотоциклы",
      path: "./motorcycles",
      icon: <TwoWheeler />,
    },
  ];

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
