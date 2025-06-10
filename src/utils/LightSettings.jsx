export default function LightSettings() {
  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight position={[2, 1, 0]} intensity={5} />
    </>
  );
}
