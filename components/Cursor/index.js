import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const isHoveringRef = useRef(false);
  const particlesRef = useRef([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    if (!cursor || !cursorDot || !cursorRing) return;

    const interactiveSelector = 'a, button, .link, [role="button"], input, textarea, select';
    let lastParticleTime = 0;

    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      
      const size = Math.random() * 4 + 2;
      const vx = (Math.random() - 0.5) * 1.2;
      const vy = (Math.random() - 0.5) * 1.2;
      const hue = Math.random() * 60 + 260;
      
      particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: hsl(${hue}, 80%, 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 10px hsl(${hue}, 80%, 70%);
      `;
      
      document.body.appendChild(particle);
      
      const particleData = {
        element: particle,
        x,
        y,
        vx,
        vy,
        opacity: 1,
        life: 1
      };
      
      particlesRef.current.push(particleData);
      
      if (particlesRef.current.length > 20) {
        const removed = particlesRef.current.shift();
        removed.element.remove();
      }
    };

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      
      const now = Date.now();
      if (now - lastParticleTime > 30) {
        createParticle(e.clientX, e.clientY);
        lastParticleTime = now;
      }
    };

    const handlePointerOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        isHoveringRef.current = true;
        cursor.classList.add('hovering');
      }
    };

    const handlePointerOut = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest(interactiveSelector)) {
        isHoveringRef.current = false;
        cursor.classList.remove('hovering');
      }
    };

    const animate = () => {
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;
      
      currentRef.current.x += dx * 0.2;
      currentRef.current.y += dy * 0.2;

      cursor.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`;
      
      // Animate particles
      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        p.opacity = p.life;
        
        if (p.life <= 0) {
          p.element.remove();
          return false;
        }
        
        p.element.style.transform = `translate(-50%, -50%) scale(${p.life})`;
        p.element.style.opacity = p.opacity;
        p.element.style.left = `${p.x}px`;
        p.element.style.top = `${p.y}px`;
        
        return true;
      });
      
      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('pointerover', handlePointerOver, { passive: true, capture: true });
    document.addEventListener('pointerout', handlePointerOut, { passive: true, capture: true });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('pointerover', handlePointerOver, { capture: true });
      document.removeEventListener('pointerout', handlePointerOut, { capture: true });
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      particlesRef.current.forEach(p => p.element.remove());
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
          left: 0;
          top: 0;
        }

        .cursor-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, #ec4899, #a855f7);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 
            0 0 15px rgba(168, 85, 247, 0.8),
            0 0 30px rgba(236, 72, 153, 0.4);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .cursor-ring {
          position: absolute;
          width: 35px;
          height: 35px;
          border: 2px solid rgba(168, 85, 247, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: rotate-ring 8s linear infinite;
        }

        .cursor.hovering .cursor-ring {
          width: 55px;
          height: 55px;
          border-color: rgba(236, 72, 153, 0.7);
          border-width: 3px;
          animation: rotate-ring 2s linear infinite, pulse-ring 1s ease-in-out infinite;
        }

        .cursor.hovering .cursor-dot {
          width: 14px;
          height: 14px;
          background: radial-gradient(circle, #f472b6, #c084fc);
          box-shadow: 
            0 0 20px rgba(236, 72, 153, 1),
            0 0 40px rgba(168, 85, 247, 0.6);
        }

        @keyframes pulse-dot {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes rotate-ring {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes pulse-ring {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
          }
        }
      `}</style>
      
      <div ref={cursorRef} className="cursor">
        <div ref={cursorDotRef} className="cursor-dot" />
        <div ref={cursorRingRef} className="cursor-ring" />
      </div>
    </>
  );
};

export default Cursor;
