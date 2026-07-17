"use client";

import { useEffect, useMemo, useState } from "react";
import { icons, LangragesIcons } from "./langrages-icons";

interface Position {
    x: number;
    y: number;
    z: number;
}

interface Props {
    radius?: number;
}

export function IconCloud({
    radius = 180,
}: Props) {
    const [rotation, setRotation] = useState(0);

    const iconNames = useMemo(() => Object.keys(icons), []);

    const positions = useMemo(() => {
        const list: Position[] = [];

        const count = iconNames.length;

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i + 1) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            list.push({
                x: radius * Math.cos(theta) * Math.sin(phi),
                y: radius * Math.sin(theta) * Math.sin(phi),
                z: radius * Math.cos(phi),
            });
        }

        return list;
    }, [icons, radius]);

    useEffect(() => {
        let frame: number;

        const animate = () => {
            setRotation((r) => r - 0.01);
            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <div className="relative w-[420px] h-[420px] mx-auto overflow-hidden">
            {positions.map((pos, index) => {
                const cos = Math.cos(rotation);
                const sin = Math.sin(rotation);

                const x = pos.x * cos - pos.z * sin;
                const z = pos.z * cos + pos.x * sin;

                const perspective = 500;

                const scale = perspective / (perspective - z);

                const left = x * scale + 210;
                const top = pos.y * scale + 210;

                const opacity = Math.max(0.25, scale / 2);

                return (
                    <div
                        key={iconNames[index]}
                        className="absolute transition-transform duration-75"
                        style={{
                            left,
                            top,
                            transform: `translate(-50%, -50%) scale(${scale})`,
                            opacity,
                            zIndex: Math.floor(scale * 100),
                        }}
                    >
                        <LangragesIcons value={iconNames[index]} />
                    </div>
                );
            })}
        </div>
    );
}