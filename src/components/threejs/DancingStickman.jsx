import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  useScroll,
  ScrollControls,
  SoftShadows,
} from "@react-three/drei";
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing";

export default function DancingStickman() {
  return (
    <Canvas
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 2.5], fov: 50 }}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <fog attach="fog" args={["#f0f0f0", 0, 20]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[-2, 5, 5]} />
      <ScrollControls damping={0.2} maxSpeed={0.5} pages={3}>
        <Stickman position={[0, 0, 0]} rotation={[0, 135, 0]} scale={0.1} />
      </ScrollControls>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]}>
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.75} />
      </mesh>
      <SoftShadows size={40} samples={16} />
      <EffectComposer disableNormalPass multisampling={4}>
        <TiltShift2 blur={1} />
      </EffectComposer>
    </Canvas>
  );
}

function Stickman(props) {
  const group = useRef();
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF("/models/stickman.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.ArmatureAction.reset().play().paused = true;
    actions.PoseLib.reset().play().paused = true;
  }, [actions]);

  useFrame(() => {
    actions.ArmatureAction.time =
      actions.ArmatureAction.getClip().duration * scroll.offset;
    actions.PoseLib.time = actions.PoseLib.getClip().duration * scroll.offset;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <skinnedMesh
        name="hero"
        geometry={nodes.hero.geometry}
        material={materials.Material}
        skeleton={nodes.hero.skeleton}
      />
      <primitive object={nodes.stomach_3} />
    </group>
  );
}
