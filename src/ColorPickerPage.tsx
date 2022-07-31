import Div100vh from "react-div-100vh";
import { ColorPicker } from "@mantine/core";

import "./styles/colorPickerPage.css";

export const ColorPickerPage = () => {
  return (
    <Div100vh>
      <ColorPicker style={{ width: "fit-content", margin: "0 auto" }} />
    </Div100vh>
  );
};
