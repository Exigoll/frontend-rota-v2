import { MenuOpen } from "@mui/icons-material";
import {
  Button,
  Dialog,
  Drawer,
  FormControlLabel,
  Menu,
  Select,
  TextField,
  styled,
} from "@mui/material";

export const StyledInput = styled(TextField)({
  width: "320px",
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
  width: "44px",
  height: "44px",
  fill: "white",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",

  "@media (min-width: 769px)": {
    "&:hover": {
      fill: "rgb(231 124 88)",
    },
  },

  "@media (max-width: 490px)": {
    width: "40px",
    height: "40px",
  },
});

export const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    borderRadius: "10px",
    backgroundColor: "#2E3536",
    color: "white",
  },

  "& .MuiMenu-list": {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
    width: "300px",
    backgroundColor: "#2E3536",
    borderRadius: "10px",
  },

  "& .MuiMenuItem-root": {
    columnGap: "10px",
    minHeight: "20px",
    paddingLeft: "15px",
    paddingTop: "0",
    paddingBottom: "0",
    paddingRight: "15px",
    fontSize: "16px",
    lineHeight: "20px",

    "@media (max-width: 490px)": {
      minHeight: "18px",
      fontSize: "14px",
      lineHeight: "18px",
    },

    ":hover": {
      backgroundColor: "white",
      color: "#2E3536",
      fill: "#2E3536",
    },
  },
});
