import { FC } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import styles from "./InfoSlider.module.scss";

const listItems = [
  {
    id: 0,
    title:
      "В нашем магазине Вы можете приобрести как оригинальные запчасти, так и недорогие аналоги",
    pathImg:
      "https://res.cloudinary.com/djqpiccvn/image/upload/v1677133655/rota-slider-img/slider-5_dk9omv.jpg",
  },
  {
    id: 1,
    title:
      "Осуществляем доставку в любую точку России, а также в страны ближнего зарубежья",
    pathImg:
      "https://res.cloudinary.com/djqpiccvn/image/upload/v1677133656/rota-slider-img/slider-6_af7elw.jpg",
  },
  {
    id: 2,
    title:
      "В нашем магазине Вы можете приобрести шины и диски известных брендов",
    pathImg:
      "https://res.cloudinary.com/djqpiccvn/image/upload/v1677133655/rota-slider-img/slider-1_mkpn1d.jpg",
  },
  {
    id: 3,
    title:
      "Всегда большой ассортимент товаров в наличии, на наших складах в Москве",
    pathImg:
      "https://res.cloudinary.com/djqpiccvn/image/upload/v1677133656/rota-slider-img/slider-2_ehjvvd.jpg",
  },
  {
    id: 4,
    title: "Огромный ассортимент моторных масел из наличия и под заказ",
    pathImg:
      "https://res.cloudinary.com/djqpiccvn/image/upload/v1677133655/rota-slider-img/slider-3_dy3m6d.jpg",
  },
  {
    id: 5,
    title:
      "Не нашли нужный товар на сайте? Свяжитесь с нами, и мы поможем с подбором!",
    pathImg:
      "https://res.cloudinary.com/djqpiccvn/image/upload/v1677133656/rota-slider-img/slider-4_pp2mzk.jpg",
  },
];

export const InfoSlider: FC = (): JSX.Element => {
  return (
    <section className="container section">
      <Swiper
        modules={[Pagination, Autoplay]}
        className={styles.slider}
        spaceBetween={30}
        loop={true}
        allowTouchMove={true}
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
        {listItems.map((item) => (
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
