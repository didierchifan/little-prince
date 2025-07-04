import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import styled from "styled-components";
import useLeva from "./utils/useLeva";
import CameraSettings from "./utils/CameraSettings";
import LightSettings from "./utils/LightSettings";
import Experience from "./experience/Experience";
import Tooltip from "./Tooltip";
import GlobalStyles from "./GlobalStyles";

function App() {
  const { backgroundColor } = useLeva();

  return (
    <>
      <GlobalStyles />
      <Container>
        <Leva hidden={true} />
        <Canvas gl={{ antialias: true, premultipliedAlpha: true }}>
          <CameraSettings />
          <LightSettings />
          <color attach="background" args={[backgroundColor]} />
          <Experience />
        </Canvas>
      </Container>
      <Tooltip />
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
