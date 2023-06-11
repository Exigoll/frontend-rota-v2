import { Grid } from "@mui/material";
import { FC, useCallback, useEffect, useRef } from "react";

import { BrandsCar } from "@/components/BrandsCar";
import { InfoSlider } from "@/components/InfoSlider";

import { getProductsCart } from "@/store/thunks/products";

import { useAppDispatch, useAppSelector } from "@/utils/hooks";

export const HomePage: FC = (): JSX.Element => {
  const productArray: [] = useAppSelector(
    (state) => state.products.cartProducts
  );
  //console.log(productArray);

  /* const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);

  const cartProductArticle = ["TS31671", "TS31672", "TS31673"];

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((element: string) => {
        dispatch(getProductsCart(element));
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(cartProductArticle);
  }, [cartProductArticle, fetchData]); */

  return (
    <>
      <BrandsCar />
      <InfoSlider />
    </>
  );
};
