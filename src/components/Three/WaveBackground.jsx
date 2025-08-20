import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function RopeWaveBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Long thin plane for wave ribbon
    const geometry = new THREE.PlaneGeometry(60, 0.5, 600, 10);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color("#8A2BE2") }, // purple
        color2: { value: new THREE.Color("#FF007F") }, // pink
        color3: { value: new THREE.Color("#00CFFF") }, // cyan
        time: { value: 0 },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;

          // Randomized curviness (mixing sine + cosine with different scales)
          pos.y += 0.6 * sin(pos.x * 0.5 + time * 1.2);
          pos.y += 0.4 * cos(pos.x * 0.9 + time * 0.7);
          pos.y += 0.2 * sin(pos.x * 1.5 + time * 0.4);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float time;
        varying vec2 vUv;
        void main() {
          vec3 gradient = mix(color1, color2, vUv.x);
          gradient = mix(gradient, color3, 0.4 + 0.4 * sin(time * 0.25));
          gl_FragColor = vec4(gradient, 1.0);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const wave = new THREE.Mesh(geometry, material);

    // Exact diagonal placement
    wave.rotation.z = -0.75; // tilt across screen
    wave.position.set(-20, 12, 0); // starts far top-left, exits bottom-right

    scene.add(wave);

    // Animate
    const animate = () => {
      material.uniforms.time.value += 0.02;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    />
  );
}
