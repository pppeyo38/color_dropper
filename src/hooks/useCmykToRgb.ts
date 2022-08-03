export const useCmykToRgb = () => {
  // RGB→CMY→CMYK
  const setRGBtoCMYK = (getRGB: {
    red: number;
    green: number;
    blue: number;
  }) => {
    const rgb = Object.values(getRGB);
    // RGB→CMY
    const cmy = rgb.map((value) => {
      return 1 - value / 255;
    });
    // CMY→CMYK
    const k = Math.min.apply(0, cmy);
    const cmyk =
      k == 1
        ? [0, 0, 0]
        : cmy.map((value) => {
            return Math.round(((value - k) / (1 - k)) * 100);
          });
    cmyk.push(Math.round(k * 100));
    return cmyk;
  };

  // CMYK→CMY→RGB
  const setCMYKtoRGB = (getCMYK: {
    cyan: number;
    magenta: number;
    yellow: number;
    key: number;
  }) => {
    const cmyk = Object.values(getCMYK);
    // CMYK→CMY
    const k = cmyk[3] / 100;
    const cmy = cmyk.slice(0, 3).map((value) => {
      return (value / 100) * (1 - k) + k;
    });
    // CMY→RGB
    const rgb = cmy.map((value) => {
      return Math.round((1 - value) * 255);
    });
    return rgb;
  };

  return { setRGBtoCMYK, setCMYKtoRGB };
};
