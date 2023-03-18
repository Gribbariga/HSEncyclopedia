import { mediaQuery } from "@/lib/service/service";
import styled from "styled-components";

const ListSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 60px;
`;
const ClassTitle = styled("h2")`
  position: relative;
  margin: 0 auto;
  color: #050301;
  text-align: center;
  width: 100%;
  margin: 20px 0 20px 0;
  font-size: 35px;
  &::after,
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #000000;
    height: 3px;
    width: 33%;
  }
  &::after {
    right: 0;
  }
  &::before {
    left: 0;
  }
  ${mediaQuery(1120)} {
    &::after,
    ::before {
      width: 25%;
    }
  }
  ${mediaQuery(850)} {
    font-size: 30px;
  }
  ${mediaQuery(1120)} {
    &::after,
    ::before {
      width: 15%;
    }
  }
  ${mediaQuery(500)} {
    font-size: 21px;
  }
`;

export const useCardsStyle = () => ({
  ListSC,
  ClassTitle,
});
