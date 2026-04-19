import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Sphere, Trail } from '@react-three/drei';

interface AICore3DProps {
    isHovered: boolean;
}

export const AICore3D: React.FC<AICore3DProps> = ({ isHovered }) => {
    const outerSphereRef = useRef<THREE.Mesh>(null);
    const innerSphereRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);
    const orbitalRingsGroup = useRef<THREE.Group>(null);
    const particleSystemRef = useRef<THREE.Points>(null);

    // Colors based on MnT design system
    const coreColor = '#00F5D4';
    const wireframeColor = '#0EA5E9';
    const particleColor = '#22D3EE';

    // --- Rotations & Animations ---
    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Subtle idle rotations
        if (outerSphereRef.current) outerSphereRef.current.rotation.y = time * 0.05;
        if (innerSphereRef.current) innerSphereRef.current.rotation.y = time * -0.08;
        if (innerSphereRef.current) innerSphereRef.current.rotation.x = time * 0.05;
        if (wireframeRef.current) wireframeRef.current.rotation.y = time * 0.1;
        if (wireframeRef.current) wireframeRef.current.rotation.x = time * 0.08;
        if (orbitalRingsGroup.current) orbitalRingsGroup.current.rotation.y = time * 0.06;
        if (orbitalRingsGroup.current) orbitalRingsGroup.current.rotation.z = Math.sin(time * 0.2) * 0.1;

        // Breathing pulse for inner glow material
        if (innerSphereRef.current && innerSphereRef.current.material) {
            const material = innerSphereRef.current.material as THREE.MeshStandardMaterial;
            material.emissiveIntensity = 2 + Math.sin(time * 2) * 0.5 + (isHovered ? 1.5 : 0);
        }
    });

    // --- Particle System Logic ---
    const particleCount = 250;
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            // Random spherical distribution
            const radius = 2 + Math.random() * 3;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos((Math.random() * 2) - 1);
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        return positions;
    }, [particleCount]);

    useFrame((state) => {
        if (particleSystemRef.current) {
            particleSystemRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <>
            <ambientLight intensity={0.2} color="#ffffff" />
            <pointLight position={[0, 0, 0]} intensity={20} distance={10} color={coreColor} decay={2} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-5, -5, -5]} intensity={0.5} color={wireframeColor} />

            {/* Very subtle context fog to blend with background */}
            <fog attach="fog" args={['#071A2F', 5, 15]} />

            <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
                <group>
                    {/* Layer 1: Inner Energy Core (Solid glowing) */}
                    <Sphere ref={innerSphereRef} args={[1.2, 64, 64]}>
                        <meshStandardMaterial
                            color={coreColor}
                            emissive={coreColor}
                            emissiveIntensity={2}
                            roughness={0.2}
                            metalness={0.8}
                        />
                    </Sphere>

                    {/* Layer 2: Glass Sphere (Transparent / Refracting) */}
                    <Sphere ref={outerSphereRef} args={[1.5, 64, 64]}>
                        <meshPhysicalMaterial
                            color="#ffffff"
                            transparent
                            opacity={0.3}
                            roughness={0.1}
                            transmission={0.9} // Glass effect
                            thickness={2}
                            ior={1.5}
                        />
                    </Sphere>

                    {/* Layer 3: Neural Wireframe */}
                    <Sphere ref={wireframeRef} args={[1.6, 16, 16]}>
                        <meshBasicMaterial
                            color={wireframeColor}
                            wireframe
                            transparent
                            opacity={0.15}
                        />
                    </Sphere>

                    {/* Orbiting Service Rings / Nodes */}
                    <group ref={orbitalRingsGroup}>
                        <OrbitRing radius={2.2} speed={1} tilt={0.4} color={wireframeColor} hasNodes nodesCount={3} />
                        <OrbitRing radius={2.8} speed={-0.8} tilt={-0.3} color={coreColor} hasNodes nodesCount={2} />
                        <OrbitRing radius={3.5} speed={0.5} tilt={0.8} color="#ffffff" opacity={0.1} />
                    </group>

                    {/* Data Pulse Particles */}
                    <points ref={particleSystemRef}>
                        <bufferGeometry>
                            <bufferAttribute
                                attach="attributes-position"
                                count={particleCount}
                                array={particlesPosition}
                                itemSize={3}
                            />
                        </bufferGeometry>
                        <pointsMaterial
                            size={0.03}
                            color={particleColor}
                            transparent
                            opacity={0.6}
                            sizeAttenuation={true}
                            blending={THREE.AdditiveBlending}
                        />
                    </points>

                </group>
            </Float>
        </>
    );
};

// --- Helper Components ---

interface OrbitRingProps {
    radius: number;
    speed: number;
    tilt: number;
    color: string;
    hasNodes?: boolean;
    nodesCount?: number;
    opacity?: number;
}

function OrbitRing({ radius, speed, tilt, color, hasNodes = false, nodesCount = 0, opacity = 0.3 }: OrbitRingProps) {
    const ringRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.z = state.clock.getElapsedTime() * speed;
        }
    });

    return (
        <group rotation={[tilt, 0, 0]}>
            <group ref={ringRef}>
                {/* The Torus Ring */}
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[radius, 0.015, 16, 100]} />
                    <meshBasicMaterial color={color} transparent opacity={opacity} />
                </mesh>

                {/* Orbiting Nodes */}
                {hasNodes && Array.from({ length: nodesCount }).map((_, i) => {
                    const angle = (i / nodesCount) * Math.PI * 2;
                    const x = Math.cos(angle) * radius;
                    const z = Math.sin(angle) * radius; // On the XZ plane of the ring
                    return (
                        <group key={i} position={[x, 0, z]}>
                            {/* Inner Bright Node */}
                            <mesh>
                                <sphereGeometry args={[0.06, 16, 16]} />
                                <meshBasicMaterial color="#ffffff" />
                            </mesh>
                            {/* Outer Glow Node */}
                            <mesh>
                                <sphereGeometry args={[0.12, 16, 16]} />
                                <meshBasicMaterial color={color} transparent opacity={0.4} blending={THREE.AdditiveBlending} />
                            </mesh>
                        </group>
                    )
                })}
            </group>
        </group>
    );
}

export default AICore3D;
