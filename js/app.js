/* ===== app.js — Main UI, Navigation, Audio, Modals ===== */
'use strict';

const isMobile = window.innerWidth <= 768;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Smooth Scroll Helper ── */
function scrollToSection(selector) {
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
window.scrollToSection = scrollToSection;

/* ── Preloader Dismissal ── */
function dismissPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader || preloader.dataset.dismissed) return;
  preloader.dataset.dismissed = 'true';
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
    initHeroReveals();
    initScrollObservers();
  }, 800);
}

window.addEventListener('load', () => {
  // Ultra-fast luxury experience: max 1.2s wait
  const preloaderDelay = prefersReducedMotion ? 200 : 1200;
  setTimeout(dismissPreloader, preloaderDelay);

  // Set min reservation date to today
  const dateInput = document.getElementById('f-dt');
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  // Hero BG scale trigger
  setTimeout(() => {
    const heroBg = document.getElementById('hBg');
    if (heroBg) heroBg.style.transform = 'scale(1)';
  }, 50);
});

// Allow user to immediately skip preloader
document.getElementById('preSkip')?.addEventListener('click', dismissPreloader);

/* ── Custom Cursor (Desktop Only) ── */
if (!isMobile) {
  const cursor = document.getElementById('cur');
  const follower = document.getElementById('cur-f');
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursor) {
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    }
  }, { passive: true });

  (function rafCursor() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    if (follower) {
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
    }
    requestAnimationFrame(rafCursor);
  })();

  document.querySelectorAll('a, button, .dc, .gi, .mi, .ing, input, select, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor?.classList.add('hov');
      follower?.classList.add('hov');
    });
    el.addEventListener('mouseleave', () => {
      cursor?.classList.remove('hov');
      follower?.classList.remove('hov');
    });
  });
}

/* ── Navigation Scroll Behavior ── */
const navbar = document.getElementById('nav');
const floatWrap = document.getElementById('fWrap');
let lastScrollY = 0;
let scrollTicking = false;

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if (navbar) {
        navbar.classList.toggle('solid', currentScrollY > 80);
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          navbar.classList.add('hidden');
        } else {
          navbar.classList.remove('hidden');
        }
      }
      if (floatWrap) {
        floatWrap.classList.toggle('show', currentScrollY > window.innerHeight * 0.45);
      }
      lastScrollY = currentScrollY;
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });

/* ── Mobile Menu Toggle ── */
document.getElementById('navT')?.addEventListener('click', () => {
  document.getElementById('mobNav')?.classList.add('open');
  document.body.style.overflow = 'hidden';
});
document.getElementById('mobX')?.addEventListener('click', closeMobileNav);
function closeMobileNav() {
  document.getElementById('mobNav')?.classList.remove('open');
  document.body.style.overflow = '';
}
window.cM = closeMobileNav;

/* ── Hero GSAP Entrance ── */
function initHeroReveals() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to('#hE',  { opacity: 1, y: 0, duration: 0.9 })
    .to('#hT',  { opacity: 1, y: 0, duration: 1.1 }, '-=0.55')
    .to('#hS',  { opacity: 1, y: 0, duration: 0.9 }, '-=0.65')
    .to('#hB',  { opacity: 1, y: 0, duration: 0.9 }, '-=0.55')
    .to('#sInd',{ opacity: 1,       duration: 0.7 }, '-=0.3');

  // Chandelier parallax on scroll
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.to('#chW', {
      y: -110,
      scrollTrigger: {
        trigger: '#reveal',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    gsap.to('.story-yr', {
      y: -80,
      scrollTrigger: {
        trigger: '#story',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2
      }
    });
  }

  // Chandelier mouse parallax (desktop only)
  if (!isMobile) {
    document.addEventListener('mousemove', e => {
      const rotY = (e.clientX / window.innerWidth - 0.5) * 12;
      const rotX = -(e.clientY / window.innerHeight - 0.5) * 6;
      gsap.to('#chW', { rotateY: rotY, rotateX: rotX, duration: 1.4, ease: 'power1.out' });
    }, { passive: true });
  }
}

/* ── IntersectionObserver for Content Reveals ── */
function initScrollObservers() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

  // Chef parallax scroll (passive)
  const chefSection = document.getElementById('chef');
  const chefBg = document.getElementById('chefBg');
  if (chefBg && chefSection) {
    window.addEventListener('scroll', () => {
      const rect = chefSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        chefBg.style.transform = `scale(1.08) translateY(${-rect.top * 0.2}px)`;
      }
    }, { passive: true });
  }

  // 3D Tilt on dish cards (desktop only)
  if (!isMobile) {
    document.querySelectorAll('.dc').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const rx = -((e.clientY - rect.top) / rect.height * 10 - 5);
        const ry = (e.clientX - rect.left) / rect.width * 10 - 5;
        card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }, { passive: true });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
        setTimeout(() => { card.style.transition = ''; }, 600);
      });
    });
  }
}

