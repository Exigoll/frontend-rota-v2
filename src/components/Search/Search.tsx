import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Search.module.scss";

export const Search: FC = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (query.trim() === "") {
      setError("Введите данные для запроса");
      return;
    }

    try {
      const response = await axios.get(
        "https://64769b229233e82dd53a2b97.mockapi.io/items"
      );
      const data = response.data;

      if (Array.isArray(data)) {
        const searchResults = data.filter(
          (item) =>
            item.name && item.name.toLowerCase().includes(query.toLowerCase())
        );

        navigate("/search-result", { state: { searchResults } });
        setQuery("");
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  const handleInputChange = (event: any) => {
    setQuery(event.target.value);
    setError("");
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Введите артикул детали"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSearch}>
        <SearchIcon />
      </button>
      {error && <div className={styles.emptySearch}>{error}</div>}
    </div>
  );
};
