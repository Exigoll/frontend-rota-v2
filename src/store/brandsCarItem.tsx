import {
  DirectionsBus,
  LocalShipping,
  TimeToLeave,
  TwoWheeler,
} from "@mui/icons-material";

export const brandsCarItem = [
  {
    id: 0,
    title: "Легковые автомобили",
    path: "./cars",
    icon: <TimeToLeave />,
  },
  {
    id: 1,
    title: "Грузовые автомобили",
    path: "./truck",
    icon: <LocalShipping />,
  },
  {
    id: 2,
    title: "Автобусы",
    path: "./buses",
    icon: <DirectionsBus />,
  },
  {
    id: 3,
    title: "Мотоциклы",
    path: "./motorcycles",
    icon: <TwoWheeler />,
  },
];
