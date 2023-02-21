import { useFormContext } from "react-hook-form";

import { StyledInput } from "@/components/styledComponents";

interface IFormInput {
  name: string;
  label: string;
  type: string;
  select?: boolean;
  defaultValue?: string;
  children?: React.ReactNode;
}

export const FormInput: React.FC<IFormInput> = ({ ...FormInput }) => {
  const { register, formState } = useFormContext();

  return (
    <StyledInput
      {...register(FormInput.name)}
      helperText={formState.errors[FormInput.name]?.message?.toString()}
      error={!!formState.errors[FormInput.name]?.message}
      size="small"
      label={FormInput.label}
      variant="outlined"
      type={FormInput.type}
      name={FormInput.name}
      select={FormInput.select}
      defaultValue={FormInput.defaultValue}
    >
      {FormInput.children}
    </StyledInput>
  );
};
