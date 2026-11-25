import React, { useEffect, useRef } from "react";

class Particle {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * 0.4 - 0.2;
    this.baseColor = Math.random() > 0.5 ? "rgba(59, 130, 246, 0.28)" : "rgba(34, 211, 238, 0.24)";
  }

  update(canvas, mouse) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const dx = this.x - cx;
    const dy = this.y - cy;
    const dist = Math.hypot(dx, dy);
    let angle = Math.atan2(dy, dx);
    angle += 0.0003;
    this.x = cx + Math.cos(angle) * dist;
    this.y = cy + Math.sin(angle) * dist;

    if (mouse.x != null && mouse.y != null) {
      const mdx = this.x - mouse.x;
      const mdy = this.y - mouse.y;
      const distance = Math.hypot(mdx, mdy);
      if (distance > 0 && distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        const dirX = mdx / distance;
        const dirY = mdy / distance;
        this.x += dirX * force * 1.5;
        this.y += dirY * force * 1.5;
      }
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.baseColor;
    ctx.shadowBlur = 4;
    ctx.shadowColor = this.baseColor;
    ctx.fill();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    const particles = [];
    const particleCount = 80;
    const connectionDistance = 120;

    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0;

      particles.forEach((particle) => {
        particle.update(canvas, mouse);
        particle.draw(ctx);
      });

      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-transparent"
    />
  );
}
