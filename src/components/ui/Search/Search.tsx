import SearchIcon from "@mui/icons-material/Search";

import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Введите VIN номер детали" />
      <button type="submit">
        <SearchIcon />
      </button>
    </div>
  );
};
