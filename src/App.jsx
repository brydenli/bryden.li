import React from "react";
import { Canvas } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import { Donut } from "./meshes/Donut";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <AsciiRenderer bgColor="black" fgColor="green" characters="bryden  " resolution={0.18} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Donut />
      </Canvas>
    </div>
  );
}