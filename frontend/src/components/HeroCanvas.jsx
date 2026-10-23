import { useEffect, useRef } from "react";

export default function HeroCanvas({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;
    let raf;
    const mouse = { x: 0.5, y: 0.5 };
    const N = 72;
    const pts = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    for (let i = 0; i < N; i++) {
      const r = Math.random();
      pts.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00055,
        vy: (Math.random() - 0.5) * 0.00055,
        r: Math.random() * 1.5 + 0.7,
        depth: Math.random() * 0.8 + 0.2,
        c:
          r > 0.88
            ? "232,74,51"
            : r > 0.72
              ? "245,166,35"
              : r > 0.5
                ? "148,163,184"
                : "107,184,232",
      });
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.bottom < 0) return;
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      const ox = (mouse.x - 0.5) * 26;
      const oy = (mouse.y - 0.5) * 26;
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(148,163,184,${(1 - d / 130) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x * w + ox * a.depth, a.y * h + oy * a.depth);
            ctx.lineTo(b.x * w + ox * b.depth, b.y * h + oy * b.depth);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(${p.c},0.85)`;
        ctx.beginPath();
        ctx.arc(p.x * w + ox * p.depth, p.y * h + oy * p.depth, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={className} data-testid="hero-canvas" aria-hidden="true" />;
}
