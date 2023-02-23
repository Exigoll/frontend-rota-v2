import React from "react";

import { sliderItems } from "@/store/sliderItems";

import styles from "./InfoSlider.module.scss";

export const InfoSlider: React.FC = () => {
  return (
    <section className="section container">
      <ul>
        {sliderItems.map((item) => (
          <li>
            <img src={item.pathImg} alt="Image" />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
