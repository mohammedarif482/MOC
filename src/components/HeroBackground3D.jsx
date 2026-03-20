import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground3D = () => {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);
        container.appendChild(renderer.domElement);

        // ── Ambient Orb (sprite with radial gradient texture) ──
        const orbCanvas = document.createElement('canvas');
        orbCanvas.width = 1024;
        orbCanvas.height = 1024;
        const ctx = orbCanvas.getContext('2d');
        const gradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 512);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.08, 'rgba(240, 245, 255, 0.85)');
        gradient.addColorStop(0.2, 'rgba(220, 230, 255, 0.45)');
        gradient.addColorStop(0.4, 'rgba(200, 215, 255, 0.18)');
        gradient.addColorStop(0.65, 'rgba(180, 200, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(160, 190, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1024, 1024);

        // ── Parent group for floating drift ──
        const driftGroup = new THREE.Group();
        scene.add(driftGroup);

        const orbTexture = new THREE.CanvasTexture(orbCanvas);
        const orbMaterial = new THREE.SpriteMaterial({
            map: orbTexture,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const orb = new THREE.Sprite(orbMaterial);
        orb.scale.set(12, 12, 1);
        orb.position.set(0, 0.3, -3);
        driftGroup.add(orb);

        // ── Soft Ring Texture (canvas-drawn blurred ring) ──
        const makeRingTexture = () => {
            const size = 512;
            const c = document.createElement('canvas');
            c.width = size; c.height = size;
            const cx = c.getContext('2d');
            const center = size / 2;
            const radius = size * 0.38;
            const thickness = size * 0.14;

            // Draw very soft/blurry ring
            for (let r = radius - thickness; r <= radius + thickness; r += 0.5) {
                const dist = Math.abs(r - radius) / thickness;
                const alpha = Math.max(0, 1 - dist * dist) * 0.3;
                cx.beginPath();
                cx.arc(center, center, r, 0, Math.PI * 2);
                cx.strokeStyle = `rgba(232, 240, 255, ${alpha})`;
                cx.lineWidth = 1.5;
                cx.stroke();
            }
            return new THREE.CanvasTexture(c);
        };

        const makeDotTexture = () => {
            const size = 128;
            const c = document.createElement('canvas');
            c.width = size; c.height = size;
            const cx = c.getContext('2d');
            const grad = cx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
            grad.addColorStop(0.2, 'rgba(240, 245, 255, 0.3)');
            grad.addColorStop(0.5, 'rgba(220, 230, 255, 0.08)');
            grad.addColorStop(1, 'rgba(200, 220, 255, 0)');
            cx.fillStyle = grad;
            cx.fillRect(0, 0, size, size);
            return new THREE.CanvasTexture(c);
        };

        // ── Signal Pulse Rings (soft sprites) ──
        const ringCount = 5;
        const rings = [];
        const ringTexture = makeRingTexture();

        for (let i = 0; i < ringCount; i++) {
            const mat = new THREE.SpriteMaterial({
                map: ringTexture,
                transparent: true,
                opacity: 0.3,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });
            const sprite = new THREE.Sprite(mat);
            sprite.position.set(0, 0.3, -1);
            driftGroup.add(sprite);
            rings.push(sprite);
        }

        // Center dot (soft glow)
        const dotTexture = makeDotTexture();
        const dotMat = new THREE.SpriteMaterial({
            map: dotTexture,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const dot = new THREE.Sprite(dotMat);
        dot.scale.set(0.3, 0.3, 1);
        dot.position.set(0, 0.3, -1);
        driftGroup.add(dot);

        // ── State ──
        let scrollProgress = 0;
        const mouse = { x: 0, y: 0 };
        const orbTarget = { x: 0, y: 0.3 };
        let rafId;

        const handleScroll = () => {
            const heroEl = document.querySelector('[data-hero-section]');
            if (heroEl) {
                const rect = heroEl.getBoundingClientRect();
                scrollProgress = Math.min(Math.max(0, -rect.top / rect.height), 1);
            } else {
                scrollProgress = Math.min(window.scrollY / (window.innerHeight * 1.2), 1);
            }
        };

        const handleMouse = (e) => {
            mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        };

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouse, { passive: true });
        window.addEventListener('resize', handleResize);

        // ── Animate ──
        const clock = new THREE.Clock();

        const animate = () => {
            rafId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();
            const sp = scrollProgress;

            // ── Orb animation ──
            const breathScale = 0.92 + Math.sin(time * (Math.PI * 2) / 4) * 0.08;
            const breathOpacity = 0.25 + Math.sin(time * (Math.PI * 2) / 4) * 0.08;

            let orbScrollScale = 1;
            let orbScrollOpacity = 1;
            let orbScrollY = 0;

            if (sp < 0.3) {
                const t = sp / 0.3;
                orbScrollY = t * 3;
                orbScrollScale = 1 - t * 0.3;
            } else if (sp < 0.6) {
                const t = (sp - 0.3) / 0.3;
                orbScrollY = 3 + t * 3;
                orbScrollScale = 0.7 - t * 0.3;
                orbScrollOpacity = 1 - t;
            } else {
                orbScrollOpacity = 0;
            }

            // Mouse lerp
            const mx = mouse.x * 0.5;
            const my = mouse.y * 0.5;
            orbTarget.x += (mx - orbTarget.x) * 0.04;
            orbTarget.y += (my + 0.3 + orbScrollY - orbTarget.y) * 0.04;

            const finalOrbScale = breathScale * orbScrollScale * 12;
            orb.scale.set(finalOrbScale, finalOrbScale, 1);
            orb.position.set(orbTarget.x, orbTarget.y, -3);
            orb.material.opacity = breathOpacity * orbScrollOpacity;

            // ── Rings animation ──
            let ringScrollOpacity = 1;
            let ringScrollScale = 1;
            if (sp < 0.3) {
                ringScrollScale = 1 - (sp / 0.3) * 0.2;
            } else if (sp < 0.6) {
                const t = (sp - 0.3) / 0.3;
                ringScrollScale = 0.8 - t * 0.4;
                ringScrollOpacity = 1 - t;
            } else {
                ringScrollOpacity = 0;
            }

            rings.forEach((ring, i) => {
                const phase = (time * 0.4 + i * 0.7) % 4;
                const scale = (1 + phase * 3) * ringScrollScale;
                const opacity = Math.max(0, (1 - phase / 4)) * 0.18 * ringScrollOpacity;
                ring.scale.set(scale, scale, 1);
                ring.material.opacity = opacity;
            });

            // Dot
            const dotPulse = 0.3 + Math.sin(time * 2) * 0.08;
            dot.scale.set(dotPulse, dotPulse, 1);
            dot.material.opacity = 0.5 * ringScrollOpacity;

            // ── Drift the whole group in a slow wandering path ──
            const driftX = Math.sin(time * 0.15) * 0.12 + Math.sin(time * 0.08) * 0.06;
            const driftY = Math.cos(time * 0.12) * 0.08 + Math.sin(time * 0.06) * 0.04;
            driftGroup.position.x = driftX;
            driftGroup.position.y = driftY;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouse);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default HeroBackground3D;
