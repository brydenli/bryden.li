import * as React from "react";
// import the canvas element from r3f
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[3, 3, 1]}> 
          <torusGeometry args={[2, 1, 100, 100]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}