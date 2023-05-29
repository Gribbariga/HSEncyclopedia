import { MenuItem, MenuList, Select, TextField } from "@mui/material";
import styled, { FlattenSimpleInterpolation } from "styled-components";

const SelectMUI = styled(TextField)<{
  $styleSelect?: FlattenSimpleInterpolation;
}>`
  ${({ $styleSelect }) => $styleSelect};
`;

const MenuItemMUI = styled(MenuItem)`
  font-size: 20px;
  color: #ffc300;
`;

const MenuMUI = styled(MenuList)`
  background: red;
`;
export const useSelectStyle = () => ({
  MenuMUI,
  SelectMUI,
  MenuItemMUI,
});
