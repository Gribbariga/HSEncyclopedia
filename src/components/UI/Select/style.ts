import { Select, TextField } from "@mui/material";
import styled, { FlattenSimpleInterpolation } from "styled-components";

const SelectMUI = styled(TextField)<{
  $styleSelect?: FlattenSimpleInterpolation;
}>`
  ${({ $styleSelect }) => $styleSelect};
`;

export const useSelectStyle = () => ({
  SelectMUI,
});
