import { useTexture } from "@react-three/drei";
import React, { forwardRef } from "react";

const Moon = forwardRef((props, ref) => {
  const moonTexture = useTexture("/assets/moon/2k_moon.jpg");

  return (
    <mesh ref={ref} {...props} rotation={[0, Math.PI, 0]}>
      <sphereGeometry args={[0.27, 32, 32]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
});

export default Moon;
