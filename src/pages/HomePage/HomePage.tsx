import { FC } from "react";

import { BrandsCar } from "@/components/ui/BrandsCar";
import { InfoSlider } from "@/components/ui/InfoSlider";

export const HomePage: FC = (): JSX.Element => {
  return (
    <>
      <BrandsCar />
      <InfoSlider />
    </>
  );
};
