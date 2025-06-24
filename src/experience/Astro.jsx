import React from "react";
import { Float, useGLTF } from "@react-three/drei";

export default function Astro(props) {
  const { nodes, materials } = useGLTF("assets/3d-models/Astronaut.glb");
  return (
    <>
      <Float
        speed={1.2} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-5, 15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group
          {...props}
          dispose={null}
          scale={[5, 5, 5]}
          rotation={[Math.PI / 6, 0, 0]}
          position={[-3, -8, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Astronaut_mesh.geometry}
            material={materials.Astronaut_mat}
          />
        </group>
      </Float>
    </>
  );
}

useGLTF.preload("assets/3d-models/Astronaut.glb");
