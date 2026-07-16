"use client";

import { useEffect, useMemo, useState } from "react";

export interface CloudIcon {
    id: string;
    icon: React.ReactNode;
}

interface Position {
    x: number;
    y: number;
    z: number;
}

interface Props {
    icons: CloudIcon[];
    radius?: number;
}

export function IconCloud({
    icons,
    radius = 180,
}: Props) {
    const [rotation, setRotation] = useState(0);

    const positions = useMemo(() => {
        const list: Position[] = [];

        const count = icons.length;

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
                        key={icons[index].id}
                        className="absolute transition-transform duration-75"
                        style={{
                            left,
                            top,
                            transform: `translate(-50%, -50%) scale(${scale})`,
                            opacity,
                            zIndex: Math.floor(scale * 100),
                        }}
                    >
                        {icons[index].icon}
                    </div>
                );
            })}
        </div>
    );
}