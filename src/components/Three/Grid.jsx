import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function BackgroundGrid() {
  const mountRef = useRef(null);
  const [gridConfig, setGridConfig] = useState({ size: 100, divisions: 50, offsetY: 8 });

  // 🔥 Responsive grid scaling
  const updateGridConfig = () => {
    const width = window.innerWidth;

    if (width < 480) {
      // small phones
      setGridConfig({ size: 40, divisions: 20, offsetY: 4 });
    } else if (width < 768) {
      // tablets
      setGridConfig({ size: 60, divisions: 30, offsetY: 6 });
    } else if (width < 1200) {
      // laptops
      setGridConfig({ size: 80, divisions: 40, offsetY: 7 });
    } else {
      // desktops
      setGridConfig({ size: 100, divisions: 50, offsetY: 8 });
    }
  };

  useEffect(() => {
    updateGridConfig();
    window.addEventListener("resize", updateGridConfig);
    return () => window.removeEventListener("resize", updateGridConfig);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 15, 40);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15); // 👈 keep camera centered vertically
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1);
    mountRef.current.appendChild(renderer.domElement);

    // 🟢 Floor Grid
    const gridHelperBottom = new THREE.GridHelper(
      gridConfig.size,
      gridConfig.divisions,
      0xcccccc,
      0xcccccc
    );
    gridHelperBottom.material.opacity = 0.3;
    gridHelperBottom.material.transparent = true;
    gridHelperBottom.position.y = -gridConfig.offsetY; // 👈 move equally below camera
    scene.add(gridHelperBottom);

    // 🟢 Ceiling Grid
    const gridHelperTop = new THREE.GridHelper(
      gridConfig.size,
      gridConfig.divisions,
      0xcccccc,
      0xcccccc
    );
    gridHelperTop.material.opacity = 0.3;
    gridHelperTop.material.transparent = true;
    gridHelperTop.rotation.x = Math.PI;
    gridHelperTop.position.y = gridConfig.offsetY; // 👈 move equally above camera
    scene.add(gridHelperTop);

    // Light
    scene.add(new THREE.AmbientLight(0xffffff, 1));

    // Animate
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      gridHelperBottom.geometry.dispose();
      gridHelperBottom.material.dispose();
      gridHelperTop.geometry.dispose();
      gridHelperTop.material.dispose();
    };
  }, [gridConfig]);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", inset: 0, zIndex: -1 }}
    />
  );
}
