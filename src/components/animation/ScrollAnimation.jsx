import React from "react";
import { styled } from "styled-components";
import ScrollAnimationContainer from "./ScrollAnimationContainer";

export default function ScrollAnimation() {
  return (
    <Container>
      <Message>스크롤을 내려보세요!</Message>
      <ScrollAnimationContainer>
        <Box />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer>
        <Box color="lightgray" />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer>
        <Box color="purple" />
      </ScrollAnimationContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 80vh;
  margin: 45vh 0;
`;

const Message = styled.h2`
  /* height: 100vh; */
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  color: #111;
`;

const Box = styled.div`
  width: 400px;
  height: 250px;
  background-color: ${(props) => props.color || "gold"};
  border: 1px solid #111;
`;
