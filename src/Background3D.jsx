import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 5000 }) => {
    const points = useRef();

    // Create random particle positions
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    // Animate particles
    useFrame((state) => {
        const { clock, mouse } = state;
        if (points.current) {
            points.current.rotation.y = clock.getElapsedTime() * 0.05;
            points.current.rotation.x = THREE.MathUtils.lerp(
                points.current.rotation.x,
                mouse.y * 0.1,
                0.05
            );
            points.current.rotation.z = THREE.MathUtils.lerp(
                points.current.rotation.z,
                mouse.x * 0.1,
                0.05
            );
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#60a5fa"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
};

const Background3D = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'radial-gradient(circle at center, #111827 0%, #0a0a0a 100%)'
        }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>
        </div>
    );
};

export default Background3D;
