import styled from "styled-components";

export const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  justify-content: center;
`;

export const TestLinkStyles = styled.div`
  & > a {
    position: relative;
    color: #000;
    text-decoration: none;
  }

  & > a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform: scale(0);
    transition: transform 0.3s ease;
  }
  & > a:hover::before {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

//how to ensure this is centered without having to use padding-left
//why is justify content not working
