import { useEffect, useState, createRef } from "react";
import Div100vh from "react-div-100vh";
import { ColorPicker, Slider, NumberInput } from "@mantine/core";
import { useRGB } from "./hooks/useRGB";
import "./styles/colorPickerPage.css";

export const ColorPickerPage = () => {
  const { valueRGB, setValueRGB } = useRGB();

  // カラーピッカーの値
  const [value, onChange] = useState(
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

  const inputRedValue = (value: number) => {
    if (0 <= value && value <= 255) {
      setValueRGB((prevState) => ({ ...prevState, red: value }));
    }
  };
  const inputGreenValue = (value: number) => {
    if (0 <= value && value <= 255) {
      setValueRGB((prevState) => ({ ...prevState, green: value }));
    }
  };
  const inputBlueValue = (value: number) => {
    if (0 <= value && value <= 255) {
      setValueRGB((prevState) => ({ ...prevState, blue: value }));
    }
  };

  // スライダーの数値が変わったらピッカー部分の数値も変化
  useEffect(() => {
    onChange(`rgb(${valueRGB.red}, ${valueRGB.green}, ${valueRGB.blue})`);
  }, [valueRGB.red, valueRGB.green, valueRGB.blue]);

  return (
    <Div100vh>
      <h2>{value}</h2>
      <ColorPicker
        format="rgb"
        value={value}
        onChange={(e) => {
          onChange(e);
          setRGBStringToNum(e);
        }}
        style={{ width: "fit-content", margin: "0 auto" }}
      />
      <section className="rgbSectionStyle">
        <div className="sliderWrap redSlider">
          <p className="sliderLabel">R</p>
          <Slider
            max={255}
            value={valueRGB.red}
            onChange={(e) => {
              setValueRGB((prevState) => ({ ...prevState, red: e }));
            }}
            style={sliderStyle}
          />
          <NumberInput
            hideControls
            min={0}
            max={255}
            value={valueRGB.red}
            onChange={(e) => {
              if (e !== undefined) {
                inputRedValue(e);
              }
            }}
          />
        </div>
        <div className="sliderWrap greenSlider">
          <p className="sliderLabel">G</p>
          <Slider
            max={255}
            value={valueRGB.green}
            onChange={(e) => {
              setValueRGB((prevState) => ({ ...prevState, green: e }));
            }}
            style={sliderStyle}
          />
          <NumberInput
            hideControls
            min={0}
            max={255}
            value={valueRGB.green}
            onChange={(e) => {
              if (e !== undefined) {
                inputGreenValue(e);
              }
            }}
          />
        </div>
        <div className="sliderWrap blueSlider">
          <p className="sliderLabel">B</p>
          <Slider
            max={255}
            value={valueRGB.blue}
            onChange={(e) => {
              setValueRGB((prevState) => ({ ...prevState, blue: e }));
            }}
            style={sliderStyle}
          />
          <NumberInput
            hideControls
            min={0}
            max={255}
            value={valueRGB.blue}
            onChange={(e) => {
              if (e !== undefined) {
                inputBlueValue(e);
              }
            }}
          />
        </div>
      </section>
    </Div100vh>
  );
};

const sliderStyle = {
  width: "210px",
};
