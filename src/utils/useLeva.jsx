import { useControls } from "leva";

export default function useLeva() {
  const controls = useControls("General Settings", {
    backgroundColor: {
      value: "#bde0fe",
    },
    boxColor: {
      value: "#fb6f92",
    },
  });

  return controls;
}