/* ── Menu Tabs ── */
document.querySelectorAll('.m-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.m-tab').forEach(t => {
      t.classList.remove('on');
      t.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.m-panel').forEach(p => p.classList.remove('on'));
    tab.classList.add('on');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.getElementById('t-' + tab.dataset.t);
    if (panel) panel.classList.add('on');
  });
});

/* ── Ambiance Carousel ── */
const ambianceBtns = document.querySelectorAll('.amb-btn');
const ambianceSlides = document.querySelectorAll('.amb-slide');
const ambianceKeys = ['d', 'k', 'n'];
let ambianceIndex = 0;
let ambianceInterval;

function setAmbiance(type) {
  ambianceBtns.forEach(b => b.classList.remove('on'));
  ambianceSlides.forEach(s => s.classList.remove('on'));
  const targetBtn = document.querySelector(`.amb-btn[data-t="${type}"]`);
  const targetSlide = document.querySelector(`.amb-slide[data-s="${type}"]`);
  if (targetBtn) targetBtn.classList.add('on');
  if (targetSlide) targetSlide.classList.add('on');
}

ambianceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setAmbiance(btn.dataset.t);
    ambianceIndex = ambianceKeys.indexOf(btn.dataset.t);
    clearInterval(ambianceInterval);
    ambianceInterval = setInterval(rotateAmbiance, 5500);
  });
});

function rotateAmbiance() {
  ambianceIndex = (ambianceIndex + 1) % 3;
  setAmbiance(ambianceKeys[ambianceIndex]);
}
ambianceInterval = setInterval(rotateAmbiance, 5500);

/* ── Reviews Carousel ── */
const reviewCards = document.querySelectorAll('.rv-card');
const reviewDots = document.querySelectorAll('.rv-dot');
let reviewIndex = 0;
let reviewInterval;

function setReview(index) {
  reviewCards.forEach(c => c.classList.remove('on'));
  reviewDots.forEach(d => d.classList.remove('on'));
  if (reviewCards[index]) reviewCards[index].classList.add('on');
  if (reviewDots[index]) reviewDots[index].classList.add('on');
  reviewIndex = index;
}

reviewDots.forEach(dot => {
  dot.addEventListener('click', () => {
    setReview(+dot.dataset.i);
    clearInterval(reviewInterval);
    reviewInterval = setInterval(rotateReviews, 5500);
  });
});

function rotateReviews() {
  reviewIndex = (reviewIndex + 1) % reviewCards.length;
  setReview(reviewIndex);
}
reviewInterval = setInterval(rotateReviews, 5500);

/* ── Gallery Lightbox ── */
function oLB(element) {
  const img = element.querySelector('img');
  if (!img) return;
  const largeSrc = img.src.replace(/w=\d+/, 'w=1400');
  const lbImg = document.getElementById('lb-i');
  if (lbImg) lbImg.src = largeSrc;
  document.getElementById('lb')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function cLB() {
  document.getElementById('lb')?.classList.remove('open');
  document.body.style.overflow = '';
}
window.oLB = oLB;
window.cLB = cLB;

document.getElementById('lb')?.addEventListener('click', e => {
  if (e.target === document.getElementById('lb')) cLB();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cLB();
});

/* ── Reservation Form & Modal ── */
document.getElementById('resForm')?.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  e.target.reset();
});
document.getElementById('modalClose')?.addEventListener('click', () => {
  document.getElementById('modal')?.classList.remove('open');
  document.body.style.overflow = '';
});

/* ── Web Audio API Ambient Sound ── */
let isSoundOn = false;
let audioContext, activeOscillators = [];

document.getElementById('sBtn')?.addEventListener('click', () => {
  isSoundOn = !isSoundOn;
  document.getElementById('sBtn')?.classList.toggle('on', isSoundOn);

  if (isSoundOn) {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    // Warm A-major chord (220Hz, 329.63Hz, 440Hz)
    [220, 329.63, 440].forEach((freq, idx) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.value = freq;
      filter.type = 'lowpass';
      filter.frequency.value = 550;

      gain.gain.setValueAtTime(0, audioContext.currentTime);
      gain.gain.linearRampToValueAtTime(0.015 - idx * 0.003, audioContext.currentTime + 2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
      activeOscillators.push({ osc, gain });
    });
  } else {
    activeOscillators.forEach(({ osc, gain }) => {
      gain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
      setTimeout(() => {
        try { osc.stop(); } catch (err) {}
      }, 1200);
    });
    activeOscillators = [];
  }
});

console.log('%c✦ THE GRAND PALACE ✦\n%cFour Seasons · Fine Dining · Dubai', 'color:#C9A84C;font-size:15px;font-family:Georgia,serif', 'color:#8B6914;font-size:10px;font-family:Georgia,serif');
