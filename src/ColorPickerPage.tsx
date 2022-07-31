import Div100vh from "react-div-100vh";
import { ColorPicker, Slider, NumberInput } from "@mantine/core";

import "./styles/colorPickerPage.css";
import { useState } from "react";

export const ColorPickerPage = () => {
  const [redValue, setRedValue] = useState(255);
  const [greenValue, setGreenValue] = useState(255);
  const [blueValue, setBlueValue] = useState(255);

  return (
    <Div100vh>
      <ColorPicker style={{ width: "fit-content", margin: "0 auto" }} />
      <section className="rgbSectionStyle">
        <div className="sliderWrap redSlider">
          <p className="sliderLabel">R</p>
          <Slider
            max={255}
            value={redValue}
            onChange={setRedValue}
            style={sliderStyle}
          />
          <NumberInput hideControls value={redValue} />
        </div>
        <div className="sliderWrap greenSlider">
          <p className="sliderLabel">G</p>
          <Slider
            max={255}
            value={greenValue}
            onChange={setGreenValue}
            style={sliderStyle}
          />
          <NumberInput hideControls value={greenValue} />
        </div>
        <div className="sliderWrap blueSlider">
          <p className="sliderLabel">B</p>
          <Slider
            max={255}
            value={blueValue}
            onChange={setBlueValue}
            style={sliderStyle}
          />
          <NumberInput hideControls value={blueValue} />
        </div>
      </section>
    </Div100vh>
  );
};

const sliderStyle = {
  width: "210px",
};
