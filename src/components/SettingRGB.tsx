import { Dispatch, SetStateAction, FC } from "react";
import { Slider, NumberInput } from "@mantine/core";
import { useHexToRgb } from "../hooks/useHexToRgb";
import { ColorValuesType } from "../hooks/useColor";

type Props = {
  colorValues: ColorValuesType;
  setColorValues: Dispatch<SetStateAction<ColorValuesType>>;
};

export const SettingRGB: FC<Props> = (props) => {
  const { colorValues, setColorValues } = props;
  const { setRGBtoHex } = useHexToRgb();

  const handleChange = (value: number, color: string) => {
    setColorValues((prev) => ({
      ...prev,
      rgb: { ...prev.rgb, [color]: value },
    }));
    setColorValues((prev) => ({
      ...prev,
      hex: setRGBtoHex(prev.rgb),
    }));
  };

  return (
    <section className="rgbSectionStyle">
      <div className="sliderWrap redSlider">
        <p className="sliderLabel">R</p>
        <Slider
          max={255}
          value={colorValues.rgb.red}
          onChange={(e) => handleChange(e, "red")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={255}
          value={colorValues.rgb.red}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "red");
            }
          }}
        />
      </div>
      <div className="sliderWrap greenSlider">
        <p className="sliderLabel">G</p>
        <Slider
          max={255}
          value={colorValues.rgb.green}
          onChange={(e) => handleChange(e, "green")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={255}
          value={colorValues.rgb.green}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "green");
            }
          }}
        />
      </div>
      <div className="sliderWrap blueSlider">
        <p className="sliderLabel">B</p>
        <Slider
          max={255}
          value={colorValues.rgb.blue}
          onChange={(e) => handleChange(e, "blue")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={255}
          value={colorValues.rgb.blue}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "blue");
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
