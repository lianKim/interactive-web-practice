import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import React, { useRef, useState } from "react";
import roboto from "../../assets/Roboto_Bold.json";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";
import { getRandomNumber } from "../../utils/random";

extend({ TextGeometry });

const LETTERS = "LAST UPDATED".split("");
/**
 * 3D text 마우스 over/out 이벤트 애니메이션
 */
export default function TextAnimation() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 14],
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[1, 0, 0]} intensity={3} />
      <pointLight position={[0, 0, 5]} intensity={10} />
      {/* 이펙트 컨트롤 필요한 요소를 Select 컴포넌트로 래핑해서 enabled 속성 이용 */}
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor={"yellow"}
            edgeStrength={100}
            width={500}
          />
        </EffectComposer>
        {LETTERS.map((val, idx) => (
          // Text 컴포넌트가 Select 컴포넌트로 래핑됨
          <Text
            str={val}
            pos={[(idx - 5.5) * 2, 0, getRandomNumber(0, 4) / 10]}
            key={val + idx}
          />
        ))}
      </Selection>
      <OrbitControls />
    </Canvas>
  );
}

function Text({ str = "", pos = [0, 0, 0] }) {
  const font = new FontLoader().parse(roboto);
  const meshRef = useRef(null);
  const [isTouched, setIsTouched] = useState(false);
  const randomNumber = getRandomNumber(1, 4);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // 둥실둥실
    const t = state.clock.getElapsedTime() + randomNumber;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      Math.cos(t / 10) / 10 + 0.25,
      0.1
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      Math.sin(t / 10) / 4,
      0.1
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      Math.sin(t / 10) / 10,
      0.1
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      (-2 + Math.sin(t)) / 3,
      0.1
    );

    if (!isTouched) return;
    // 마우스 오버 시 scale up
    meshRef.current.scale.x += 0.01;
    meshRef.current.scale.y += 0.01;

    if (meshRef.current.scale.z >= 1) return;

    meshRef.current.scale.z += 0.01;
  });

  return (
    // enabled가 true면 부모 컴포넌트의 Selection 내부 이펙트 발현 (outline)
    <Select enabled={isTouched}>
      <mesh
        ref={meshRef}
        position={pos}
        scale={[1, 1, 0.01]}
        onPointerOver={() => setIsTouched(true)}
        onPointerOut={() => setIsTouched(false)}
      >
        <textGeometry args={[str, { font, size: 1, height: 1 }]} />

        <meshPhysicalMaterial attach="material" color={"orangered"} />
      </mesh>
    </Select>
  );
}
