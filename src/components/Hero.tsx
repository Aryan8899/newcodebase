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
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Mobile App
              <br />
              <span className="text-cyan-600">Development Company</span>
            </h1>

            <div className="flex items-center space-x-2">
              <span className="text-5xl font-bold text-pink-600">#1</span>
              <div className="text-sm text-gray-700">
                <p>Ranked as <span className="font-semibold text-pink-600">#1 Top App Development</span></p>
                <p>Company in USA and India</p>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors group">
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-pink-600 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="font-medium">Drop Your Queries</span>
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform rotate-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform -rotate-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-full h-2 bg-white/30 rounded"></div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 z-20 animate-bounce-slow">
              <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 z-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">4500+</div>
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
