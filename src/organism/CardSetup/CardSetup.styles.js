import styled from "styled-components";

export const CardSetupStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: 482px;
`;

export const NextIconStyles = styled.div`
  padding-top: 2rem;
  margin-left: 1rem;
  & > svg {
    cursor: pointer;
    transform: scale(1.3);
    padding: 0.3rem;
  }

  & > svg:hover {
    background-color: #c3c0c0;
    border-radius: 2px;
  }
`;

export const IconStyles = styled.div`
  display: flex;
`;
