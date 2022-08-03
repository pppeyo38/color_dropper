import { Dispatch, SetStateAction, FC } from "react";
import { Slider, NumberInput } from "@mantine/core";
import { useHexToRgb } from "../hooks/useHexToRgb";
import { ColorValuesType } from "../hooks/useColor";
import styled from "styled-components";

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
    <Section>
      <SliderWrap bg={"#ff0000"}>
        <SliderLabel>R</SliderLabel>
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
      </SliderWrap>
      <SliderWrap bg={"#00ff00"}>
        <SliderLabel>G</SliderLabel>
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
      </SliderWrap>
      <SliderWrap bg={"#0000ff"}>
        <SliderLabel>B</SliderLabel>
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
      </SliderWrap>
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

  & .mantine-Slider-root > .mantine-Slider-track {
    width: 210px;
    height: 25px;

    &:before {
      ${({ bg }) => `background: ${bg}`};
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
