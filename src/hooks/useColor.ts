import { useState } from "react";

export type ColorValuesType = {
  hex: string;
  rgb: {
    red: number;
    blue: number;
    green: number;
  };
  cmyk: {
    cyan: number;
    magenta: number;
    yellow: number;
    key: number;
  };
};

export const useColorValues = () => {
  const [colorValues, setColorValues] = useState({
    hex: "ffffff",
    rgb: { red: 255, blue: 255, green: 255 },
    cmyk: {
      cyan: 0,
      magenta: 0,
      yellow: 0,
      key: 0,
    },
  });

  return { colorValues, setColorValues };
};
