import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";

const StyledLoadingButton = styled(LoadingButton)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "320px",
  width: "50%",
  height: "46px",
  border: "1px solid transparent",
  borderRadius: "5px",
  backgroundColor: "#1b2f52",
  fontFamily: "'Inter', sans-serif",
  color: "#fff",
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: 700,
  cursor: "pointer",
  willChange: "transform",
  transition: "all 0.3s, transform 0.1s ease-in-out",

  "@media (min-width: 769px)": {
    "&:hover": {
      borderColor: "#1b2f52",
      backgroundColor: "transparent",
      color: "#1b2f52",
    },
  },

  "@media (max-width: 768px)": {
    //maxWidth: "140px",
    //height: "36px",
    //fontSize: "14px",
    //lineHeight: "14px",
  },
});

export default StyledLoadingButton;
