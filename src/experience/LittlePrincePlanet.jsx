import React from "react";
import { useGLTF, Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function LittlePrincePlanet(props) {
  const { nodes, materials } = useGLTF(
    "assets/3d-models/little-prince-model.glb"
  );

  const brownPlanet = useRef();
  const greenPlanetRef = useRef();
  const hatPlanetRef = useRef();
  const pinkPlanet = useRef();
  const yellowPlanet = useRef();
  const planeRef = useRef();

  const texture = useTexture("assets/texture-1.webp");
  const textureTwo = useTexture("assets/texture-2.webp");
  const textureThree = useTexture("assets/texture-3.webp");
  const textureFour = useTexture("assets/texture-4.webp");

  useFrame((state, delta) => {
    // Planet rotations
    greenPlanetRef.current.rotation.y += delta * 0.3;
    hatPlanetRef.current.rotation.y -= delta * 0.2;
    pinkPlanet.current.rotation.y += delta * 0.25;
    yellowPlanet.current.rotation.y -= delta * 0.15;
    brownPlanet.current.rotation.y += delta * 0.2;

    // Plane propeller rotation
    planeRef.current.rotation.z += delta * 2;
  });

  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
      draggable={false}
    >
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh
          ref={brownPlanet}
          castShadow
          receiveShadow
          geometry={nodes.planet01.geometry}
          material={materials.planet_asli}
          position={[7.534, -30.42, -0.791]}
        ></mesh>

        {/* <group position={[8.685, -9.489, -1.752]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.littlePrince_1.geometry}
            material={materials.badan}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.littlePrince_2.geometry}
            material={materials.golbarg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.littlePrince_3.geometry}
            material={materials.cheshm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.littlePrince_4.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.littlePrince_5.geometry}
            material={materials.skin}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.littlePrince_6.geometry}
            material={materials.ASLI}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.littlePrince_7.geometry}
            material={materials.material_32}
          />
        </group> */}
      </Float>

      {/* plane */}

      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group>
          <mesh
            ref={planeRef}
            castShadow
            receiveShadow
            geometry={nodes.elice.geometry}
            material={materials.malakhe}
            position={[-18.186, 12.228, -4.448]}
          />

          <group position={[-18.064, 12.38, 1.242]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plane_1.geometry}
              material={materials.plane_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plane_2.geometry}
              material={materials.plane_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plane_3.geometry}
              material={materials.plane_4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plane_4.geometry}
              material={materials.plane_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plane_5.geometry}
              material={materials["setare.001"]}
            />
          </group>
        </group>
      </Float>

      {/* green planet */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.6} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group
          ref={greenPlanetRef}
          position={[-20.086, -8.292, -1.385]}
          scale={[12, 12, 12]}
        >
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial map={textureThree} />
          </mesh>
        </group>
      </Float>

      {/* hat planet */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.35} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group
          ref={hatPlanetRef}
          position={[21.094, 4.958, -9.251]}
          scale={[8.5, 8.5, 8.5]}
        >
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[1, 64, 64]} />

            <meshStandardMaterial
              map={texture}
              roughness={0.7}
              metalness={0.0}
              side={THREE.FrontSide}
            />
          </mesh>
        </group>
      </Float>

      {/* pink planet */}

      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.35} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh
          ref={pinkPlanet}
          castShadow
          receiveShadow
          position={[-0.715, 14.43, 3.681]}
          scale={[8, 8, 8]}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={textureFour} />
        </mesh>
      </Float>

      {/* yellow planet */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.55} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh
          ref={yellowPlanet}
          castShadow
          receiveShadow
          // geometry={nodes.planet05.geometry}
          position={[-17.99, 25.379, -8.896]}
          scale={[5.5, 5.5, 5.5]}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={textureTwo} />
        </mesh>
      </Float>

      {/* tower planet */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.55} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group position={[4.72, 39.284, -0.826]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet06_1.geometry}
            material={materials.planet_6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet06_2.geometry}
            material={materials.fanoos}
          />
        </group>
      </Float>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.planet07.geometry}
        material={materials.planet_89}
        position={[15.543, 43.868, 4.905]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.planet08.geometry}
        material={materials.planet_89}
        position={[-4.227, 48.765, 5.194]}
      />
      <group position={[-18.651, 47.245, 9.339]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sun01_1.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sun01_2.geometry}
          material={materials.sun_strip}
        />
      </group>
      <group position={[23.015, 32.22, 5.284]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sun02_1.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sun02_2.geometry}
          material={materials.sun_strip}
        />
      </group>
    </group>
  );
}

useGLTF.preload("assets/3d-models/little-prince-model.glb");
