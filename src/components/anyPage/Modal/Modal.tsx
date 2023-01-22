import React, { FC } from "react";

import { useModalStyle } from "./style";
import { useModal } from "./useModal";

interface IModal {
  children?: React.ReactNode;
  isActive: boolean;
  setActive: () => void;
}

const Modal: FC<IModal> = ({ children, isActive, setActive }) => {
  const { handlerCloseModal } = useModal(setActive);
  return (
    <OverlaySC isActive={isActive} onClick={handlerCloseModal}>
      {children}
    </OverlaySC>
  );
};

const { OverlaySC } = useModalStyle();

export default React.memo(Modal);
