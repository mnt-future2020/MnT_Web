import React from "react";
import { Canvas } from "@react-three/fiber";
import { AICore3D } from "./AICore3D";

interface Props {
    isHovered: boolean;
}

const AICore3DScene: React.FC<Props> = ({ isHovered }) => (
    <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
    >
        <AICore3D isHovered={isHovered} />
    </Canvas>
);

export default AICore3DScene;
