import React from "react";
import $ from "./ActionButtons.module.scss";

interface Props {
  name: string;
  icon: string;
  onClick?: () => void | undefined;
}

const ActionButtons: React.FC<Props> = ({ name, icon, onClick }) => {
  const iconSrc = `/icons/${icon}.svg`;

  return (
    <button className={$.button} onClick={onClick}>
      <img src={iconSrc} alt={`${icon} svg icon`} />
      <span className={$.buttonText}>{name}</span>
    </button>
  );
};

export default ActionButtons;
