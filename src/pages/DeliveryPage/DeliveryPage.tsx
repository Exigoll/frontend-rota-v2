import { FC } from "react";

import styles from "../Pages.module.scss";

export const DeliveryPage: FC = () => {
  return (
    <section className="page">
      <div className="container">
        <h2 className="titlePage">Доставка и приемка товара</h2>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>
              Мы предлагаем следующие виды доставки товара
            </h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                <span>1</span>
                <p>
                  <b>Курьерская доставка</b> - осуществляется собственным
                  транспортом компании с понедельника по субботу (бесплатно, на
                  следующий за днем размещения заказа день);
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>2</span>
                <p>
                  <b>Транспортной компанией</b> - осуществляется посредствам
                  любой удобной клиенту транспортной компанией с понедельника по
                  пятницу (бесплатно до транспортной компании, на следующий за
                  днем размещения заказа рабочий день)
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>
              При оформлении заказов, действует следующий график
            </h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                <span>1</span>
                <p>
                  <b>Курьерская доставка</b> - при поступлении заказа до 16:00,
                  доставка возможна на следующий день, после 16:00 через день
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>2</span>
                <p>
                  <b>Транспортной компанией</b> - согласно графику работы
                  транспортной компании которую Вы выбрали
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Приемка товара</h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                -
                <p>
                  Покупатель вправе принять товар по количеству мест без
                  проведения проверки его качества, количества единиц товара
                  внутри упаковки и ассортимента, только если товар находится в
                  таре и упаковке, у которой отсутствуют видимые дефекты;
                </p>
              </li>
              <li className={styles.sublistItem}>
                -
                <p>
                  Приемка товара по внутритарному количеству, качеству,
                  ассортименту и комплектности осуществляется Покупателем в
                  течение трех рабочих дней с даты получения товара
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
