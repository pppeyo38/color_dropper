import { useState } from "react";

export type ColorValuesType = {
  hex: string;
  rgb: {
    red: number;
    blue: number;
    green: number;
  };
};

export const useColorValues = () => {
  const [colorValues, setColorValues] = useState({
    hex: "ffffff",
    rgb: { red: 255, blue: 255, green: 255 },
  });

  return { colorValues, setColorValues };
};
