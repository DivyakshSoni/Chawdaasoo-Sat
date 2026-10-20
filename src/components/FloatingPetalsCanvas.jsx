import React, { useEffect, useRef } from 'react';

export default function FloatingPetalsCanvas({ reducedMotion }) {
  const canvasRef = useRef(null);
  const heartsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Click/touch anywhere to spawn romantic hearts
    const handlePointerDown = (e) => {
      if (reducedMotion) return;
      const x = e.clientX || (e.touches && e.touches[0]?.clientX) || width / 2;
      const y = e.clientY || (e.touches && e.touches[0]?.clientY) || height / 2;

      for (let i = 0; i < 4; i++) {
        heartsRef.current.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          size: 14 + Math.random() * 12,
          vy: -1.2 - Math.random() * 1.8,
          vx: (Math.random() - 0.5) * 1.5,
          opacity: 1,
          rot: (Math.random() - 0.5) * 0.4,
          color: ['#E8A2BB', '#F8DDE7', '#873D60', '#F4E4BF'][Math.floor(Math.random() * 4)]
        });
      }
    };
    window.addEventListener('pointerdown', handlePointerDown);

    // Initial petals
    const petalColors = ['#F8DDE7', '#FCE9F0', '#E8A2BB', '#FFF0F5'];
    const numPetals = width < 600 ? 18 : 32;
    const petals = Array.from({ length: numPetals }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 8 + Math.random() * 10,
      speedY: 0.4 + Math.random() * 0.7,
      speedX: -0.2 + Math.random() * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      swayOffset: Math.random() * 100
    }));

    // Draw heart helper
    const drawHeart = (c, x, y, size, color, alpha) => {
      c.save();
      c.globalAlpha = Math.max(0, alpha);
      c.fillStyle = color;
      c.translate(x, y);
      c.beginPath();
      const topCurveHeight = size * 0.3;
      c.moveTo(0, topCurveHeight);
      // top left curve
      c.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      // bottom left curve
      c.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.2);
      // bottom right curve
      c.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      // top right curve
      c.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      c.closePath();
      c.fill();
      c.restore();
    };

    // Draw single petal
    const drawPetal = (c, p) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);
      c.fillStyle = p.color;
      c.globalAlpha = 0.55;
      c.beginPath();
      c.ellipse(0, 0, p.size * 0.55, p.size * 1.1, Math.PI / 4, 0, 2 * Math.PI);
      c.fill();
      c.restore();
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        tick += 0.015;

        // Render & update falling petals
        petals.forEach((p) => {
          p.y += p.speedY;
          p.x += Math.sin(tick + p.swayOffset) * 0.7 + p.speedX;
          p.rotation += p.rotationSpeed;

          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 20) p.x = -20;
          if (p.x < -20) p.x = width + 20;

          drawPetal(ctx, p);
        });

        // Render & update tap-spawned hearts
        for (let i = heartsRef.current.length - 1; i >= 0; i--) {
          const h = heartsRef.current[i];
          h.y += h.vy;
          h.x += h.vx;
          h.opacity -= 0.015;
          h.size += 0.15;

          drawHeart(ctx, h.x, h.y, h.size, h.color, h.opacity);

          if (h.opacity <= 0 || h.y < -50) {
            heartsRef.current.splice(i, 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handlePointerDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return <canvas id="petals-canvas" ref={canvasRef} aria-hidden="true" />;
}
