import React from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Ufo(props) {
  const { nodes, materials } = useGLTF("assets/3d-models/ufo.glb");

  const ufoRef = useRef();

  useFrame((state, delta) => {
    ufoRef.current.rotation.y += delta * 0.5;
  });

  return (
    <>
      <Float
        speed={1.2} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-5, 5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group
          {...props}
          dispose={null}
          scale={[0.2, 0.2, 0.2]}
          position={[-15, 22, 0]}
          rotation={[Math.PI / 5, 0, 0]}
          ref={ufoRef}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Flying_Saucer.geometry}
            material={materials.Mat}
          />
        </group>
      </Float>
    </>
  );
}

useGLTF.preload("assets/3d-models/ufo.glb");
