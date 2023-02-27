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
        freeMode={true}
        speed={4000}
        slidesPerView={1}
        centeredSlides={true}
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
              <picture className={styles.slideImg}>
                <img src={item.pathImg} alt="Image" />
              </picture>
              <p className={styles.textSlider}>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
