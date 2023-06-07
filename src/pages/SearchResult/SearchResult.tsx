import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./SearchResult.module.scss";

const SearchResult: FC = (): JSX.Element => {
  return (
    <div>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default SearchResult;
