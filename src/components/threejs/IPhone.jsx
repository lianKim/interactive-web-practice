import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

export default function IPhoneController() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <pointLight intensity={1} position={[-4, -1, 4]} />
      <directionalLight intensity={0.5} position={[4, 1, 4]} />
      <IPhone scale={30} />
      <OrbitControls />
    </Canvas>
  );
}

function IPhone(props) {
  const { nodes, materials } = useGLTF("/models/iPhone14_black.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iPhone14_black.geometry}
        material={materials.iPhone14_black2}
        position={[0.776, -0.116, 0.301]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}
