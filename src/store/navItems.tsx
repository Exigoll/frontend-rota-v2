import {
  Home,
  ImportContacts,
  LiveHelp,
  LocalShipping,
  PeopleAlt,
  DonutSmall,
  WorkspacePremium,
  Sync
} from "@mui/icons-material";

export const navLinks = [
  { id: 0, title: "Главная", path: "/", icon: <Home /> },
  { id: 1, title: "О компании", path: "/about", icon: <ImportContacts /> },
  {
    id: 2,
    title: "Поставщикам",
    path: "/provider",
    icon: <DonutSmall />,
  },
  {
    id: 3,
    title: "Оптовым покупателям",
    path: "/wholesale",
    icon: <PeopleAlt />,
  },
  { id: 4, title: "Контакты", path: "/contacts", icon: <LiveHelp /> },
];

export const serviceLinks = [
  { id: 0, title: "Доставка", path: "/delivery", icon: <LocalShipping /> },
  { id: 1, title: "Гарантия и возврат", path: "/warrantyReturn", icon: <WorkspacePremium /> },
  {
    id: 2,
    title: "ЭДО",
    path: "/documentFlow",
    icon: <Sync />,
  },
];
