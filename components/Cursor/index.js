import React, { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const [mount, setMount] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    setMount(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create particle trail randomly
      if (Math.random() > 0.85) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 3,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          opacity: 1,
          color: `hsl(${Math.random() * 60 + 260}, 80%, 70%)`
        };
        setParticles(prev => [...prev.slice(-15), newParticle]);
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .link, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (!e.target.closest('a, button, .link, [role="button"]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            opacity: p.opacity - 0.02,
            size: p.size * 0.95
          }))
          .filter(p => p.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  if (!mount) return null;

  return (
    <>
      <style jsx>{`
        .liquid-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .cursor-blob {
          position: absolute;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: blob-morph 3s ease-in-out infinite, blob-rotate 8s linear infinite;
          filter: blur(1px);
        }

        .cursor-blob.hovering {
          width: 60px;
          height: 60px;
          animation: blob-morph-hover 0.5s ease-in-out infinite, blob-rotate 2s linear infinite, ripple-pulse 1.5s ease-out infinite;
        }

        .cursor-ring {
          position: absolute;
          width: 50px;
          height: 50px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ring-rotate 4s linear infinite reverse;
        }

        .cursor-ring.hovering {
          width: 70px;
          height: 70px;
          border-width: 3px;
          border-color: rgba(255, 255, 255, 0.6);
        }

        .particle {
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          border-radius: 50%;
          filter: blur(1px);
        }

        @keyframes blob-morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 40% 60% 40% / 30% 50% 70% 50%;
          }
          75% {
            border-radius: 40% 60% 50% 40% / 60% 40% 60% 50%;
          }
        }

        @keyframes blob-morph-hover {
          0%, 100% {
            border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 60% 40% 40% 60% / 40% 70% 30% 60%;
          }
        }

        @keyframes blob-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes ring-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); }
          to { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
        }

        @keyframes ripple-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7),
                        0 0 0 10px rgba(118, 75, 162, 0.4),
                        0 0 0 20px rgba(240, 147, 251, 0.2);
          }
          100% {
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0),
                        0 0 0 20px rgba(118, 75, 162, 0),
                        0 0 0 30px rgba(240, 147, 251, 0);
          }
        }
      `}</style>
      
      <div 
        className="liquid-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className={`cursor-blob ${isHovering ? 'hovering' : ''}`} />
        <div className={`cursor-ring ${isHovering ? 'hovering' : ''}`} />
      </div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </>
  );
};

export default Cursor;
