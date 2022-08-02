import { useEffect, useState } from "react";
import Div100vh from "react-div-100vh";
import { ColorPicker, Input, Select } from "@mantine/core";
import { useColorHex } from "./hooks/useColorHex";
import "./styles/colorPickerPage.css";
import { SettingRGB } from "./components/SettingRGB";
import { HashTag } from "./icons/HashTag";

export const ColorPickerPage = () => {
  const { colorHex, onChangeColor } = useColorHex();

  const ColorToHex = (value: number) => {
    let hexadecimal = value.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  };

  const ConvertRGBtoHex = (r: number, g: number, b: number) => {
    return ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
  };

  // 変換方式
  const [conversion, setConversion] = useState("rgb");

  return (
    <Div100vh>
      <Input id="inputHex" icon={<HashTag />} value={colorHex} />
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
            backgroundColor: `${colorHex}`,
          }}
        ></div>
      </section>
      <ColorPicker
        format="hex"
        value={colorHex}
        onChange={(e) => {
          onChangeColor(e);
          console.log(e);
        }}
        style={{ width: "fit-content", margin: "0 auto" }}
      />
      {/* {conversion === "rgb" && (
        <SettingRGB valueRGB={valueRGB} setValueRGB={setValueRGB} />
      )} */}
    </Div100vh>
  );
};
