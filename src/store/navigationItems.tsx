import {
  Home,
  ImportContacts,
  LiveHelp,
  LocalShipping,
  PeopleAlt,
} from "@mui/icons-material";

export const links = [
  { id: 0, title: "Главная", path: "/", icon: <Home /> },
  { id: 1, title: "О компании", path: "/about", icon: <ImportContacts /> },
  {
    id: 2,
    title: "Поставщикам",
    path: "/provider",
    icon: <LocalShipping />,
  },
  { id: 3, title: "Покупателям", path: "/wholesale", icon: <PeopleAlt /> },
  { id: 4, title: "Контакты", path: "/contacts", icon: <LiveHelp /> },
];
