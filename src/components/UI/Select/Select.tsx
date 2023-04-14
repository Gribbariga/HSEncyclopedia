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
  onChange: (name: string) => void;
  onSelectCallback?: (...args: any[]) => void;
  value: string;
  name: string;
  label?: string;
  list: IList[];
}

const Select: FC<ISelectProps> = ({
  onSelectCallback,
  styleSelect,
  styleMenu,
  onChange,
  value,
  label,
  list,
  name,
}) => {
  const { isOpen, handleSelect, handleClickSelect } = useSelect(onChange);
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
            MenuListProps: {
              style: { maxHeight: "300px", zIndex: 10000 },
            },
          },
        }}>
        <MenuItem
          value={label}
          disabled
          style={{ overflow: "hidden", visibility: "hidden", display: "none" }}>
          {label}
        </MenuItem>
        {list.map((item) => (
          <MenuItemMUI
            key={item.name}
            onClick={handleSelect(name, item.value, onSelectCallback)}
            value={item.value}>
            {item.name}
          </MenuItemMUI>
        ))}
      </SelectMUI>
    </>
  );
};

const { MenuMUI, SelectMUI, MenuItemMUI } = useSelectStyle();

export default Select;
