import React from "react";
import { Popover } from "react-tiny-popover";
import ActionButtons from "~src/components/ActionButtons/ActionButtons";
import $ from "./MorePopup.module.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddToFavorites: () => void;
  isFavorited: boolean;
}

const MorePopup = ({
  isOpen,
  onClose,
  onAddToFavorites,
  isFavorited,
  children, //
}: React.PropsWithChildren<Props>) => {
  return (
    <Popover
      isOpen={isOpen}
      positions={["bottom", "top", "left", "right"]}
      padding={10}
      align="end"
      onClickOutside={onClose}
      content={
        <div className={$.container}>
          <ActionButtons name="Open Pokémon" icon="open" />
          <ActionButtons
            name={isFavorited ? "Favorited" : "Add to favorites"}
            icon={isFavorited ? "favorited" : "unfavorited"}
            onClick={onAddToFavorites}
          />
        </div>
      }
    >
      <div>{children}</div>
    </Popover>
  );
};

export default MorePopup;
