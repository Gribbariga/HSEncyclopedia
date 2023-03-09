import { mediaQuery } from "@/lib/service/service";
import styled from "styled-components";

const InfoListSC = styled("ul")`
  margin-bottom: 20px;
`;

const ListItemSC = styled("li")`
  color: #ffffff;
  margin-bottom: 5px;
  & > span {
    color: #ffe5ac;
  }
  ${mediaQuery(890)} {
    text-align: center;
  }
`;

export const useInfoListStyle = () => ({ InfoListSC, ListItemSC });
