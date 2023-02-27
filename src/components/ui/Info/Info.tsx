import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { sliderItems } from "@/store/sliderItems";

import styles from "./Info.module.scss";

export const InfoSlider: React.FC = () => {
  return (
    <section className="container section">
      <Swiper
        modules={[Pagination, Autoplay]}
        className={styles.slider}
        spaceBetween={30}
        loop={true}
        allowTouchMove={true}
        lazyPreloaderClass=".swiper-lazy-preloader"
        //speed={3000}
        slidesPerView={1}
        /* autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }} */
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <div className={styles.image}>
              <img src={item.pathImg} alt="Image" />
            </div>
            <p className={styles.text}>{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
