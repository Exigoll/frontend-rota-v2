import { FC } from "react";

import { BrandsCar } from "@/components/BrandsCar";
import { InfoSlider } from "@/components/InfoSlider";

export const HomePage: FC = (): JSX.Element => {
  return (
    <>
      <BrandsCar />
      <InfoSlider />
    </>
  );
};
