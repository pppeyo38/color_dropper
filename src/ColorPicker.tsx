import { ChromePicker } from "react-color";
import styles from "./styles/ColorPicker.module.scss";

export const ColorPicker = () => {
  return (
    <div className={styles.text}>
      <ChromePicker></ChromePicker>
    </div>
  );
};
