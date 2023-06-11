import { Autocomplete, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";

import { IProducts } from "@/common/types/products";

import { useAppSelector } from "@/utils/hooks";

import styles from "./NewSearch.module.scss";

export const NewSearch: FC = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string | null>("");
  const productArray: IProducts[] = useAppSelector(
    (state) => state.products.cartProducts
  );
  console.log(productArray);

  return (
    <Stack
      sx={{ width: "380px", backgroundColor: "#fff", borderRadius: "10px" }}
    >
      <Autocomplete
        options={productArray.map(
          (element: { article: string }) => element.article
        )}
        renderInput={(element) => (
          <TextField
            {...element}
            label="Введите артикль детали"
            InputProps={{
              ...element.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};
