import { useRef, useEffect } from "react";
import { CameraControls } from "@react-three/drei";
import gsap from "gsap";

export default function CameraSettings() {
  const controlsRef = useRef();

  useEffect(() => {
    const startDistance = 100;
    const endDistance = 65;

    const state = { distance: startDistance };

    gsap.to(state, {
      distance: endDistance,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        controlsRef.current?.setLookAt(0, 0, state.distance, 0, 0, 0, false);
      },
    });
  }, []);

  return (
    <CameraControls
      ref={controlsRef}
      makeDefault
      minAzimuthAngle={-0.436}
      maxAzimuthAngle={0.436}
      minPolarAngle={Math.PI / 2 - 0.5}
      maxPolarAngle={Math.PI / 2 + 0.125}
      minDistance={10}
      maxDistance={65}
      dampingFactor={0.05}
      enabled={true}
      truckSpeed={0}
    />
  );
}
