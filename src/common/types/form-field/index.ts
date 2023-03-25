import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IFormField<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  type: string;
  label: string;
  placeholder: string;
  select?: boolean;
  defaultValue?: string;
  children?: React.ReactNode;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
}
