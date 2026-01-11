import React, { useRef, useEffect } from "react";

const DOT_COLOR = '#f1d9f9';
const DOT_COUNT = 70;
const DOT_MIN_SIZE = 1;
const DOT_MAX_SIZE = 3;
const VELOCITY_RANGE = 0.5;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

function createDot(width, height) {
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-VELOCITY_RANGE, VELOCITY_RANGE),
    vy: randomBetween(-VELOCITY_RANGE, VELOCITY_RANGE),
    size: randomBetween(DOT_MIN_SIZE, DOT_MAX_SIZE),
    color: DOT_COLOR,
  };
}

function ParticleBackground() {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef(null);
  const animationRef = useRef(null);

  const resizeAndInitDots = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    dotsRef.current = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      dotsRef.current.push(createDot(canvas.width, canvas.height));
    }
  };

  useEffect(() => {
    resizeAndInitDots();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let dot of dotsRef.current) {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1;
      }

      dotsRef.current.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (mouseRef.current) {
        const { x: mx, y: my } = mouseRef.current;
        dotsRef.current.forEach(dot => {
          const distance = Math.sqrt((mx - dot.x) ** 2 + (my - dot.y) ** 2);
          if (distance < 300) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    function handleMouseMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function handleMouseOut() {
      mouseRef.current = null;
    }

    function handleResize() {
      resizeAndInitDots();
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#0d101a",
        pointerEvents: "none",
        zIndex: 0
      }}
    />
  );
}

export default ParticleBackground;
