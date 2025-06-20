import { Bloom } from "@react-three/postprocessing";
import { KernelSize, Resolution } from "postprocessing";

export default function BloomEffect() {
  return (
    // <Bloom
    //   intensity={0.1} // The bloom intensity.
    //   blurPass={undefined} // A blur pass.
    //   kernelSize={KernelSize.LARGE} // blur kernel size
    //   luminanceThreshold={0.01} // luminance threshold. Raise this value to mask out darker elements in the scene.
    //   luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
    //   mipmapBlur={true} // Enables or disables mipmap blur.
    //   resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
    //   resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
    // />
    <Bloom
      intensity={1.2}
      luminanceThreshold={0.6}
      luminanceSmoothing={0.05}
      mipmapBlur
    />
  );
}
