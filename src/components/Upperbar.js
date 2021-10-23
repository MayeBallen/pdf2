import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/Logo.svg";

const Container = styled.div`
  grid-column: 1 / 13;
  grid-row: 1 / 2;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px 0.5px rgba(0, 0, 0, 0.25);
  background: #000a12;

  @media (min-width: 300px) and (max-width: 425px) {
    grid-column: 1 / 5;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ImgLogo = styled.img`
  height: 65px;
`;

const UpperBar = () => {
  return (
    <Container>
      <ImgLogo src={Logo} />
    </Container>
  );
};

export default UpperBar;
