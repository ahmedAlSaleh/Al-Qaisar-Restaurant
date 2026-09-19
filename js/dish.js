/* ===== dish.js — Royal 3D Interactive Dish (Three.js) ===== */
'use strict';

(function initDish3D() {
  const canvas = document.getElementById('dCanvas');
  const tableSection = document.getElementById('table');
  if (!canvas || !tableSection || typeof THREE === 'undefined') return;

  const container = canvas.parentElement;
  let width = container.offsetWidth;
  let height = container.offsetHeight;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 2.8, 5);
  camera.lookAt(0, 0, 0);

  // Lighting
  scene.add(new THREE.AmbientLight(0xfff8e7, 0.52));

  const keyLight = new THREE.DirectionalLight(0xffd700, 1.35);
  keyLight.position.set(3, 5, 3);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 512;  // optimized shadow map resolution
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
    new THREE.MeshPhysicalMaterial({ color: 0xf5f0e8, roughness: 0.08, metalness: 0.04, clearcoat: 1, clearcoatRoughness: 0.04 })
  );
  plate.castShadow = true;
  group.add(plate);

  // Gold rim
  const rimMesh = new THREE.Mesh(
    new THREE.TorusGeometry(1.58, 0.048, 16, 48),
    new THREE.MeshPhysicalMaterial({ color: 0xC9A84C, roughness: 0.18, metalness: 0.92, clearcoat: 0.8 })
  );
  rimMesh.rotation.x = Math.PI / 2;
  rimMesh.position.y = 0.055;
  group.add(rimMesh);

  // Wagyu Steak
  const pGeo = new THREE.SphereGeometry(0.52, 24, 24);
  pGeo.scale(1.35, 0.48, 1);
  const protein = new THREE.Mesh(
    pGeo,
    new THREE.MeshPhysicalMaterial({ color: 0x5c2d0a, roughness: 0.82, metalness: 0.08 })
  );
  protein.position.set(-0.15, 0.22, 0);
  protein.castShadow = true;
  group.add(protein);

  // Sauce Arc
  const sauce = new THREE.Mesh(
    new THREE.TorusGeometry(0.85, 0.048, 8, 32, Math.PI * 1.6),
    new THREE.MeshStandardMaterial({ color: 0x3d0900, roughness: 0.7 })
  );
  sauce.rotation.x = -Math.PI / 2;
  sauce.position.y = 0.1;
  group.add(sauce);

  // Périgord Truffles
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
    color: 0xD4AF37,
    metalness: 1,
    roughness: 0.08,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
    emissive: new THREE.Color(0xD4AF37),
    emissiveIntensity: 0.3
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
    herb.position.set((Math.random() - 0.5) * 0.75, 0.33, (Math.random() - 0.5) * 0.55);
    herb.rotation.set((Math.random() - 0.5) * 0.4, Math.random() * Math.PI, (Math.random() - 0.5) * 0.3);
    group.add(herb);
  }

  // Beluga Caviar pearls
  for (let i = 0; i < 8; i++) {
    const caviar = new THREE.Mesh(
      new THREE.SphereGeometry(0.038, 8, 8),
      new THREE.MeshPhysicalMaterial({ color: 0x050505, roughness: 0.18, metalness: 0.3, clearcoat: 1 })
    );
    caviar.position.set((Math.random() - 0.5) * 0.48 + 0.45, 0.19, (Math.random() - 0.5) * 0.38);
    group.add(caviar);
  }

  // Scatter & Assembly Animation
  const ingredients = group.children.slice(2);
  const origPositions = ingredients.map(m => m.position.clone());
  const scatterPositions = ingredients.map(() => ({
    x: (Math.random() - 0.5) * 6,
    y: Math.random() * 3.5 + 1.2,
    z: (Math.random() - 0.5) * 4.5
  }));

  const assemble = () => {
    ingredients.forEach((m, i) => {
      if (typeof gsap !== 'undefined') {
        gsap.to(m.position, {
          x: origPositions[i].x,
          y: origPositions[i].y,
          z: origPositions[i].z,
          duration: 1.6,
          ease: 'elastic.out(1, 0.65)',
          delay: i * 0.035
        });
      } else {
        m.position.copy(origPositions[i]);
      }
    });
  };

  const explode = () => {
    ingredients.forEach((m, i) => {
      if (typeof gsap !== 'undefined') {
        gsap.to(m.position, {
          x: scatterPositions[i].x,
          y: scatterPositions[i].y,
          z: scatterPositions[i].z,
          duration: 1.3,
          ease: 'power2.out'
        });
      }
    });
  };

  // ScrollTrigger integration
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      trigger: '#table',
      start: 'top center',
      end: 'bottom center',
      onEnter: assemble,
      onLeave: explode,
      onEnterBack: assemble
    });
  } else {
    assemble();
  }

  // Drag interaction
  let isDragging = false;
  let prevX = 0, prevY = 0;
  let targetRotY = 0, targetRotX = 0;
  let rotY = 0, rotX = 0;

  canvas.addEventListener('mousedown', e => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });
  document.addEventListener('mouseup', () => { isDragging = false; });
  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    targetRotY += (e.clientX - prevX) * 0.01;
    targetRotX += (e.clientY - prevY) * 0.005;
    targetRotX = Math.max(-0.4, Math.min(0.4, targetRotX));
    prevX = e.clientX;
    prevY = e.clientY;
  }, { passive: true });

  // Touch controls
  let prevTouchX = 0;
  canvas.addEventListener('touchstart', e => {
    prevTouchX = e.touches[0].clientX;
  }, { passive: true });
  canvas.addEventListener('touchmove', e => {
    targetRotY += (e.touches[0].clientX - prevTouchX) * 0.009;
    prevTouchX = e.touches[0].clientX;
    e.preventDefault();
  }, { passive: false });

  // Render loop with Visibility Observer
  let isVisible = false;
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
  }, { threshold: 0.05 });
  observer.observe(tableSection);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) isVisible = false;
    else if (tableSection.getBoundingClientRect().top < window.innerHeight && tableSection.getBoundingClientRect().bottom > 0) isVisible = true;
  });

  let deltaFrame = 0;
  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return; // Skip GPU work when section not in view

    deltaFrame++;
    if (!isDragging) targetRotY += 0.003;
    rotY += (targetRotY - rotY) * 0.07;
    rotX += (targetRotX - rotX) * 0.07;

    group.rotation.y = rotY;
    group.rotation.x = rotX;
    group.position.y = Math.sin(deltaFrame * 0.02) * 0.06;
    goldLeafMat.emissiveIntensity = 0.25 + Math.sin(deltaFrame * 0.06) * 0.15;

    renderer.render(scene, camera);
  }
  animate();

  // Resize handler
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }, 150);
  }, { passive: true });
})();
