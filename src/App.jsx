import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import useLeva from "./utils/useLeva";
import CameraSettings from "./utils/CameraSettings";
import LightSettings from "./utils/LightSettings";

function App() {
  const { backgroundColor, boxColor } = useLeva();

  return (
    <>
      <Title>Little Prince</Title>
      <Container>
        <Canvas>
          <CameraSettings />
          <LightSettings />
          <color attach="background" args={[backgroundColor]} />

          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={boxColor} />
          </mesh>
        </Canvas>
      </Container>
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

const Title = styled.h1`
  z-index: 5;
  color: tomato;
  font-weight: 700;
  position: fixed;
  top: 15px;
`;
