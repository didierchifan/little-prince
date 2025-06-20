import { Environment } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";

export default function LightSettings() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 5, 0]} intensity={5} />

      <Sparkles count={800} speed={2} scale={100} size={35} />
      <Environment
        background
        backgroundBlurriness={0.06}
        files={"/assets/fantasy-env-color.jpg"}
        rotation={[0, Math.PI / 2, 0]}
      />
    </>
  );
}
