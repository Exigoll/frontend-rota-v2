import { MailOutline, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";

import styles from "./Contacts.module.scss";

export const Contacts: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <Link className={styles.link} to="tel:+79029999999">
        <Phone />
        8-902-999-99-99
      </Link>
      <Link className={styles.link} to="mailto:info@rotazap.ru">
        <MailOutline />
        info@rotazap.ru
      </Link>
    </div>
  );
};
