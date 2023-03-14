import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "../Pages.module.scss";

export const DocumentFlowPage: FC = () => {
  return (
    <section className="page">
      <div className="container">
        <h2 className="titlePage">Электронный документооборот</h2>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <p className={styles.text}>
              Бумажный документооборот изживает себя. Бумажные документы
              теряются у поставщиков, при доставке контрагенту, у клиента.
              Приходится распечатывать, подписывать и отправлять документы
              заново. Все это — время и деньги.
            </p>
            <p className={styles.text}>
              ООО «РОТА» внедрило систему электронного документооборота и
              приглашает своих партнёров присоединиться к выгодному и удобному
              сервису. Электронный документооборот (ЭДО) — единый механизм по
              работе с документами, представленными в электронном виде, с
              реализацией концепции «безбумажного делопроизводства».
            </p>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Плюсы ЭДО для бухгалтера:</h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                <span>1</span>
                <p>
                  ФНС и суды принимают электронные документы в качестве
                  оригиналов;
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>2</span>
                <p>Электронные документы не требуют дублирования на бумаге;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>3</span>
                <p>
                  Мгновенная отправка, получение и внесение корректировок в
                  документы;
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>4</span>
                <p>
                  Отправляйте и получайте документы прямо из своей учетной
                  системы (1С и др.);
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>5</span>
                <p>
                  Он-лайн контроль статуса документа (доставлен, подписан, отказ
                  в подписи);
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>6</span>
                <p>Легкий поиск документов по удобным расширенным фильтрам</p>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>
              Плюсы для финансового директора:
            </h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                <span>1</span>
                <p>
                  Сокращение издержек на бумагу, печать, доставку и хранение до
                  80%;
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>2</span>
                <p>
                  Увеличение суммы входящего НДС за счет гарантированного
                  принятия документов;
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>3</span>
                <p>Повышение эффективности внутренних бизнес-процессов;</p>
              </li>
              <li className={styles.sublistItem}>
                <span>4</span>
                <p>Прозрачные финансовые отношения с контрагентами</p>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listTitle}>
              Для совместного сотрудничества по системе ЭДО необходимо:
            </h3>
            <ul className={styles.sublist}>
              <li className={styles.sublistItem}>
                <span>1</span>
                <p>
                  Выбрать оператора ЭДО и заключить с ним контракт (список
                  операторов федерального уровня ЭДО представлен на сайте&nbsp;
                  <Link
                    to="https://www.nalog.gov.ru/rn77/oedo/search_edo/"
                    target="_blank"
                  >
                    Федеральной Налоговой Службы
                  </Link>
                  ;
                </p>
              </li>
              <li className={styles.sublistItem}>
                <span>2</span>
                <p>
                  Выразить готовность сотрудничества с ООО «РОТА» по ЭДО.
                  Заполнить и подписать доп. соглашение в электронном виде.
                  Реквизиты нашей компании, Вы можете найти&nbsp;
                  <Link to="/contacts" target="_blank">
                    здесь
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
