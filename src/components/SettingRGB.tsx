import { Dispatch, SetStateAction } from "react";
import { Slider, NumberInput } from "@mantine/core";
import { RGB } from "../type/RGB";

type Props = {
  valueRGB: RGB;
  setValueRGB: Dispatch<SetStateAction<RGB>>;
};

export const SettingRGB = ({ valueRGB, setValueRGB }: Props) => {
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

  return (
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
  );
};

const sliderStyle = {
  width: "210px",
};
