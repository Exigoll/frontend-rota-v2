//import { Contacts } from "@components/ui/Contacts";
//import { Office } from "@components/ui/Office";
//import { Search } from "@components/ui/Search";

import styles from "./Header.module.scss";

export const HeaderBottom = () => {
  return (
    <div className={styles.headerBottom}>
      <div className={`${styles.headerBottomWrapper} container`}>
        {/* <Contacts /> */}
        {/* <Search /> */}
        {/* <Office /> */}
      </div>
    </div>
  );
};
