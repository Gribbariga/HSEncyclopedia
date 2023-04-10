import react, { FC } from "react";
import { useSelectStyle } from "./style";
import { FlattenSimpleInterpolation } from "styled-components";
import { MenuItem, TextField } from "@mui/material";
import icon from "../../../assets/icon/selectIcon.svg";
import { useSelect } from "./useSelect";

interface IList {
  value: string;
  name: string;
}

interface ISelectProps {
  styleSelect: FlattenSimpleInterpolation;
  styleMenu?: FlattenSimpleInterpolation;
  onChange: (name: string, value: string) => () => void;
  value: string;
  name: string;
  label?: string;
  list: IList[];
}

const Select: FC<ISelectProps> = ({
  styleSelect,
  styleMenu,
  onChange,
  value,
  label,
  list,
  name,
}) => {
  const { isOpen, handleClickSelect } = useSelect();
  return (
    <>
      <SelectMUI
        select={true}
        onClick={handleClickSelect}
        value={value || label}
        $styleSelect={styleSelect}
        SelectProps={{
          IconComponent: icon,
          open: isOpen,
          MenuProps: {
            disableScrollLock: true,
            MenuListProps: { style: {} },
          },
        }}>
        <MenuItem
          value={label}
          disabled
          style={{ overflow: "hidden", visibility: "hidden", display: "none" }}>
          {label}
        </MenuItem>
        {list.map((item) => (
          <MenuItem
            key={item.value}
            onClick={onChange(name, item.value)}
            value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </SelectMUI>
    </>
  );
};

const { SelectMUI } = useSelectStyle();

export default Select;
