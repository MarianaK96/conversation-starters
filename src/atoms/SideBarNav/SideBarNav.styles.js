import styled from "styled-components";
import { device } from "../../globals/breakpoints";

export const SideBarTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 1.8rem;

  @media ${device.xs} {
    font-size: 1.4rem;
  }

  cursor: pointer;
  border-bottom: ${({ menuHidden }) =>
    menuHidden ? "3px solid #000000" : "3px solid #FFFFFF"};

  color: ${({ menuHidden }) => (menuHidden ? "#000000" : "#FFFFFF")};
`;
