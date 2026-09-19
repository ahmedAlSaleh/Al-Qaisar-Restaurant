"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function RoyalDishCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 2.8, 5);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xfff8e7, 0.52));

    const keyLight = new THREE.DirectionalLight(0xffd700, 1.35);
    keyLight.position.set(3, 5, 3);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 512;
    keyLight.shadow.mapSize.height = 512;
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xffaa44, 0.7, 10);
    fillLight.position.set(-3, 2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 0.5, 8);
    rimLight.position.set(0, -1, -4);
    scene.add(rimLight);

    const group = new THREE.Group();
    scene.add(group);

    // Plate
    const plate = new THREE.Mesh(
      new THREE.CylinderGeometry(1.65, 1.55, 0.14, 48),
      new THREE.MeshPhysicalMaterial({
        color: 0xf5f0e8,
        roughness: 0.08,
        metalness: 0.04,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
      })
    );
    plate.castShadow = true;
    group.add(plate);

    // Gold rim
    const rimMesh = new THREE.Mesh(
      new THREE.TorusGeometry(1.58, 0.048, 16, 48),
      new THREE.MeshPhysicalMaterial({
        color: 0xc9a84c,
        roughness: 0.18,
        metalness: 0.92,
        clearcoat: 0.8,
      })
    );
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.y = 0.055;
    group.add(rimMesh);

    // Wagyu Steak
    const pGeo = new THREE.SphereGeometry(0.52, 24, 24);
    pGeo.scale(1.35, 0.48, 1);
    const protein = new THREE.Mesh(
      pGeo,
      new THREE.MeshPhysicalMaterial({
        color: 0x5c2d0a,
        roughness: 0.82,
        metalness: 0.08,
      })
    );
    protein.position.set(-0.15, 0.22, 0);
    protein.castShadow = true;
    group.add(protein);

    // Truffles
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const truffle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.09, 0.03, 8),
        new THREE.MeshStandardMaterial({ color: 0x1a0a00, roughness: 0.9 })
      );
      truffle.position.set(Math.cos(a) * 0.58, 0.2, Math.sin(a) * 0.38);
      truffle.rotation.z = Math.random() * 0.5;
      group.add(truffle);
    }

    // 24K Gold Leaf
    const goldLeafMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37,
      metalness: 1,
      roughness: 0.08,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      emissive: new THREE.Color(0xd4af37),
      emissiveIntensity: 0.3,
    });
    const goldLeaf = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.07), goldLeafMat);
    goldLeaf.position.set(0.08, 0.48, 0.18);
    goldLeaf.rotation.set(-0.2, 0.3, 0.1);
    group.add(goldLeaf);

    // Micro Herbs
    for (let i = 0; i < 6; i++) {
      const herb = new THREE.Mesh(
        new THREE.CylinderGeometry(0.008, 0.008, 0.18, 4),
        new THREE.MeshStandardMaterial({ color: 0x2d5a1b, roughness: 0.8 })
      );
      herb.position.set(
        (Math.random() - 0.5) * 0.75,
        0.33,
        (Math.random() - 0.5) * 0.55
      );
      herb.rotation.set(
        (Math.random() - 0.5) * 0.4,
        Math.random() * Math.PI,
        (Math.random() - 0.5) * 0.3
      );
      group.add(herb);
    }

    // Beluga Caviar pearls
    for (let i = 0; i < 8; i++) {
      const caviar = new THREE.Mesh(
        new THREE.SphereGeometry(0.038, 8, 8),
        new THREE.MeshPhysicalMaterial({
          color: 0x050505,
          roughness: 0.18,
          metalness: 0.3,
          clearcoat: 1,
        })
      );
      caviar.position.set(
        (Math.random() - 0.5) * 0.48 + 0.45,
        0.19,
        (Math.random() - 0.5) * 0.38
      );
      group.add(caviar);
    }

    let isDragging = false;
    let prevX = 0, prevY = 0;
    let targetRotY = 0, targetRotX = 0;
    let rotY = 0, rotX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onMouseUp = () => {
      isDragging = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      targetRotY += (e.clientX - prevX) * 0.01;
      targetRotX += (e.clientY - prevY) * 0.005;
      targetRotX = Math.max(-0.4, Math.min(0.4, targetRotX));
      prevX = e.clientX;
      prevY = e.clientY;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let isVisible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let deltaFrame = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      deltaFrame++;
      if (!isDragging) targetRotY += 0.003;
      rotY += (targetRotY - rotY) * 0.07;
      rotX += (targetRotX - rotX) * 0.07;

      group.rotation.y = rotY;
      group.rotation.x = rotX;
      group.position.y = Math.sin(deltaFrame * 0.02) * 0.06;
      goldLeafMat.emissiveIntensity = 0.25 + Math.sin(deltaFrame * 0.06) * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      aria-label="3D Royal Dish presentation"
    />
  );
}
