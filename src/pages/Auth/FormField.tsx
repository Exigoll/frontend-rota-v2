import { FC } from "react";

import { StyledInput } from "@/components/styledComponents";

import { IFormField } from "@/common/types/form-field";

export const FormField: FC<IFormField> = (props: IFormField): JSX.Element => {
  const {
    type,
    label,
    placeholder,
    select,
    defaultValue,
    children,
    register,
    errors,
  } = props;

  return (
    <StyledInput
      type={type}
      label={label}
      placeholder={placeholder}
      variant="outlined"
      select={select}
      defaultValue={defaultValue}
      error={!!errors.fullName}
      helperText={errors.fullName ? `${errors.fullName.message}` : ""}
      {...register("fullName")}
    >
      {children}
    </StyledInput>
  );
};
