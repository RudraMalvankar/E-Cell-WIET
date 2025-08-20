import React, { useEffect, useState } from "react";

const MouseGlowCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    let animationFrame;
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.08,
        y: prev.y + (mouse.y - prev.y) * 0.08,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationFrame);
    };
  }, [mouse]);

  return (
    <div
      style={{
        position: "fixed",
        top: trail.y - 40, // center offset (half of size)
        left: trail.x - 40,
        width: "80px", // smaller radius
        height: "80px",
        borderRadius: "50%",
        pointerEvents: "none",
        background: `
          radial-gradient(circle,
            rgba(15, 30, 80, 0.9) 0%,    /* Navy Core (lighter than before) */
            rgba(30, 70, 160, 0.7) 40%,  /* Royal Blue */
            rgba(60, 120, 220, 0.5) 70%, /* Brighter Blue Edge */
            rgba(100, 170, 255, 0.3) 90%,/* Soft Glow */
            transparent 100%)
        `,
        filter: "blur(25px)", // smoother outer fade
        mixBlendMode: "screen", // ensures visibility on white + dark
        zIndex: 9999,
      }}
    />
  );
};

export default MouseGlowCursor;
