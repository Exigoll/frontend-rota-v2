import { MenuOpen } from "@mui/icons-material";
import {
  Button,
  Dialog,
  Drawer,
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

  "& .MuiButtonBase-root": {
    //padding: "0",
  },

  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
    lineHeight: "14px",
  },

  "& .MuiSvgIcon-root": {
    width: "18px",
    height: "18px",
  },
});

export const StylesDrawer = styled(Drawer)({
  top: "70px",

  "@media (max-width: 768px)": {
    top: "112px",
  },

  "& .MuiDrawer-paper": {
    top: "70px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    rowGap: "28px",
    width: "360px",
    height: "100%",
    backgroundColor: "#1b2f52",
    borderRadius: "0",
    boxShadow: "none",

    "@media (max-width: 768px)": {
      top: "112px",
    },

    "@media (max-width: 490px)": {
      width: "100%",
    },
  },
  "& .MuiModal-backdrop": {
    top: "70px",

    "@media (max-width: 768px)": {
      top: "112px",
    },
  },
});

export const StyledMenuOpen = styled(MenuOpen)({
  width: "40px",
  height: "40px",
  fill: "white",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",

  "@media (min-width: 769px)": {
    "&:hover": {
      fill: "rgb(231 124 88)",
    },
  },

  "@media (max-width: 490px)": {
    width: "30px",
    height: "30px",
  },
});
