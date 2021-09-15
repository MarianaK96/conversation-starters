import styled from "styled-components";

export const StarterCardStyles = styled.div`
  width: 30rem;
  height: 16.8rem;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #242222;
  position: absolute;
  z-index: 10;
  bottom: 34%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 10px 10px 8px #888888;

  cursor: ${({ cardVisible }) => (cardVisible ? "pointer" : "auto")};

  opacity: ${({ cardVisible }) => (cardVisible ? "1" : "0")};
  transition: opacity 1s ease;
`;

export const StarterCardTextStyles = styled.p`
  font-size: 3.5rem;
  font-style: italic;
  font-family: "Teko", sans-serif;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  line-height: 1.3;
`;
