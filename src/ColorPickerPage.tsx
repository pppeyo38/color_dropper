import { useEffect, useState } from "react";
import Div100vh from "react-div-100vh";
import { ColorPicker, Input, Select } from "@mantine/core";
import "./styles/colorPickerPage.css";
import { SettingRGB } from "./components/SettingRGB";
import { HashTag } from "./icons/HashTag";

import { useColorValues } from "./hooks/useColor";
export const ColorPickerPage = () => {
  // const { colorHex, onChangeColor } = useColorHex();

  const { colorValues, setColorValues } = useColorValues();

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

  // const ColorToHex = (value: number) => {
  //   let hexadecimal = value.toString(16);
  //   return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  // };

  // const ConvertRGBtoHex = (r: number, g: number, b: number) => {
  //   return ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
  // };

  // 変換方式
  const [conversion, setConversion] = useState("rgb");

  return (
    <Div100vh>
      <Input
        id="inputHex"
        icon={<HashTag />}
        value={colorValues.hex.slice(1)}
      />
      <Select
        value={conversion}
        onChange={(e) => e !== null && setConversion(e)}
        data={[
          { value: "rgb", label: "RGB" },
          { value: "cmyk", label: "CMYK" },
          { value: "hsv", label: "HSV" },
        ]}
      />
      <section className="palettes">
        <div
          style={{ width: "105px", height: "20px", backgroundColor: "#D9D9D9" }}
        ></div>
        <div
          style={{
            width: "105px",
            height: "20px",
            backgroundColor: `${colorValues.hex}`,
          }}
        ></div>
      </section>
      <ColorPicker
        format="hex"
        value={colorValues.hex}
        onChange={(e) => {
          const get = setDecimal(e);
          setColorValues({
            ...colorValues,
            hex: e,
            rgb: { red: get.red, green: get.green, blue: get.blue },
          });
        }}
        style={{ width: "fit-content", margin: "0 auto" }}
      />
      {conversion === "rgb" && (
        <SettingRGB colorValues={colorValues} setColorValues={setColorValues} />
      )}
    </Div100vh>
  );
};
