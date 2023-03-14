import { FC } from "react";

import styles from "../Pages.module.scss";

export const ContactsPage: FC = () => {
  return (
    <section className="page">
      <div className="container">
        <h2 className="titlePage">Контакты</h2>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Реквизиты компании</h3>
            <p className={styles.text}>
              Общество с ограниченной ответственностью "РОТА"
            </p>
            <p className={styles.text}>ИНН: 9715420842</p>
            <p className={styles.text}>КПП: 771501001</p>
            <p className={styles.text}>ОГРН: 1227700333673</p>
            <p className={styles.text}>ОКВЭД 45.31</p>
            <p className={styles.text}>ОКПО 54681502</p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Реквизиты банка</h3>
            <p className={styles.text}>АО "АЛЬФА-БАНК"</p>
            <p className={styles.text}>БИК: 044525593</p>
            <p className={styles.text}>
              К/с: 30101810200000000593 ГУ БАНКА РОССИИ ПО ЦФО
            </p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Фактический адрес</h3>
            <p className={styles.text}>
              г. Москва, ул. Ленина, 32, офис 404, 614055
            </p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>График работы</h3>
            <p className={styles.text}>Пн-Пт: 09:00-18:00</p>
            <p className={styles.text}>Сб-Вс: выходные</p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Контакты для связи</h3>
            <p className={styles.text}>
              E-mail: <a href="mailto:info@rotazap.ru">info@rotazap.ru</a>
            </p>
            <p className={styles.text}>
              № телефона: <a href="tel:+79029999999">+7-902-99-99-999</a>
            </p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Руководитель</h3>
            <p className={styles.text}>
              Генеральный директор: Костюшкин Юрий Владимирович
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
