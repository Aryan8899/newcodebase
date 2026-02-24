import { useEffect, useRef } from 'react';

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
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #ecfeff 100%)', boxSizing: 'border-box', paddingTop: '130px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 32px 60px;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-left { text-align: left; }

        .hero-h1 {
          font-size: 52px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.18;
          margin: 0 0 16px;
          letter-spacing: -1px;
          overflow: hidden;
        }

        .hero-h1-main {
          display: block;
          animation: slideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
          animation-delay: 0.1s;
        }

        .hero-cyan {
          color: #0891b2;
          display: block;
          animation: slideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
          animation-delay: 0.35s;
        }

        .hero-sub {
          font-size: 15px;
          color: #64748b;
          margin: 0 0 32px;
          line-height: 1.6;
          opacity: 0;
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 0.65s;
        }
        .hero-sub strong { color: #db2777; font-weight: 600; }

        .store-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 0.85s;
        }
        .store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .store-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.15);
        }
        .store-btn-dark { background: #0f172a; color: #fff; }
        .store-btn-light {
          background: #fff; color: #0f172a;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        }
        .store-btn-icon { width: 24px; height: 24px; flex-shrink: 0; }
        .store-btn-text { display: flex; flex-direction: column; align-items: flex-start; }
        .store-btn-sub { font-size: 10px; font-weight: 400; opacity: 0.7; line-height: 1; margin-bottom: 2px; }
        .store-btn-name { font-size: 15px; font-weight: 700; line-height: 1; }

        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards;
          animation-delay: 0.4s;
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
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
        }

        /* ── MOBILE ── */
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 32px 24px 80px;
            gap: 28px;
          }
          .hero-left { text-align: center; }
          .hero-h1 { font-size: 28px; letter-spacing: -0.5px; }
          .store-btns { justify-content: center; }
          .hero-right { padding: 0 24px; margin-top: 8px; }
          .hero-bubble { width: 76px !important; height: 76px !important; }
          .hero-bubble-left { bottom: -10px !important; left: 4px !important; }
          .hero-bubble-right { top: -10px !important; right: 4px !important; }
          .hero-bubble-num { font-size: 17px !important; }
          .hero-bubble-label { font-size: 9px !important; }
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
              <span className="hero-h1-main">Connecting People Who Need Work Done</span>
              <span className="hero-cyan">with Skilled Taskers Nearby</span>
            </h1>

            <p className="hero-sub">
              Post a task. Get offers. Choose the best. <strong>Pay securely.</strong>
            </p>

            {/* Store Buttons */}
            <div className="store-btns">
              <a href="#" className="store-btn store-btn-dark">
                <svg className="store-btn-icon" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.78 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="store-btn-text">
                  <span className="store-btn-sub">Download on the</span>
                  <span className="store-btn-name">App Store</span>
                </div>
              </a>

              <a href="#" className="store-btn store-btn-light">
                <svg className="store-btn-icon" viewBox="0 0 24 24">
                  <path d="M3.18 23.76C3.06 23.69 3 23.54 3 23.33V0.67C3 0.46 3.06 0.31 3.18 0.24L3.24 0.18L13.27 10.21V10.5L3.24 20.52L3.18 23.76Z" fill="#EA4335"/>
                  <path d="M16.59 13.53L13.27 10.21V9.92L16.6 6.6L16.67 6.64L20.63 8.9C21.76 9.54 21.76 10.58 20.63 11.23L16.67 13.49L16.59 13.53Z" fill="#FBBC04"/>
                  <path d="M16.67 13.49L13.27 10.12L3.18 20.21C3.55 20.6 4.15 20.65 4.82 20.28L16.67 13.49Z" fill="#34A853"/>
                  <path d="M16.67 6.75L4.82 -0.04C4.15 -0.41 3.55 -0.36 3.18 0.03L13.27 10.12L16.67 6.75Z" fill="#4285F4"/>
                </svg>
                <div className="store-btn-text">
                  <span className="store-btn-sub">Get it on</span>
                  <span className="store-btn-name">Google Play</span>
                </div>
              </a>
            </div>
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
                <div className="hero-bubble-num" style={{ fontSize: '22px', fontWeight: 800, color: '#db2777' }}>5000+</div>
                <div className="hero-bubble-label" style={{ fontSize: '11px', color: '#6b7280' }}>downloads</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}