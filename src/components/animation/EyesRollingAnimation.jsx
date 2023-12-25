import React from "react";
import EyeRolling from "./EyeRolling";
import { styled } from "styled-components";

export default function EyesRollingAnimation() {
  return (
    <Container>
      <Message>watching everything you do</Message>
      <EyesContainer>
        <EyeRolling />
        <EyeRolling />
        <EyeRolling />
        <EyeRolling />
      </EyesContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #111;
`;

const Message = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: gold;
`;

const EyesContainer = styled.div`
  display: flex;
  gap: 20px;
`;
