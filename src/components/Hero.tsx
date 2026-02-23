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

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }> = [];

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        /* Mobile only overrides - tablet & desktop untouched */
        @media (max-width: 1023px) {
          .hero-content-left {
            text-align: center;
          }
          .hero-rank-row {
            justify-content: center;
          }
          .hero-btn-row {
            justify-content: center;
          }
          .hero-img-wrap {
            margin-top: 60px;
            padding: 0 40px;
          }
          .hero-bubble-left {
            bottom: -20px !important;
            left: 0px !important;
          }
          .hero-bubble-right {
            top: -20px !important;
            right: 0px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-h1 { font-size: 32px !important; }
          .hero-rank-num { font-size: 36px !important; }
          .hero-bubble-size {
            width: 80px !important;
            height: 80px !important;
          }
          .hero-bubble-num { font-size: 18px !important; }
        }
      `}</style>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — desktop: text-left, mobile: text-center */}
          <div className="hero-content-left text-left space-y-6">
            <h1 className="hero-h1 text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Mobile App
              <br />
              <span className="text-cyan-600">Development Company</span>
            </h1>

            <div className="hero-rank-row flex items-center space-x-2">
              <span className="hero-rank-num text-5xl font-bold text-pink-600">#1</span>
              <div className="text-sm text-gray-700">
                <p>Ranked as <span className="font-semibold text-pink-600">#1 Top App Development</span></p>
                <p>Company in USA and India</p>
              </div>
            </div>

            <div className="hero-btn-row flex">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors group">
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-pink-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span className="font-medium">Drop Your Queries</span>
              </button>
            </div>
          </div>

          {/* Right — desktop: -bottom-10 -left-10 etc. exactly as original */}
          <div className="hero-img-wrap relative flex items-center justify-center">
            <img
              src="https://www.hyperlinkinfosystem.com/assets/img/main-banner/mobile-app-development.png"
              alt="Mobile App Development"
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
            />

            <div className="hero-bubble-left hero-bubble-size absolute -bottom-10 -left-10 z-20 animate-bounce-slow"
              style={{ width: '128px', height: '128px' }}>
              <div className="w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="hero-bubble-num text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </div>
            </div>

            <div className="hero-bubble-right hero-bubble-size absolute -top-10 -right-10 z-20 animate-bounce-slow"
              style={{ width: '128px', height: '128px', animationDelay: '0.5s' }}>
              <div className="w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="hero-bubble-num text-3xl font-bold text-pink-600">4500+</div>
                  <div className="text-xs text-gray-600">Apps</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}