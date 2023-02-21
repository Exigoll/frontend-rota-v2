import { TextField } from "@mui/material";
import { FC } from "react";

/* TODO: удалить */
interface ISelectTextFields {
  select?: boolean;
  label: string;
  type: string;
  defaultValue?: string;
  helperText: string;
  children?: React.ReactNode;
}

export const SelectTextFields: FC<ISelectTextFields> = ({
  ...SelectTextFields
}) => {
  return (
    <TextField
      select={SelectTextFields.select}
      label={SelectTextFields.label}
      defaultValue={SelectTextFields.defaultValue}
      helperText={SelectTextFields.helperText}
    >
      {SelectTextFields.children}
    </TextField>
  );
};
