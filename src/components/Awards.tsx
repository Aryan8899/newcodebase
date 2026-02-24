import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

export default function Awards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const badges = [
    { name: 'Secure Escrow Payments', year: '2024' },
    { name: 'Transparent Ratings & Reviews', year: '2024' },
    { name: 'Real-Time Offers', year: '2024' },
    { name: 'Local Verified Providers', year: '2024' },
    { name: 'Industry Leader', year: '2024' },
    { name: 'Customer Choice', year: '2024' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
    >
      <style>{`
        .aw-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .aw-left.show {
          opacity: 1;
          transform: translateX(0);
        }
        .aw-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .aw-right.show {
          opacity: 1;
          transform: translateX(0);
        }
        .aw-icon-wrap {
          animation: aw-pulse 2.5s ease-in-out infinite;
        }
        @keyframes aw-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0.3); }
          50% { transform: scale(1.06); box-shadow: 0 0 0 12px rgba(255,255,255,0); }
        }
        .aw-badge {
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          transition: opacity 0.4s ease, transform 0.4s ease, background 0.3s ease;
        }
        .aw-badge.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .aw-badge:hover {
          background: rgba(255,255,255,0.25) !important;
          transform: translateY(-4px) scale(1.05);
        }
        .aw-badge:hover .aw-badge-icon {
          transform: rotate(15deg) scale(1.2);
        }
        .aw-badge-icon {
          transition: transform 0.3s ease;
        }

        /* ── RESPONSIVE ONLY ── */
        @media (max-width: 1023px) {
          .aw-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .aw-left h2 {
            font-size: 28px !important;
          }
        }
        @media (max-width: 480px) {
          .aw-badges-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .aw-right-card {
            padding: 20px !important;
          }
          .aw-left h2 {
            font-size: 24px !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aw-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className={`text-white space-y-6 aw-left ${visible ? 'show' : ''}`}>
            <h2 className="text-4xl font-bold leading-tight">
              India's Smart Task Marketplace for <br />Everyday Services
            </h2>
            <p className="text-blue-200 leading-relaxed">
              Post a task, receive offers from trusted local service providers, and pay securely through escrow
            </p>
          </div>

          {/* Right */}
          <div className={`aw-right-card bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 aw-right ${visible ? 'show' : ''}`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 aw-icon-wrap">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ranked As #1</h3>
            </div>

            <div className="aw-badges-grid grid grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`aw-badge bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center cursor-pointer ${visible ? 'show' : ''}`}
                  style={{ transitionDelay: `${0.3 + index * 0.08}s` }}
                >
                  <Award className="aw-badge-icon w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-xs text-white font-medium">{badge.name}</div>
                  <div className="text-xs text-blue-300">{badge.year}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}