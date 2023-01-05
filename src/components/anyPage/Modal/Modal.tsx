import React, { FC } from "react";

import { useModalStyle } from "./style";
import { useModal } from "./useModal";

interface IModal {
  children?: React.ReactNode;
  active: boolean;
  setActive: () => void;
}

const Modal: FC<IModal> = ({ children, active, setActive }) => {
  console.log(children);
  const { handlerCloseModal } = useModal(setActive);
  return (
    <OverlaySC isActive={active} onClick={handlerCloseModal}>
      {children}
    </OverlaySC>
  );
};

const { OverlaySC } = useModalStyle();

export default React.memo(Modal);
