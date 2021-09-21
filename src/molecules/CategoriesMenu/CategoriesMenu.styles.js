import styled from "styled-components";
import { device } from "../../globals/breakpoints";

export const MenuBtnStyles = styled.div`
  padding-bottom: 5rem;
  display: flex;
  justify-content: space-evenly;

  opacity: ${({ cardVisible }) => (cardVisible ? "0" : "1")};
  transition: opacity 1s ease;

  & > button {
    text-decoration: none;
    border: none;
    background-color: transparent;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.3rem;

    text-transform: capitalize;

    @media ${device.sm} {
      font-size: 1.2rem;
    }
  }

  & > button:hover {
    background-color: #c3c0c0;
    border-radius: 2px;
  }
`;

//why doesn't dispay flex here show the items side by side? is it because it is inheriting the flex-direction
//from the body of the page?

//how to make them look clickable? border: 1px solid #6d6969;
