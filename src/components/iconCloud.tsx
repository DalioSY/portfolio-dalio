"use client";

import {
    useEffect,
    useMemo,
    useState,
    useRef,
    useLayoutEffect,
} from "react";
import { icons as iconsDefault, LangragesIcons } from "./langrages-icons";

interface Position {
    x: number;
    y: number;
    z: number;
}

interface Props {
    icons?: Record<string, number>;
    radius?: number;
}

export function IconCloud({
    icons,
    radius,
}: Props) {
    const [rotation, setRotation] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(420);

    const iconsData = icons || iconsDefault;

    const iconNames = useMemo(() => Object.keys(iconsData), [iconsData]);

    useLayoutEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setSize(containerRef.current.offsetWidth);
            }
        };

        updateSize();

        const resizeObserver = new ResizeObserver(updateSize);

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        window.addEventListener("resize", updateSize);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    // Caso não seja informado um radius, ele será proporcional ao tamanho
    const cloudRadius = radius ?? size * 0.43;

    const positions = useMemo(() => {
        const list: Position[] = [];

        const count = iconNames.length;

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i + 1) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            list.push({
                x: cloudRadius * Math.cos(theta) * Math.sin(phi),
                y: cloudRadius * Math.sin(theta) * Math.sin(phi),
                z: cloudRadius * Math.cos(phi),
            });
        }

        return list;
    }, [iconNames, cloudRadius]);

    useEffect(() => {
        let frame: number;

        const animate = () => {
            setRotation((r) => r - 0.01); // gira para a direita
            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, []);

    const center = size / 2;
    const perspective = 500;

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-[420px] aspect-square mx-auto overflow-hidden"
        >
            {positions.map((pos, index) => {
                const cos = Math.cos(rotation);
                const sin = Math.sin(rotation);

                const x = pos.x * cos - pos.z * sin;
                const z = pos.z * cos + pos.x * sin;

                const scale = perspective / (perspective - z);

                const left = x * scale + center;
                const top = pos.y * scale + center;

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
                        <p className="mt-1 text-center text-[8px] font-light">
                            {iconNames[index]}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}