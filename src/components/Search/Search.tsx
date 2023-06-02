import SearchIcon from "@mui/icons-material/Search";
import { FC, useState } from "react";

import styles from "./Search.module.scss";

export const Search: FC = (): JSX.Element => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://64769b229233e82dd53a2b97.mockapi.io/items/${query}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Ошибка при выполнении запроса", error);
    }
  };

  const handleInputChange = (event: any) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        value={query}
        onChange={handleInputChange}
        type="text"
        placeholder="Введите артикул детали"
      />
      <button onClick={handleSearch} type="submit">
        <SearchIcon />
      </button>
    </div>
  );
};
