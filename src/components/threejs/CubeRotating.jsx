import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/**
 * 큐브에 mouse over/out 시 애니메이션 실행
 */
export default function CubeRotating() {
  return (
    <Canvas
      camera={{
        position: [2, 2, 5],
      }}
    >
      <directionalLight position={[1, 0, 0]} intensity={1} />
      <directionalLight intensity={2} />
      <ambientLight intensity={1} />
      <Cube position={[-1, 0, 0]} />
      <Cube position={[0.5, 0, -6]} />
      <OrbitControls autoRotate={false} />
    </Canvas>
  );
}

function Cube(props) {
  const meshRef = useRef(null);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current === null) return;
    if (!active) return;

    meshRef.current.rotation.x -= delta;
    meshRef.current.rotation.y -= delta;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      {...props}
    >
      <boxGeometry args={active ? [1.2, 1.2, 1.2] : [1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={active ? 0xabbeea : 0x7fbeea}
      />
    </mesh>
  );
}
