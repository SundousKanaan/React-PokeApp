import classnames from "classnames";
import { Link } from "react-router-dom";
import $ from "./SidebarButtons.module.scss";

interface Props {
  name: string;
  icon: string;
  locationPath: string;
  isActive: boolean;
}

const sidebarButton = ({ name, icon, locationPath, isActive }: Props) => {
  const iconSrc = `/icons/${icon}.svg`;

  return (
    <Link
      to={locationPath}
      className={classnames($.link, $.inactiveButton, {
        [$.activeButton]: isActive,
      })}
    >
      <img src={iconSrc} alt={`${icon} svg icon`} />
      <span>{name}</span>
    </Link>
  );
};

export default sidebarButton;
