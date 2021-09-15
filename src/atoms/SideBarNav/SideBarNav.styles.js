import styled from "styled-components";

export const SideBarTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 1.8rem;

  cursor: pointer;
  border-bottom: ${({ menuHidden }) =>
    menuHidden ? "3px solid #000000" : "3px solid #FFFFFF"};

  color: ${({ menuHidden }) => (menuHidden ? "#000000" : "#FFFFFF")};
`;
