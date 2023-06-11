import { FC, useState } from "react";

import styles from "./SearchResult.module.scss";

export const SearchResultCounter: FC = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => setCount(count + 1);

  return (
    <div className={styles.counter}>
      <button onClick={decrement}>&minus;</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
