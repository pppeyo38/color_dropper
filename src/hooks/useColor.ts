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
  hsl: string;
  hsv: {
    hue: number;
    saturation: number;
    lightness: number;
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
    hsl: "hsl(0, 0%, 100%)",
    hsv: {
      hue: 0,
      saturation: 0,
      lightness: 100,
    },
  });

  return { colorValues, setColorValues };
};
