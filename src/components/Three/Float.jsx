import React, { useEffect, useMemo, useRef } from "react";

export default function Float({
  size = 8,              // ~800px
  position = [0, 0],
  moveDir = "downRight", // which side should it float toward
  opacity = 0.95
}) {
  const px = size * 100;
  const amp = px * 0.05;
  const m = 4.0;
  const points = 180;
  const speed = 0.3; // <-- reduced speed (was 0.6)
  const pathRef = useRef(null);
  const mountRef = useRef(null);
  const tRef = useRef(0);
  const reqRef = useRef(0);

  const gradId = useMemo(
    () => `grad-${Math.random().toString(36).slice(2)}`,
    []
  );

  const buildPath = (time) => {
    const R = (px * 0.5) * 0.92;
    const center = { x: px / 2, y: px / 2 };
    const arr = [];

    for (let i = 0; i < points; i++) {
      const theta = (i / points) * Math.PI * 2;
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      const denom = Math.pow(Math.abs(c), m) + Math.pow(Math.abs(s), m);
      const baseR = R * Math.pow(denom, -1 / m);

      // 4-sided deformation
      const deform = amp * Math.sin(4 * theta + time * 0.8);
      const r = baseR + deform;

      arr.push({
        x: center.x + r * c,
        y: center.y + r * s
      });
    }

    let d = `M ${arr[0].x.toFixed(2)} ${arr[0].y.toFixed(2)} `;
    for (let i = 1; i < arr.length; i++) {
      d += `L ${arr[i].x.toFixed(2)} ${arr[i].y.toFixed(2)} `;
    }
    d += "Z";
    return d;
  };

  useEffect(() => {
    const animate = () => {
      tRef.current += speed / 25; // <-- slowed increment (was 0.6/60)
      if (pathRef.current) {
        pathRef.current.setAttribute("d", buildPath(tRef.current));
      }

      if (mountRef.current) {
        const t = tRef.current;
        // slower, gentler drift (±20px instead of ±40px)
        const moveAmount = Math.sin(t * 0.2) * 10; // <-- reduced amplitude

        if (moveDir === "downRight") {
          mountRef.current.style.transform = `translate(${moveAmount}px, ${moveAmount}px)`;
        } else if (moveDir === "upLeft") {
          mountRef.current.style.transform = `translate(${-moveAmount}px, ${-moveAmount}px)`;
        }
      }

      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqRef.current);
  }, [moveDir, px]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        left: position[0],
        top: position[1],
        width: px,
        height: px,
        zIndex: -1,
        pointerEvents: "none"
      }}
    >
      <svg width={px} height={px} viewBox={`0 0 ${px} ${px}`}>
        <defs>
          <linearGradient id={gradId} x1="0" x2={px} y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={buildPath(0)}
          fill={`url(#${gradId})`}
          opacity={opacity}
        />
      </svg>
    </div>
  );
}
