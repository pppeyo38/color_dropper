import { useEffect, useState } from "react";
import Div100vh from "react-div-100vh";
import { ColorPicker, NumberInput, Select } from "@mantine/core";
import { useRGB } from "./hooks/useRGB";
import "./styles/colorPickerPage.css";
import { SettingRGB } from "./components/SettingRGB";
import { HashTag } from "./icons/HashTag";

export const ColorPickerPage = () => {
  const { valueRGB, setValueRGB } = useRGB();

  // 変換方式
  const [conversion, setConversion] = useState("rgb");

  // カラーピッカーの値
  const [stringRGB, onChange] = useState(
    `rgba(${valueRGB.red}, ${valueRGB.green}, ${valueRGB.blue}, 1)`
  );

  // string型のRGB値をnumber型に変換→更新
  const setRGBStringToNum = (stringRGB: string) => {
    const getValue = stringRGB.match(/\d+/g);
    if (getValue !== null) {
      const rgb = getValue.map((str) => parseInt(str, 10));
      setValueRGB({ red: rgb[0], green: rgb[1], blue: rgb[2] });
    }
  };

  // スライダーの数値が変わったらピッカー部分の数値も変化
  useEffect(() => {
    onChange(`rgb(${valueRGB.red}, ${valueRGB.green}, ${valueRGB.blue})`);
  }, [valueRGB.red, valueRGB.green, valueRGB.blue]);

  return (
    <Div100vh>
      <h2>{stringRGB}</h2>
      <NumberInput hideControls icon={<HashTag />} />
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
            backgroundColor: `${stringRGB}`,
          }}
        ></div>
      </section>
      <ColorPicker
        format="rgb"
        value={stringRGB}
        onChange={(e) => {
          onChange(e);
          setRGBStringToNum(e);
        }}
        style={{ width: "fit-content", margin: "0 auto" }}
      />
      {conversion === "rgb" && (
        <SettingRGB valueRGB={valueRGB} setValueRGB={setValueRGB} />
      )}
    </Div100vh>
  );
};
