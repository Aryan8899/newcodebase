import { useEffect, useRef, useState } from 'react';
import { Globe, Smartphone, Palette, Search, Server, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom web applications built with modern technologies and best practices.',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile apps for iOS and Android.',
    color: '#e91e8c',
    bg: '#fdf2f8',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces that enhance user experience.',
    color: '#06b6d4',
    bg: '#ecfeff',
  },
  {
    icon: Search,
    title: 'SEO Services',
    desc: 'Optimize your website for better search engine rankings.',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    icon: Server,
    title: 'Web Hosting',
    desc: '99.9% uptime guarantee with 24/7 customer support.',
    color: '#10b981',
    bg: '#ecfdf5',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    desc: 'Lightning-fast websites that deliver exceptional user experiences.',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', paddingTop: '110px', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,300&family=DM+Sans:wght@400;500;600;700&display=swap');

        .sp-badge {
          display: inline-block;
          background: #fdf2f8;
          color: #e91e8c;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 50px;
          margin-bottom: 16px;
        }
        .sp-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 900;
          color: #111;
          line-height: 1.08;
          margin: 0 0 16px;
        }
        .sp-h1 em { font-style: italic; color: #3b82f6; }
        .sp-sub {
          font-size: 17px;
          color: #777;
          line-height: 1.75;
          max-width: 520px;
        }

        .sp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 60px;
        }
        @media (max-width: 1024px) { .sp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .sp-grid { grid-template-columns: 1fr; } }

        .sp-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .sp-card.show {
          opacity: 1;
          transform: translateY(0);
        }
        .sp-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: var(--card-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .sp-card:hover::before { transform: scaleX(1); }
        .sp-card:hover {
          box-shadow: 0 16px 36px rgba(0,0,0,0.10);
          transform: translateY(-6px) !important;
        }

        .sp-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }
        .sp-card:hover .sp-icon { transform: scale(1.1) rotate(-4deg); }

        .sp-card-title {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }
        .sp-card-desc {
          font-size: 14px;
          color: #777;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .sp-learn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          border: none;
          background: none;
          padding: 0;
          cursor: pointer;
          transition: gap 0.2s, color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .sp-learn:hover { gap: 10px; }
        .sp-learn svg { transition: transform 0.2s; }
        .sp-learn:hover svg { transform: translateX(3px); }

        .sp-hero-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .sp-hero-fade.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div ref={sectionRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Hero */}
        <div className={`sp-hero-fade ${visible ? 'show' : ''}`}>
          <span className="sp-badge">What We Do</span>
          <h1 className="sp-h1">Services Built for<br /><em>Real Results</em></h1>
          <p className="sp-sub">
            From design to deployment, we cover every layer of your digital product — so you can focus on growing your business.
          </p>
        </div>

        {/* Cards */}
        <div className="sp-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`sp-card ${visible ? 'show' : ''}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                '--card-color': s.color,
              } as React.CSSProperties}
            >
              <div className="sp-icon" style={{ background: s.bg }}>
                <s.icon size={24} color={s.color} />
              </div>
              <div className="sp-card-title">{s.title}</div>
              <div className="sp-card-desc">{s.desc}</div>
              <button className="sp-learn" style={{ color: s.color }}>
                Learn More <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}