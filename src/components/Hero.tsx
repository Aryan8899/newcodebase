import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; radius: number; vx: number; vy: number }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();

        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #ecfeff 100%)', boxSizing: 'border-box', paddingTop: '90px' }}>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 32px 60px;
        }

        .hero-left { text-align: left; }
        .hero-h1 {
          font-size: 56px;
          font-weight: 800;
          color: #111827;
          line-height: 1.15;
          margin: 0 0 24px;
        }
        .hero-cyan { color: #0891b2; }
        .hero-rank-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .hero-rank-num {
          font-size: 48px;
          font-weight: 800;
          color: #db2777;
        }
        .hero-rank-text { font-size: 14px; color: #374151; }
        .hero-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          cursor: pointer;
          color: #374151;
          font-size: 15px;
          font-weight: 500;
          padding: 0;
          transition: color 0.2s;
        }
        .hero-btn:hover { color: #db2777; }
        .hero-btn-circle {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 2px solid #d1d5db;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s;
        }
        .hero-btn:hover .hero-btn-circle { border-color: #db2777; }

        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-img {
          width: 100%;
          max-width: 480px;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
          position: relative;
          z-index: 1;
        }
        .hero-bubble {
          position: absolute;
          width: 120px; height: 120px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
        }
        .hero-bubble-left { bottom: -20px; left: -20px; }
        .hero-bubble-right { top: -20px; right: -20px; }

        /* ── MOBILE ── */
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 20px 24px 80px;
            gap: 32px;
          }
          .hero-left { text-align: center; }
          .hero-h1 { font-size: 36px; }
          .hero-rank-row { justify-content: center; }
          .hero-rank-num { font-size: 36px; }
          .hero-btn { justify-content: center; }
          .hero-right { padding: 0 32px; margin-top: 16px; }
          .hero-bubble { width: 80px !important; height: 80px !important; }
          .hero-bubble-left { bottom: -10px; left: 8px; }
          .hero-bubble-right { top: -10px; right: 8px; }
          .hero-bubble-num { font-size: 18px !important; }
          .hero-bubble-label { font-size: 10px !important; }
        }

        @media (min-width: 1024px) {
          .hero-bubble { width: 128px; height: 128px; }
          .hero-bubble-left { bottom: -40px; left: -40px; }
          .hero-bubble-right { top: -40px; right: -40px; }
        }
      `}</style>

      {/* Canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }} />

      {/* Glows */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '384px', height: '384px', background: 'radial-gradient(circle, rgba(34,211,238,0.3), rgba(59,130,246,0.2))', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '384px', height: '384px', background: 'radial-gradient(circle, rgba(52,211,153,0.3), rgba(34,211,238,0.2))', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid">

          {/* Left */}
          <div className="hero-left">
            <h1 className="hero-h1">
              Mobile App<br />
              <span className="hero-cyan">Development Company</span>
            </h1>

            <div className="hero-rank-row">
              <span className="hero-rank-num">#1</span>
              <div className="hero-rank-text">
                <p>Ranked as <strong style={{ color: '#db2777' }}>#1 Top App Development</strong></p>
                <p>Company in USA and India</p>
              </div>
            </div>

            <button className="hero-btn">
              <div className="hero-btn-circle">
                <ArrowRight size={18} />
              </div>
              Drop Your Queries
            </button>
          </div>

          {/* Right */}
          <div className="hero-right">
            <img
              src="https://www.hyperlinkinfosystem.com/assets/img/main-banner/mobile-app-development.png"
              alt="Mobile App Development"
              className="hero-img"
            />

            <div className="hero-bubble hero-bubble-left animate-bounce-slow">
              <div style={{ textAlign: 'center' }}>
                <div className="hero-bubble-num" style={{ fontSize: '26px', fontWeight: 800, color: '#2563eb' }}>12+</div>
                <div className="hero-bubble-label" style={{ fontSize: '11px', color: '#6b7280' }}>Years</div>
              </div>
            </div>

            <div className="hero-bubble hero-bubble-right animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="hero-bubble-num" style={{ fontSize: '22px', fontWeight: 800, color: '#db2777' }}>4500+</div>
                <div className="hero-bubble-label" style={{ fontSize: '11px', color: '#6b7280' }}>Apps</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}