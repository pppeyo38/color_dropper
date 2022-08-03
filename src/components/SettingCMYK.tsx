import { Dispatch, SetStateAction, FC } from "react";
import { Slider, NumberInput } from "@mantine/core";
import { useHexToRgb } from "../hooks/useHexToRgb";
import { ColorValuesType } from "../hooks/useColor";
import { useCmykToRgb } from "../hooks/useCmykToRgb";

type Props = {
  colorValues: ColorValuesType;
  setColorValues: Dispatch<SetStateAction<ColorValuesType>>;
};

export const SettingCMYK: FC<Props> = (props) => {
  const { colorValues, setColorValues } = props;
  const { setRGBtoHex } = useHexToRgb();
  const { setCMYKtoRGB } = useCmykToRgb();

  const handleChange = (value: number, color: string) => {
    setColorValues((prev) => ({
      ...prev,
      cmyk: { ...prev.cmyk, [color]: value },
    }));
    setColorValues((prev) => ({
      ...prev,
      rgb: {
        ...prev.rgb,
        red: setCMYKtoRGB(prev.cmyk)[0],
        green: setCMYKtoRGB(prev.cmyk)[1],
        blue: setCMYKtoRGB(prev.cmyk)[2],
      },
    }));
    setColorValues((prev) => ({
      ...prev,
      hex: setRGBtoHex(prev.rgb),
    }));
  };

  return (
    <section className="cmykSectionStyle">
      <div className="sliderWrap cyanSlider">
        <p className="sliderLabel">C</p>
        <Slider
          max={100}
          value={colorValues.cmyk.cyan}
          onChange={(e) => handleChange(e, "cyan")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.cmyk.cyan}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "cyan");
            }
          }}
        />
      </div>
      <div className="sliderWrap magentaSlider">
        <p className="sliderLabel">M</p>
        <Slider
          max={100}
          value={colorValues.cmyk.magenta}
          onChange={(e) => handleChange(e, "magenta")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.cmyk.magenta}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "magenta");
            }
          }}
        />
      </div>
      <div className="sliderWrap yellowSlider">
        <p className="sliderLabel">Y</p>
        <Slider
          max={100}
          value={colorValues.cmyk.yellow}
          onChange={(e) => handleChange(e, "yellow")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.cmyk.yellow}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "yellow");
            }
          }}
        />
      </div>
      <div className="sliderWrap keySlider">
        <p className="sliderLabel">K</p>
        <Slider
          max={100}
          value={colorValues.cmyk.key}
          onChange={(e) => handleChange(e, "key")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.cmyk.key}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "key");
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
