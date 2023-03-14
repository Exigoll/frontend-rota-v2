import { FC } from "react";

import styles from "../Pages.module.scss";

export const ProviderPage: FC = () => {
  return (
    <section className="page">
      <div className="container">
        <h2 className="titlePage">Информация для поставщиков</h2>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Требования к поставщикам:</h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                <span>1</span>
                <p>Юридическое лицо является плательщиком НДС;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>2</span>
                <p>Возможность возврата товара;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>3</span>
                <p>Наличие сертификатов ЕАС на предлагаемую продукцию;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>4</span>
                <p>Гарантийный срок не менее 12 месяцев;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>5</span>
                <p>Гибкая система скидок;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>6</span>
                <p>Широкий ассортимент складского наличия;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>7</span>
                <p>Регулярное обновление информации об остатках на складах</p>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>
              Для того, чтобы стать нашим поставщиком необходимо:
            </h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                <span>1</span>
                <p>Соответствовать ранее представленным требованиям;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>2</span>
                <p>
                  Направить на адрес электронной почты&nbsp;
                  <a href="mailto:info@rotazap.ru">info@rotazap.ru</a>
                  &nbsp;прайс-лист и пакет документов
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Необходимый пакет документов:</h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                <span>1</span>
                <p>
                  Выписка из ЮГРЮЛ, выданная налоговым орг. не позднее 30 дн. с
                  даты подписания договора;
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>2</span>
                <p>Устав организации (1-3 страницы + последняя страница);</p>
              </li>
              <li className={styles.sublistItem}>
                <span>3</span>
                <p>
                  Свидетельство о государственной регистрации юридического лица
                  (ОГРН/ ОГРНИП);
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>4</span>
                <p>
                  Свидетельство о постановке организации на учет в налоговом
                  органе (ИНН);
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>5</span>
                <p>Приказ о назначении руководителя организации;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>6</span>
                <p>
                  Копия бухгалтерской отчётности — первый лист с отметкой
                  налогового органа;
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>7</span>
                <p>
                  Копия паспорта РФ директора (или лица, выступающего по
                  доверенности);
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>8</span>
                <p>Договор аренды помещения;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>9</span>
                <p>
                  Копия доверенности сотрудников на право подписи первичных
                  отгрузочных документов и счетов-фактур за руководителя и гл.
                  бухгалтера;
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>10</span>
                <p>
                  Копия декларации по НДС — первый лист налоговой декларации по
                  налогу на добавленную стоимость за последний отчётный период,
                  с отметкой налогового органа о принятии декларации
                </p>
              </li>
              <li className={styles.sublistItem}>
                <p>
                  <i>
                    *Копии данных документов, в обязательном порядке должны быть
                    заверены оригиналом печати компании и подписью директора
                  </i>
                </p>
              </li>
            </ul>
          </div>
          <p className={styles.listText}>
            После рассмотрения предложения с Вами свяжется наш специалист для
            обсуждения деталей сотрудничества!
          </p>
        </div>
      </div>
    </section>
  );
};
