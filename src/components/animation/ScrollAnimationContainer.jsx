import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { keyframes, styled } from "styled-components";

export default function ScrollAnimationContainer({ children }) {
  const { isInView, targetRef } = useScrollAnimation({ threshold: 0 });

  return (
    <Container ref={targetRef} className={isInView ? "visible" : ""}>
      {children}
    </Container>
  );
}

const keyFrames = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  &.visible {
    animation: ${keyFrames} 800ms forwards;
    animation-timing-function: cubic-bezier(0, 0.48, 0, 1);
  }
`;
