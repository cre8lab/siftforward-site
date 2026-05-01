"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  targetBias: number;
};

type Pulse = {
  path: number;
  t: number;
  speed: number;
};

type OutputPath = {
  sx: number; sy: number;
  cx: number; cy: number;
  ex: number; ey: number;
};

export default function HeroPortalBackground() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const particles  = useRef<Particle[]>([]);
  const pulses     = useRef<Pulse[]>([]);
  const rafId      = useRef<number>(0);
  // Cached layout values — recalculated on resize, never on every frame
  const corePos    = useRef({ x: 0, y: 0 });
  const outputPaths = useRef<OutputPath[]>([]);
  const bgGrad     = useRef<CanvasGradient | null>(null);
  const coreGrad   = useRef<CanvasGradient | null>(null);
  const isMobile   = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- Setup helpers ---

    function resize() {
      isMobile.current = window.innerWidth < 768;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;
      // Mobile uses DPR 1.0 — soft glows don't need high resolution
      const ratio = Math.min(
        window.devicePixelRatio || 1,
        isMobile.current ? 1.0 : 1.5,
      );
      canvas.width  = w * ratio;
      canvas.height = h * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      recalculate();
    }

    function recalculate() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;

      // Core: the point where noise converges and becomes signal
      const cx = w * 0.38;
      const cy = h * 0.50;
      corePos.current = { x: cx, y: cy };

      // Three output paths fanning right from core toward the output card positions
      outputPaths.current = [
        { sx: cx, sy: cy, cx: w * 0.64, cy: h * 0.19, ex: w * 0.98, ey: h * 0.23 },
        { sx: cx, sy: cy, cx: w * 0.71, cy: cy,        ex: w * 0.98, ey: cy        },
        { sx: cx, sy: cy, cx: w * 0.64, cy: h * 0.81, ex: w * 0.98, ey: h * 0.77 },
      ];

      // Background area glow — very faint, only near the core
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 140);
      bg.addColorStop(0,    "rgba(20,184,166,0.04)");
      bg.addColorStop(0.55, "rgba(6,182,212,0.015)");
      bg.addColorStop(1,    "rgba(20,184,166,0)");
      bgGrad.current = bg;

      // Core glow — subtle, not bright
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 13);
      cg.addColorStop(0,   "rgba(20,184,166,0.60)");
      cg.addColorStop(0.5, "rgba(20,184,166,0.18)");
      cg.addColorStop(1,   "rgba(20,184,166,0)");
      coreGrad.current = cg;
    }

    // w and h passed in to avoid repeated DOM reads during batch spawn
    function spawn(w: number, h: number): Particle {
      return {
        x:          Math.random() * w * 0.34,          // stay clear of the core at 0.38
        y:          h * 0.04 + Math.random() * h * 0.92,
        vx:         (Math.random() - 0.5) * 0.30,      // small initial nudge so particles are immediately alive
        vy:         (Math.random() - 0.5) * 0.30,
        size:       0.8 + Math.random() * 1.5,
        alpha:      0.10 + Math.random() * 0.26,
        phase:      Math.random() * Math.PI * 2,
        targetBias: 0.35 + Math.random() * 0.45,
      };
    }

    function initParticles() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = isMobile.current ? 18 : 35;
      particles.current = Array.from({ length: count }, () => spawn(w, h));
    }

    function quadBezPoint(
      t: number,
      sx: number, sy: number,
      cx: number, cy: number,
      ex: number, ey: number,
    ) {
      const u = 1 - t;
      return {
        x: u * u * sx + 2 * u * t * cx + t * t * ex,
        y: u * u * sy + 2 * u * t * cy + t * t * ey,
      };
    }

    // --- Draw ---

    function drawFrame(timestamp: number) {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) {
        rafId.current = requestAnimationFrame(drawFrame);
        return;
      }

      const core   = corePos.current;
      const paths  = outputPaths.current;
      const mobile = isMobile.current;
      const t      = timestamp * 0.001;

      ctx.clearRect(0, 0, w, h);

      // Layer 1 — background area glow (cached)
      if (bgGrad.current) {
        ctx.fillStyle = bgGrad.current;
        ctx.fillRect(0, 0, w, h);
      }

      // Layer 2 — noise particles drifting toward the core
      const ps = particles.current;
      for (let i = 0; i < ps.length; i++) {
        const p  = ps[i];
        const dx = core.x - p.x;
        const dy = core.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 28) {
          // Absorbed into core — fade out, then respawn in the noise field
          p.alpha *= 0.97;
          if (p.alpha < 0.015) {
            ps[i] = spawn(w, h);
            continue;
          }
        } else {
          const f = (p.targetBias * 0.013) / dist;
          p.vx += dx * f;
          p.vy += dy * f;
        }

        p.vx *= 0.91;
        p.vy *= 0.91;
        p.x  += p.vx;
        p.y  += p.vy;

        const a = Math.max(0, Math.min(0.42, p.alpha + Math.sin(t * 0.8 + p.phase) * 0.05));
        if (a < 0.01) continue;

        // Very subtle teal shift only when very close to core
        const proximity = Math.max(0, 1 - dist / 80);
        const r = Math.round(148 - proximity * 128);
        const g = Math.round(163 + proximity * 21);
        const b = Math.round(184 - proximity * 18);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(2)})`;
        ctx.fill();
      }

      // Layer 3 — output path curves (faint)
      ctx.lineWidth    = 1;
      ctx.strokeStyle  = "rgba(20,184,166,0.12)";
      for (const path of paths) {
        ctx.beginPath();
        ctx.moveTo(path.sx, path.sy);
        ctx.quadraticCurveTo(path.cx, path.cy, path.ex, path.ey);
        ctx.stroke();
      }

      // Layer 4 — signal pulses (desktop only, max 2 concurrent, infrequent)
      if (!mobile) {
        if (Math.random() < 0.005 && pulses.current.length < 2) {
          pulses.current.push({
            path:  Math.floor(Math.random() * 3),
            t:     0,
            speed: 0.003 + Math.random() * 0.0025,
          });
        }
        pulses.current = pulses.current.filter((p) => p.t <= 1);
        for (const pulse of pulses.current) {
          pulse.t += pulse.speed;
          const path = paths[pulse.path];
          const pos  = quadBezPoint(
            pulse.t,
            path.sx, path.sy,
            path.cx, path.cy,
            path.ex, path.ey,
          );
          // Smooth sine envelope: invisible at start/end, peak in the middle
          const alpha = (Math.sin(pulse.t * Math.PI) * 0.65).toFixed(2);
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(20,184,166,${alpha})`;
          ctx.fill();
        }
      }

      // Layer 5 — sift core
      // Static ring — no oscillation, just a quiet indicator
      ctx.beginPath();
      ctx.arc(core.x, core.y, 13, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(20,184,166,0.16)";
      ctx.lineWidth   = 1;
      ctx.stroke();

      // Core glow (cached)
      if (coreGrad.current) {
        ctx.beginPath();
        ctx.arc(core.x, core.y, 13, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad.current;
        ctx.fill();
      }

      // Center point — solid teal dot, intentional not accidental
      ctx.beginPath();
      ctx.arc(core.x, core.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(20,184,166,0.92)";
      ctx.fill();

      rafId.current = requestAnimationFrame(drawFrame);
    }

    function drawStatic() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;
      const core  = corePos.current;
      const paths = outputPaths.current;

      ctx.clearRect(0, 0, w, h);

      if (bgGrad.current) {
        ctx.fillStyle = bgGrad.current;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.lineWidth   = 1;
      ctx.strokeStyle = "rgba(20,184,166,0.10)";
      for (const path of paths) {
        ctx.beginPath();
        ctx.moveTo(path.sx, path.sy);
        ctx.quadraticCurveTo(path.cx, path.cy, path.ex, path.ey);
        ctx.stroke();
      }

      for (const p of particles.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${(p.alpha * 0.5).toFixed(2)})`;
        ctx.fill();
      }

      if (coreGrad.current) {
        ctx.beginPath();
        ctx.arc(core.x, core.y, 13, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad.current;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(core.x, core.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(20,184,166,0.92)";
      ctx.fill();
    }

    // --- Lifecycle ---

    resize();
    initParticles();

    if (reducedMotion) {
      drawStatic();
    } else {
      rafId.current = requestAnimationFrame(drawFrame);
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId.current);
      } else if (!reducedMotion) {
        rafId.current = requestAnimationFrame(drawFrame);
      }
    }

    function handleResize() {
      resize();
      initParticles();
      if (reducedMotion) drawStatic();
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
