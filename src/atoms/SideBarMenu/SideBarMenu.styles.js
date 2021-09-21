import styled from "styled-components";
import { device } from "../../globals/breakpoints";

export const SideBarMenuStyles = styled.div`
  height: 100vh;
  width: ${({ menuHidden }) => (menuHidden ? "0" : "350px")};
  transiton: 0.5s;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #242222;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
`;

export const SideBarMenuTextStyle = styled.ol`
  position: absolute;
  width: 500px;
  & > li {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 1.3rem;
    line-height: 3;

    @media ${device.xs} {
      font-size: 1.1rem;
    }
  }
  transition: 0.3s;
`;

//something wrong with the text, it doesn't ease in/out all together, but letter by letter
