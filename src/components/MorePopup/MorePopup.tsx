import React, { useState, useEffect } from "react";
import { Popover } from "react-tiny-popover";
import ActionButtons from "~src/components/ActionButtons/ActionButtons";
import $ from "./MorePopup.module.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddToFavorites: () => void;
  isFavorited: boolean;
  toggleDetailsView: () => void;
}

const MorePopup = ({
  isOpen,
  onClose,
  onAddToFavorites,
  isFavorited,
  toggleDetailsView,
  children,
}: React.PropsWithChildren<Props>) => {
  const [showState, setShowState] = useState(false);
  function handelToggleShowState() {
    setShowState(!showState);
  }

  return (
    <Popover
      isOpen={isOpen}
      positions={["bottom", "top", "left", "right"]}
      padding={10}
      align="end"
      onClickOutside={onClose}
      content={
        <div className={$.container}>
          <ActionButtons
            name="Open Pokémon"
            icon="open"
            onClick={() => {
              handelToggleShowState();
              toggleDetailsView();
            }}
          />
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
