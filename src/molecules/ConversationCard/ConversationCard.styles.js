import styled from "styled-components";
import { device } from "../../globals/breakpoints";

export const ConversationCardStyles = styled.div`
  width: 20rem;
  height: 12.8rem;

  margin: 0 auto;
  border-radius: 10px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 10px 10px 8px #888888;

  @media ${device.sm} {
    width: 30rem;
    height: 16.8rem;
  }

  background-color: ${({ category }) => {
    if (category === "relationships") {
      return "#FFD3E6";
    } else if (category === "general") {
      return "#F9FAD1";
    } else if (category === "confessions") {
      return "#D8D5FC";
    }
  }};
`;

export const CardTextStyles = styled.p`
  font-size: 2.8vh;
  width: 15.75rem;

  font-family: "Oswald", sans-serif;

  letter-spacing: -1px;
  font-weight: 400;
  text-align: justify;
  text-transform: uppercase;

  margin-top: 2rem;
  margin-bottom: 2.8rem;
  position: absolute;

  @media ${device.sm} {
    width: 22.75rem;
  }
`;

export const CategoryTextStyles = styled.p`
  width: 22.75rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  letter-spacing: -1px;
  font-weight: 200;

  position: absolute;
  bottom: 7%;
  text-align: center;
`;
