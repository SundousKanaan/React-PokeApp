import SidebarButton from "../Buttons/SidebarButton";
import $ from "./EmptyState.module.scss";

interface Props {
  mainTitle: string;
  description?: string;
  showButton: boolean;
  buttonText?: string;
}
// "Catch a Pokémon"
const EmptyState = ({ mainTitle, description, showButton, buttonText }: Props) => {
  return (
    <div className={$.container}>
      <h2 className={$.title}>{mainTitle}</h2>
      {description ? <p className={$.description}>{description}</p> : null}
      <img
        className={$.img}
        src="/public/icons/active-pokeball.svg"
        alt="Pokeball illustration"
      />
      {showButton ? (
        <span className={$.linkContainer}>
          <SidebarButton
            name={buttonText ? `${buttonText}` : "Catch a Pokémon"}
            icon="active-pokeball"
            locationPath="/"
            isActive={true}
          />
        </span>
      ) : null}
    </div>
  );
};

export default EmptyState;
