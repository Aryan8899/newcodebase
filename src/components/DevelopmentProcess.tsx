import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    emoji: '🔍',
    title: 'Analysis',
    desc: 'We deep-dive into your business goals, target audience, and technical requirements to craft a solid foundation.',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    emoji: '🎨',
    title: 'UI/UX Design',
    desc: 'Our designers create stunning, user-centric interfaces with wireframes and interactive prototypes.',
    color: '#e91e8c',
    bg: '#fdf2f8',
  },
  {
    emoji: '💻',
    title: 'Development',
    desc: 'Experienced engineers build scalable, high-performance solutions using cutting-edge technologies.',
    color: '#06b6d4',
    bg: '#ecfeff',
  },
  {
    emoji: '🧪',
    title: 'Testing',
    desc: 'Rigorous QA processes ensure your product is bug-free, secure, and performs flawlessly.',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    emoji: '🚀',
    title: 'Deployment',
    desc: 'We launch your product smoothly and provide ongoing support to keep everything running perfectly.',
    color: '#10b981',
    bg: '#ecfdf5',
  },
];

export default function DevelopmentProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<number | null>(null);

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

  return (
    <section ref={sectionRef} style={{ padding: '80px 0', background: '#f9fafb', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .dp-heading-badge {
          display: inline-block;
          background: #fdf2f8;
          color: #e91e8c;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 16px;
        }
        .dp-heading {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .dp-subtext {
          color: #64748b;
          font-size: 16px;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .dp-track {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          margin-top: 64px;
          flex-wrap: wrap;
          position: relative;
        }
        .dp-step-wrap {
          display: flex;
          align-items: flex-start;
          gap: 0;
        }
        .dp-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 160px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .dp-step.show {
          opacity: 1;
          transform: translateY(0);
        }
        .dp-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
        }
        .dp-step:hover .dp-icon-wrap,
        .dp-step.active-step .dp-icon-wrap {
          transform: translateY(-6px) scale(1.08);
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }
        .dp-step-num {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #0f172a;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dp-step-title {
          margin-top: 14px;
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          text-align: center;
        }
        .dp-step-desc {
          margin-top: 8px;
          font-size: 12px;
          color: #64748b;
          text-align: center;
          line-height: 1.6;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
          opacity: 0;
          padding: 0 8px;
        }
        .dp-step:hover .dp-step-desc,
        .dp-step.active-step .dp-step-desc {
          max-height: 120px;
          opacity: 1;
        }
        .dp-arrow {
          display: flex;
          align-items: center;
          padding-top: 28px;
          color: #cbd5e1;
          font-size: 20px;
          flex-shrink: 0;
        }
        .dp-arrow svg {
          width: 28px;
          height: 28px;
          stroke: #cbd5e1;
          transition: stroke 0.3s;
        }

        @media (max-width: 768px) {
          .dp-track { flex-direction: column; align-items: center; }
          .dp-step-wrap { flex-direction: column; align-items: center; }
          .dp-arrow { padding-top: 0; padding-bottom: 0; transform: rotate(90deg); }
          .dp-step { width: 200px; }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="dp-heading-badge">How We Work</span>
          <h2 className="dp-heading">Development Process</h2>
          <p className="dp-subtext">A streamlined, transparent workflow that turns your idea into a world-class product.</p>
        </div>

        {/* Steps Track */}
        <div className="dp-track">
          {steps.map((step, i) => (
            <div key={i} className="dp-step-wrap">
              <div
                className={`dp-step ${visible ? 'show' : ''} ${active === i ? 'active-step' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="dp-icon-wrap" style={{ background: step.bg }}>
                  <span>{step.emoji}</span>
                </div>
                <div className="dp-step-title" style={{ color: active === i ? step.color : '#0f172a' }}>
                  {step.title}
                </div>
                <div className="dp-step-desc">{step.desc}</div>
              </div>

              {i < steps.length - 1 && (
                <div className="dp-arrow">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}