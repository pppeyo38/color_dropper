export const useHexToRgb = () => {
  const toHex = (value: number) => {
    let hexadecimal = value.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  };

  const setHexColorCode = (r: number, g: number, b: number) => {
    return "#" + toHex(r) + toHex(g) + toHex(b);
  };

  const setDecimal = (hex: string) => {
    if (hex.slice(0, 1) === "#") hex = hex.slice(1);
    if (hex.length == 3) {
      hex =
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(1, 2) +
        hex.slice(1, 2) +
        hex.slice(2, 3) +
        hex.slice(2, 3);
    }

    return {
      red: parseInt(hex.slice(0, 2), 16),
      green: parseInt(hex.slice(2, 4), 16),
      blue: parseInt(hex.slice(4, 6), 16),
    };
  };

  return { toHex, setHexColorCode, setDecimal };
};
