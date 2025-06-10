import React from "react";
import { useGLTF } from "@react-three/drei";

export default function LittlePrincePlanet(props) {
  const { nodes, materials } = useGLTF(
    "assets/3d-models/little-prince-model.glb"
  );
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI, 0]} draggable={false}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.planet01.geometry}
        material={materials.planet_asli}
        position={[7.534, -30.42, -0.791]}
      />
      <group position={[8.685, -9.489, -1.752]}>
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
      </group>
      <mesh
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
      <group position={[-20.086, -8.292, -1.385]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet02_1.geometry}
          material={materials.planet_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet02_2.geometry}
          material={materials.CROWN}
        />
      </group>
      <group position={[21.094, 4.958, -9.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet03_1.geometry}
          material={materials.HAT_STRIP}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet03_2.geometry}
          material={materials["planet_2.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet03_3.geometry}
          material={materials["kolah.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.planet04.geometry}
        material={materials.planet_3}
        position={[-0.715, 14.43, 3.681]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.planet05.geometry}
        material={materials.planet_5}
        position={[-17.99, 25.379, -8.896]}
      />
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
