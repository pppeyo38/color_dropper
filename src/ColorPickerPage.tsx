import Div100vh from "react-div-100vh";
import { ColorPicker, Slider, NumberInput } from "@mantine/core";

import "./styles/colorPickerPage.css";
import { useEffect, useState } from "react";

type RGB = {
  red: number;
  green: number;
  blue: number;
};

export const ColorPickerPage = () => {
  const [num, setNum] = useState({ red: 255, green: 255, blue: 255 });

  const [value, onChange] = useState(
    `rgba(${num.red}, ${num.green}, ${num.blue}, 1)`
  );

  const setRgb = (e: string) => {
    let rgb = e.match(/\d+/g);
    setNum({
      red: Number(rgb[0]),
      green: Number(rgb[1]),
      blue: Number(rgb[2]),
    });
  };

  useEffect(() => {
    onChange(`rgb(${num.red}, ${num.green}, ${num.blue})`);
  }, [num.red, num.green, num.blue]);

  return (
    <Div100vh>
      <h2>{value}</h2>
      <ColorPicker
        format="rgb"
        value={value}
        onChange={(e) => {
          onChange(e);
          setRgb(e);
        }}
        style={{ width: "fit-content", margin: "0 auto" }}
      />
      <section className="rgbSectionStyle">
        <div className="sliderWrap redSlider">
          <p className="sliderLabel">R</p>
          <Slider
            max={255}
            value={num.red}
            onChange={(e) => {
              setNum((prevState) => ({ ...prevState, red: e }));
            }}
            style={sliderStyle}
          />
          <NumberInput hideControls value={num.red} />
        </div>
        <div className="sliderWrap greenSlider">
          <p className="sliderLabel">G</p>
          <Slider
            max={255}
            value={num.green}
            onChange={(e) => {
              setNum((prevState) => ({ ...prevState, green: e }));
            }}
            style={sliderStyle}
          />
          <NumberInput hideControls value={num.green} />
        </div>
        <div className="sliderWrap blueSlider">
          <p className="sliderLabel">B</p>
          <Slider
            max={255}
            value={num.blue}
            onChange={(e) => {
              setNum((prevState) => ({ ...prevState, blue: e }));
            }}
            style={sliderStyle}
          />
          <NumberInput hideControls value={num.blue} />
        </div>
      </section>
    </Div100vh>
  );
};

const sliderStyle = {
  width: "210px",
};
