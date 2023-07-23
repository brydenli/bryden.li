import React from "react";
import { useFrame } from '@react-three/fiber'

export const Donut = () => {
  const donutMesh = React.useRef();
  useFrame(({clock}) => {
    donutMesh.current.rotation.y = clock.getElapsedTime() / 2;
  })
  return (
    <mesh
      rotation={[3, 3, 1]}
      ref={donutMesh}
      > 
      <torusGeometry args={[2, 1, 100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}
