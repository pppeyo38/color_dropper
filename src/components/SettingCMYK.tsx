import { Dispatch, SetStateAction, FC } from "react";
import { Slider, NumberInput } from "@mantine/core";
import { useHexToRgb } from "../hooks/useHexToRgb";
import { ColorValuesType } from "../hooks/useColor";
import { useCmykToRgb } from "../hooks/useCmykToRgb";
import styled from "styled-components";

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

  //　Keyスライダー用のCMYのみの色
  const rgb = setCMYKtoRGB({
    cyan: colorValues.cmyk.cyan,
    magenta: colorValues.cmyk.magenta,
    yellow: colorValues.cmyk.yellow,
    key: 0,
  });
  const keyBg = setRGBtoHex({ red: rgb[0], green: rgb[1], blue: rgb[2] });

  return (
    <Section>
      <SliderWrap bg={"#00FFF0"}>
        <SliderLabel>C</SliderLabel>
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
      </SliderWrap>
      <SliderWrap bg={"#FF00C7"}>
        <SliderLabel>M</SliderLabel>
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
      </SliderWrap>
      <SliderWrap bg={"#FAFF00"}>
        <SliderLabel>Y</SliderLabel>
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
      </SliderWrap>
      <KeySlider bg={keyBg}>
        <SliderLabel>K</SliderLabel>
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
      </KeySlider>
    </Section>
  );
};

const sliderStyle = {
  width: "210px",
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 210px;
  margin: 15px auto 0;
`;

const SliderLabel = styled.p`
  position: absolute;
  top: 0;
  left: -35px;
  font-family: Roboto;
`;

const SliderWrap = styled.div<{ bg: string }>`
  position: relative;
  width: 210px;
  height: 25px;
  display: flex;

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-bar {
    display: none;
  }

  & .mantine-Slider-root > .mantine-Slider-track:before {
    ${({ bg }) => `background: ${bg}`};
  }

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-thumb {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 3px white;
    background: none;
    box-shadow: 0 0 0 0.5px #9b9b9b, inset 0 0 0 0.5px #9b9b9b;
  }

  & .mantine-Input-wrapper.mantine-NumberInput-wrapper.mantine-12sbrde {
    width: 0;
    margin: 0;
  }
  & .mantine-Input-input.mantine-NumberInput-input.mantine-gqmpge {
    position: absolute;
    top: 0;
    right: -56px;
    width: 45px;
    height: 25px;
    min-height: 25px;
    padding: 3px 9px;
  }
`;

// Kスライダー
const KeySlider = styled.div<{ bg: string }>`
  position: relative;
  width: 210px;
  height: 25px;
  display: flex;

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-bar {
    display: none;
  }

  & .mantine-Slider-root > .mantine-Slider-track {
    width: 210px;
    height: 25px;

    &:before {
      ${({ bg }) => `background: linear-gradient(to right, ${bg}, black)`}
    }
  }

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-thumb {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 3px white;
    background: none;
    box-shadow: 0 0 0 0.5px #9b9b9b, inset 0 0 0 0.5px #9b9b9b;
  }

  & .mantine-Input-wrapper.mantine-NumberInput-wrapper.mantine-12sbrde {
    width: 0;
    margin: 0;
  }
  & .mantine-Input-input.mantine-NumberInput-input.mantine-gqmpge {
    position: absolute;
    top: 0;
    right: -56px;
    width: 45px;
    height: 25px;
    min-height: 25px;
    padding: 3px 9px;
  }
`;
