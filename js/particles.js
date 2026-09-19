/* ===== particles.js — Hero Three.js Gold Particle Field ===== */
'use strict';

(function initHeroParticles() {
  const canvas = document.getElementById('hCanvas');
  const heroSection = document.getElementById('hero');
  if (!canvas || !heroSection || typeof THREE === 'undefined') return;

  const isMobile = window.innerWidth <= 768;
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: false,
    powerPreference: 'low-power'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 3;

  // Optimized particle count: 350 on mobile, 900 on desktop
  const particleCount = isMobile ? 350 : 900;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 13;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8.5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xC9A84C,
    size: isMobile ? 0.025 : 0.019,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleMesh = new THREE.Points(geometry, material);
  scene.add(particleMesh);

  let targetMouseX = 0;
  let targetMouseY = 0;
  let frame = 0;
  let isVisible = true;

  // Pause rendering when Hero is off-screen
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
  }, { threshold: 0.05 });
  observer.observe(heroSection);

  // Pause rendering when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) isVisible = false;
    else if (heroSection.getBoundingClientRect().bottom > 0) isVisible = true;
  });

  if (!isMobile) {
    document.addEventListener('mousemove', e => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.28;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.28;
    }, { passive: true });
  }

  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return; // Skip work when off-screen

    frame++;
    particleMesh.rotation.y += 0.00024;
    particleMesh.rotation.x += 0.00008;

    camera.position.x += (targetMouseX - camera.position.x) * 0.025;
    camera.position.y += (-targetMouseY - camera.position.y) * 0.025;

    material.opacity = 0.38 + Math.sin(frame * 0.012) * 0.12;
    renderer.render(scene, camera);
  }
  animate();

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, 150);
  }, { passive: true });
})();
