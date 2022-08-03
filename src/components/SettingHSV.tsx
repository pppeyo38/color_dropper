import { Dispatch, SetStateAction, FC } from "react";
import { Slider, NumberInput, HueSlider } from "@mantine/core";
import { ColorValuesType } from "../hooks/useColor";
import styled from "styled-components";

type Props = {
  colorValues: ColorValuesType;
  setColorValues: Dispatch<SetStateAction<ColorValuesType>>;
};

export const SettingHSV: FC<Props> = (props) => {
  const { colorValues, setColorValues } = props;

  const handleChange = (value: number, status: string) => {
    setColorValues((prev) => ({
      ...prev,
      hsv: { ...prev.hsv, [status]: value },
    }));
  };

  return (
    <Section>
      <SliderHue>
        <SliderLabel>H</SliderLabel>
        <HueSlider
          value={colorValues.hsv.hue}
          onChange={(e) => handleChange(e, "hue")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={360}
          value={colorValues.hsv.hue}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "hue");
            }
          }}
        />
      </SliderHue>
      <SliderSaturation bg={"#00FFF0"}>
        <SliderLabel>S</SliderLabel>
        <Slider
          max={100}
          value={colorValues.hsv.saturation}
          onChange={(e) => handleChange(e, "saturation")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.hsv.saturation}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "saturation");
            }
          }}
        />
      </SliderSaturation>
      <SliderLightness bg={"#00FFF0"}>
        <SliderLabel>V</SliderLabel>
        <Slider
          max={100}
          value={colorValues.hsv.lightness}
          onChange={(e) => handleChange(e, "lightness")}
          style={sliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.hsv.lightness}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "lightness");
            }
          }}
        />
      </SliderLightness>
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

const SliderHue = styled.div`
  position: relative;
  width: 210px;
  height: 25px;
  display: flex;

  & .mantine-ColorSlider-slider {
    height: 25px;

    & .mantine-ColorSlider-thumb {
      top: -2px !important;
      width: 29px;
      height: 29px;
      border-radius: 50%;
    }
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

const SliderSaturation = styled.div<{ bg: string }>`
  position: relative;
  width: 210px;
  height: 25px;
  display: flex;

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-bar {
    display: none;
  }

  & .mantine-Slider-root {
    height: 25px;

    & .mantine-Slider-track {
      height: 25px;

      &:before {
        ${({ bg }) => `background: linear-gradient(to right,white,${bg})`}
      }
    }
  }

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-thumb {
    display: inline-block;
    width: 29px;
    height: 29px;
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

const SliderLightness = styled.div<{ bg: string }>`
  position: relative;
  width: 210px;
  height: 25px;
  display: flex;

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-bar {
    display: none;
  }

  & .mantine-Slider-root {
    height: 25px;

    & .mantine-Slider-track {
      height: 25px;

      &:before {
        ${({ bg }) => `background: linear-gradient(to right, black, ${bg})`}
      }
    }
  }

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-thumb {
    display: inline-block;
    width: 29px;
    height: 29px;
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
