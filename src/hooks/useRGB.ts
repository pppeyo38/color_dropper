import { useState } from "react";

type RGB = {
  red: number;
  green: number;
  blue: number;
};

export const useRGB = () => {
  const [valueRGB, setValueRGB] = useState<RGB>({
    red: 255,
    green: 255,
    blue: 255,
  });

  // const setRGBStringToNum = (stringRGB: string) => {
  //   // "rgb(0, 0, 0)"のstring型を数値に変換し保存する
  //   let value = stringRGB.match(/\d+/g);
  //   setValueRGB({
  //     red: Number(value[0]),
  //     green: Number(value[1]),
  //     blue: Number(value[2]),
  //   });
  // };

  // const setRGBNumToString = (numRGB: <RGB>) => {
  //   // "rgb(0, 0, 0)"のstring型を数値に変換し保存する

  // };

  return { valueRGB, setValueRGB };
};
