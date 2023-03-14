import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "../Pages.module.scss";

export const WholesalePage: FC = () => {
  return (
    <section className="page">
      <div className="container">
        <h2 className="titlePage">Информация для оптовых клиентов</h2>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Как начать с нами работать?</h3>
            <p className={styles.text}>
              Заказать и приобрести автомобильные запчасти и расходные материалы
              в нашем магазине – проще простого! Необходимо&nbsp;
              <Link to="/registration">зарегистрироваться</Link>
              &nbsp;на нашем сайте, после чего загрузить необходимые документы в
              личном кабинете, либо направить на электронную почту&nbsp;
              <a href="mailto:info@rotazap.ru">info@rotazap.ru</a>
              &nbsp; письмо с приложением пакета документов.
            </p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Порядок заключения договора</h3>
            <p className={styles.text}>
              Для оптовых покупателей (ООО и ИП) необходимо заключить с нами
              Договор поставки. Для того, чтобы заключить с нами Договор
              поставки, Вам нужно предоставить копии следующих документов:
            </p>
            <div className={styles.sublistWrapper}>
              <h4 className={styles.sublistTitle}>Для физических лиц (ИП):</h4>
              <ul className={styles.sublist}>
                <li className={styles.sublistItem}>
                  <span>1</span>
                  <p>ИНН;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>2</span>
                  <p>ОГРН;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>3</span>
                  <p>Паспорт (2-я и 3-я страницы);</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>4</span>
                  <p>
                    Доверенность (если договор и документы подписывает не
                    руководитель) + документы, подтверждающие полномочия;
                  </p>
                </li>
                <li className={styles.sublistItem}>
                  <span>5</span>
                  <p>
                    Выписка из ЕГРЮЛ (ЕГРИП) – срок давности не более 1 месяца;
                  </p>
                </li>
                <li className={styles.sublistItem}>
                  <span>6</span>
                  <p>
                    Информационное письмо о режиме налогообложения с приложением
                    копии декларации НДС за последний налоговый период с
                    отметкой ИФНС о принятии или приложении протокола о приеме
                    декларации;
                  </p>
                </li>
                <li className={styles.sublistItem}>
                  <span>7</span>
                  <p>Контактные данные;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>8</span>
                  <p>Адрес доставки;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>9</span>
                  <p>График работы</p>
                </li>
              </ul>
            </div>
            <div className={styles.sublistWrapper}>
              <h4 className={styles.sublistTitle}>
                Для юридических лиц (ООО):
              </h4>
              <ul className={styles.sublist}>
                <li className={styles.sublistItem}>
                  <span>1</span>
                  <p>ИНН;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>2</span>
                  <p>ОГРН;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>3</span>
                  <p>Устав (1-3 страница + последняя страница);</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>4</span>
                  <p>
                    Доверенность (если договор и документы подписывает не
                    руководитель) + документы, подтверждающие полномочия;
                  </p>
                </li>
                <li className={styles.sublistItem}>
                  <span>5</span>
                  <p>
                    Решение/Протокол/Приказ об избрании (назначении)
                    руководителя организации;
                  </p>
                </li>
                <li className={styles.sublistItem}>
                  <span>6</span>
                  <p>
                    Доверенность (если договор и документы подписывает не
                    руководитель), а также документы, подтверждающие полномочия
                    лица, подписывающего договор (Приказ о назначении
                    руководителя);
                  </p>
                </li>
                <li className={styles.sublistItem}>
                  <span>7</span>
                  <p>Паспорт руководителя (2-я и 3-я страницы);</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>8</span>
                  <p>Договор аренды помещения;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>9</span>
                  <p>
                    Бухгалтерская отчетность за год, предшествующий году
                    заключения сделки. Данные бухгалтерской отчетности
                    организации за любой период также можно бесплатно получить в
                    Росстате (при условии, что организация представляет
                    отчетность в органы статистики). Для этого нужно направить в
                    любой территориальный орган статистики запрос по
                    утвержденной форме (п. п. 4, 12, 18, 21 Регламента
                    Росстата);
                  </p>
                </li>
                <li className={styles.sublistItem}>
                  <span>10</span>
                  <p>
                    Информационное письмо о режиме налогообложения с приложением
                    копии декларации НДС за последний налоговый период с
                    отметкой ИФНС о принятии или приложении протокола о приеме
                    декларации;
                  </p>
                </li>
                <li className={styles.sublistItem}>
                  <span>11</span>
                  <p>Банковские реквизиты;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>12</span>
                  <p>Контактные данные;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>13</span>
                  <p>Адрес доставки;</p>
                </li>
                <li className={styles.sublistItem}>
                  <span>14</span>
                  <p>График работы</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Порядок размещения заказов</h3>
            <p className={styles.text}>
              Принцип оформления заказа похож на привычное взаимодействие с
              интернет-магазинами. Вы добавляете нужные товары в корзину, затем
              выбираете данные для доставки.
            </p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Отслеживание заказа</h3>
            <p className={styles.text}>
              После оформления заказа вы можете наблюдать как будет меняться его
              статус в процессе его исполнения:
            </p>
            <div className={styles.listWrapper}>
              <div className={styles.sublistWrapper}>
                <ul className={styles.sublist}>
                  <li className={styles.sublistItem}>
                    <span>1</span>
                    <p>Принят в работу;</p>
                  </li>
                  <li className={styles.sublistItem}>
                    <span>2</span>
                    <p>Готов к отгрузке;</p>
                  </li>
                  <li className={styles.sublistItem}>
                    <span>3</span>
                    <p>Выписаны документы;</p>
                  </li>
                  <li className={styles.sublistItem}>
                    <span>4</span>
                    <p>Передан для отгрузки;</p>
                  </li>
                  <li className={styles.sublistItem}>
                    <span>5</span>
                    <p>Получен клиентом</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Порядок оплаты</h3>
            <p className={styles.text}>
              Оплата товара производится на условиях Договора поставки. ООО
              "РОТА" вправе отказать в отгрузке товара, если денежные средства
              от покупателя не поступили в установленные сроки.
            </p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>
              Порядок отгрузки и получения товара
            </h3>
            <p className={styles.text}>
              Отгрузка товара осуществляется на условиях Договора поставки. Наша
              компания вправе приостановить отгрузку товара в случае
              несоблюдения покупателем условий Договора. Получение товара
              производится только на основе доверенности или печати предприятия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
