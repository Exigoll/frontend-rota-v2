import { FC } from "react";

import { BrandsCar } from "@/components/ui/BrandsCar";
import { InfoSlider } from "@/components/ui/Info";

export const HomePage: FC = () => {
  return (
    <>
      <BrandsCar />
      <InfoSlider />
    </>
  );
};
