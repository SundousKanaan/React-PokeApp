import * as React from "react";
import $ from "./ModeButton.module.scss";

interface Props {
  onModeChange: () => void;
  modeState: boolean;
}

const ModeButton = ({ onModeChange, modeState }: Props) => {
  const [modeImg, setModeImg] = React.useState("Solrock");
  const [mode, setMode] = React.useState("Light Mode");

  React.useEffect(() => {
    setModeImg(modeState ? "Lunatone" : "Solrock");
    setMode(modeState ? "Dark Mode" : "Light Mode");
  });

  return (
    <>
      <button className={$.modeButton} onClick={onModeChange}>
        <p className={$.modeState}>{mode}</p>
        <img
          className={$.img}
          src={`/icons/${modeImg}.svg`}
          alt={`${modeImg} svg icon`}
        />
      </button>
    </>
  );
};

export default ModeButton;
