import {
  AccountBalanceWallet,
  Article,
  AssignmentReturn,
  ContactPage,
  DownloadForOffline,
  ExitToApp,
  House,
  Settings,
  ShoppingCart,
  SwitchAccount,
  ViewQuilt,
} from "@mui/icons-material";

export const menuItems = [
  { title: "Личный кабинет", icon: <House /> },
  { title: "Баланс", icon: <AccountBalanceWallet /> },
  { title: "Корзина", icon: <ShoppingCart /> },
  { title: "Заказы", icon: <ViewQuilt /> },
  { title: "Загрузка заказа из файла", icon: <DownloadForOffline /> },
  { title: "Возвраты", icon: <AssignmentReturn /> },
  { title: "Документы", icon: <Article /> },
  { title: "Уставные документы", icon: <ContactPage /> },
  { title: "Профиль", icon: <SwitchAccount /> },
  { title: "Настройки", icon: <Settings /> },
  { title: "Выход", icon: <ExitToApp /> },
];
