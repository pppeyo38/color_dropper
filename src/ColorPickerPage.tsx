import { useState } from "react";
import Div100vh from "react-div-100vh";
import { useColorValues } from "./hooks/useColor";
import { useHexToRgb } from "./hooks/useHexToRgb";
import { useCmykToRgb } from "./hooks/useCmykToRgb";
import { SettingRGB } from "./components/SettingRGB";
import { SettingCMYK } from "./components/SettingCMYK";
import { SettingHSV } from "./components/SettingHSV";
import { HashTag } from "./icons/HashTag";
import { ColorPicker, Input, Select } from "@mantine/core";
import "./styles/colorPickerPage.css";
import styled from "styled-components";

export const ColorPickerPage = () => {
  const { colorValues, setColorValues } = useColorValues();
  const { setHextoRGB } = useHexToRgb();
  const { setRGBtoCMYK } = useCmykToRgb();

  // 変換方式
  const conversionData = [
    { value: "rgb", label: "RGB" },
    { value: "cmyk", label: "CMYK" },
    { value: "hsv", label: "HSV" },
  ];
  const [conversion, setConversion] = useState("rgb");

  const handleChange = (value: string) => {
    const rgb = setHextoRGB(value);
    setColorValues((prev) => ({
      ...prev,
      hex: value,
      rgb: rgb,
      cmyk: {
        ...prev.cmyk,
        cyan: setRGBtoCMYK(rgb)[0],
        magenta: setRGBtoCMYK(rgb)[1],
        yellow: setRGBtoCMYK(rgb)[2],
        key: setRGBtoCMYK(rgb)[3],
      },
    }));
  };

  const handleChangeHsl = (value: string) => {
    setColorValues((prev) => ({
      ...prev,
      hsl: value,
    }));
  };

  return (
    <Div100vh>
      <Content isHsv={conversion === "hsv" ? true : false}>
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
            style={{
              width: "105px",
              height: "20px",
              backgroundColor: "#D9D9D9",
            }}
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
          format={"hex"}
          value={colorValues.hex}
          onChange={(e) => handleChange(e)}
          style={{ width: "fit-content", margin: "0 auto" }}
        />
        {conversion === "rgb" && (
          <SettingRGB
            colorValues={colorValues}
            setColorValues={setColorValues}
          />
        )}
        {conversion === "cmyk" && (
          <SettingCMYK
            colorValues={colorValues}
            setColorValues={setColorValues}
          />
        )}
        {conversion === "hsv" && (
          <SettingHSV
            colorValues={colorValues}
            setColorValues={setColorValues}
          />
        )}
      </Content>
    </Div100vh>
  );
};

const Content = styled.div<{ isHsv: boolean }>`
  padding-top: 20%;

  ${(props) =>
    props.isHsv &&
    `
      & .mantine-ColorPicker-wrapper.mantine-1m6yxe8 > .mantine-ColorPicker-body {
        display: none;
      }
  `}
`;
