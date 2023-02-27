import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { sliderItems } from "@/store/sliderItems";

import styles from "./InfoSlider.module.scss";

export const InfoSlider: React.FC = () => {
  return (
    <section className={`${styles.slider} container section`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        className={styles.sliderWrapper}
        spaceBetween={30}
        loop={true}
        allowTouchMove={true}
        speed={3000}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slide}>
              <div className={styles.image}>
                <img src={item.pathImg} alt="Image" />
              </div>
              <p className={styles.text}>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
