import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import styled from "styled-components";
import * as THREE from "three";

export default function BusinessCardAnimation() {
  return (
    <Container>
      <Canvas
        camera={{
          position: [0, 0, 8],
        }}
      >
        <color attach="background" args={["white"]} />
        <ambientLight />
        <BusinessCard scale={[9, 5, 0.01]} position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </Container>
  );
}

function BusinessCard(props) {
  const meshRef = useRef(null);
  const texture = useTexture("/textures/black-concrete-texture.jpg");

  useFrame((state) => {
    if (meshRef.current === null) return;

    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} />
      <HtmlWrapper occlude distanceFactor={1} position={[0, 0, 0.51]} transform>
        <CompanyNameInput
          type="text"
          placeholder="귀사의 이름을 입력해주세요"
        />
        <ContactWrapper>
          <div>
            <ContactItem>김리안</ContactItem>
            <ContactJob>Front-End Web Developer</ContactJob>
          </div>
          <div>
            <ContactItem>{`+82(0)1090011250`}</ContactItem>
            <ContactItem>{`5ffcut@gmail.com`}</ContactItem>
          </div>
        </ContactWrapper>
      </HtmlWrapper>
    </mesh>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const HtmlWrapper = styled(Html)`
  width: 372px;
  height: 356px;
  display: flex;
  flex-direction: column;
  font-family: "Spoqa Han Sans Neo";
  color: white;
  letter-spacing: -0.025em;
`;

const CompanyNameInput = styled.input`
  background: none;
  border: 0;
  padding: 0;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  color: white;
  letter-spacing: -0.025em;

  &::placeholder {
    text-decoration: underline;
  }
`;

const ContactWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 14px;
`;

const ContactItem = styled.div`
  margin-top: 12px;
`;

const ContactJob = styled.div`
  margin-top: 12px;
  color: gray;
`;
