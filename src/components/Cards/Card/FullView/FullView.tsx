import Modal from "@/components/anyPage/Modal/Modal";
import React, { FC } from "react";
import ReactDOM from "react-dom";

interface IFullView {
  active: boolean;
  setActive: () => void;
}

const FullView: FC<IFullView> = ({ active, setActive }) => {
  return ReactDOM.createPortal(
    <Modal active={active} setActive={setActive}>
      <div>21214</div>
    </Modal>,
    document.body,
  );
};

export default React.memo(FullView);
