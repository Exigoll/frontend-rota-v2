import {
  Button,
  Dialog,
  FormControlLabel,
  Select,
  TextField,
  styled,
} from "@mui/material";

export const StyledInput = styled(TextField)({
  width: "360px",
  borderRadius: "10px",
  "& .MuiFormLabel-root": {
    "@media (max-width: 490px)": {
      fontSize: "14px",
    },
  },
  "& .MuiInputBase-input": {
    "@media (max-width: 490px)": {
      fontSize: "14px",
    },
  },

  "@media (max-width: 768px)": {
    width: "320px",
  },

  "@media (max-width: 490px)": {
    width: "280px",
  },
});

export const StyledSelect = styled(Select)({
  "@media (max-width: 768px)": {
    width: "320px",
  },

  "@media (max-width: 490px)": {
    width: "280px",
  },
  "& .MuiOutlinedInput-root": {
    height: "40px",
  },
  "& .MuiInputLabel-root": {
    top: "-7px",

    "@media (max-width: 490px)": {
      fontSize: "14px",
    },
  },
  "& .MuiSelect-select": {
    "@media (max-width: 490px)": {
      fontSize: "14px",
    },
  },
});

export const StyledButtonOffice = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "10px",
  width: "90px",
  height: "40px",
  padding: "0",
  borderRadius: "10px",
  backgroundColor: "#2e3536",
  color: "#fff",
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "700",
  textTransform: "capitalize",
  transition: "transform 0.1s, background-color 0.3s ease-in-out",
  cursor: "pointer",
  willChange: "transform",

  "@media (min-width: 769px)": {
    "&:hover": {
      backgroundColor: "#1b1f20",
    },
  },

  "@media (max-width: 768px)": {
    fontSize: "14px",
    lineHeight: "14px",
  },

  "&:active": {
    transform: "scale(0.99)",
  },
});

export const StyledPopupOffice = styled(Dialog)({
  "& .MuiDialog-container": {
    borderRadius: "20px",
  },
  "& .MuiDialog-paper": {
    borderRadius: "20px",
    maxWidth: "100%",
    margin: "0 auto",
  },
  "& .MuiDialogContent-root": {
    borderRadius: "20px",
  },
});

export const StyledCheckbox = styled(FormControlLabel)({
  height: "30px",

  "& .MuiFormLabel-root.MuiInputLabel-root": {
    top: "-7px",
  },

  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
  },
});
