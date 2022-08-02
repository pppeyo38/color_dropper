import { useState } from "react";

// 色の16進数コード
export const useColorHex = () => {
  const [colorHex, onChangeColor] = useState<string>("#fff");

  return { colorHex, onChangeColor };
};
