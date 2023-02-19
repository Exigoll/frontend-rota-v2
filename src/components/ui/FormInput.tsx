import { TextField, styled } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface IFormInput {
  name: string;
  label: string;
}

const StyledTextField = styled(TextField)({
  width: "360px",
  borderRadius: "10px",
});

export const FormInput: React.FC<IFormInput> = ({ name, label }) => {
  const { register, formState } = useFormContext();

  return (
    <StyledTextField
      {...register(name)}
      helperText={formState.errors[name]?.message?.toString()}
      error={!!formState.errors[name]?.message}
      size="small"
      label={label}
      variant="outlined"
      type="email"
      name={name}
    />
  );
};
