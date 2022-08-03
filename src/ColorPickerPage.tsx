import { useState } from "react";
import Div100vh from "react-div-100vh";
import { useColorValues } from "./hooks/useColor";
import { useHexToRgb } from "./hooks/useHexToRgb";
import { useCmykToRgb } from "./hooks/useCmykToRgb";
import { SettingRGB } from "./components/SettingRGB";
import { SettingCMYK } from "./components/SettingCMYK";
import { HashTag } from "./icons/HashTag";
import { ColorPicker, Input, Select } from "@mantine/core";
import "./styles/colorPickerPage.css";

export const ColorPickerPage = () => {
  const { colorValues, setColorValues } = useColorValues();
  const { setDecimal } = useHexToRgb();
  const { setRGBtoCMYK } = useCmykToRgb();

  // 変換方式
  const conversionData = [
    { value: "rgb", label: "RGB" },
    { value: "cmyk", label: "CMYK" },
    { value: "hsv", label: "HSV" },
  ];
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
        data={conversionData}
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
          const cmyk = setRGBtoCMYK(get);
          setColorValues({
            ...colorValues,
            hex: e,
            rgb: { red: get.red, green: get.green, blue: get.blue },
            cmyk: {
              cyan: cmyk[0],
              magenta: cmyk[1],
              yellow: cmyk[2],
              key: cmyk[3],
            },
          });
        }}
        style={{ width: "fit-content", margin: "0 auto" }}
      />
      {conversion === "rgb" && (
        <SettingRGB colorValues={colorValues} setColorValues={setColorValues} />
      )}
      {conversion === "cmyk" && (
        <SettingCMYK
          colorValues={colorValues}
          setColorValues={setColorValues}
        />
      )}
    </Div100vh>
  );
};
