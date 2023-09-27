import SidebarButton from "../Buttons/SidebarButton";
import $ from "./EmptyState.module.scss";

interface Props {
  description?: string;
  showButton: boolean;
}

const EmptyState = ({ description, showButton }: Props) => {
  return (
    <div className={$.container}>
      <h2 className={$.title}>No Pokemon caught</h2>
      {description ? <p className={$.description}>{description}</p> : null}
      <img
        className={$.img}
        src="/public/icons/Active-pokeball.svg"
        alt="Pokeball illustration"
      />
      {showButton ? (
        <span className={$.linkContainer}>
          <SidebarButton
            name="Catch a Pokémon"
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
