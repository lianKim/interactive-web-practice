import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { styled } from "styled-components";

export default function CubeRotating() {
  return (
    <StyledCanvas>
      <OrbitControls autoRotate={false} />
      <mesh>
        <directionalLight position={[1, 0, 0]} intensity={1} />
        <directionalLight intensity={2} />
        <ambientLight intensity={1} />
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={0x7fbeea} />
      </mesh>
    </StyledCanvas>
  );
}

const StyledCanvas = styled(Canvas)`
  width: 100%;
  height: 100vh;
`;
