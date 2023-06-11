import { ShoppingCart } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./SearchResult.module.scss";
import { SearchResultCounter } from "./SearchResultCounter";

const SearchResult: FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchResults = location.state?.searchResults || [];
  console.log(searchResults);

  return (
    <div className="container">
      <div className={styles.searchResultWrapper}>
        <p>TS31671</p>
        <button
          className="btn btn--peach"
          style={{ width: "200px" }}
          onClick={() => navigate(-1)}
        >
          Вернуться на главную
        </button>
        <p>Результаты поиска:</p>
        {searchResults.length > 0 ? (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Номер</TableCell>
                  <TableCell align="center">Производитель</TableCell>
                  <TableCell align="center">Описание</TableCell>
                  <TableCell align="center">Количество</TableCell>
                  <TableCell align="center">В корзину</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResults.map((item: any) =>
                  item.crosses.map((cross: any) => (
                    <TableRow key={`${cross.brand} ${cross.number}`}>
                      <TableCell align="center" component="th" scope="row">
                        {cross.number}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {cross.brand}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {item.descr}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        <SearchResultCounter />
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        <button className={styles.cartButton}>
                          <ShoppingCart />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p>
            Ничего не найдено! Возможно была допущена ошибка при вводе артикула
            детали
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
