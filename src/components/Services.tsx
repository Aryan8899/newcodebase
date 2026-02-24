import { useEffect, useRef, useState } from 'react';
import { Smartphone, Globe, ShoppingCart, Bitcoin, Gamepad2, Cloud, Brain, Cpu, ArrowRight } from 'lucide-react';

export default function Services() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Smartphone, title: 'Mobile App', subtitle: 'DEVELOPMENT', gradient: 'from-blue-600 to-cyan-500' },
    { icon: Globe, title: 'Website', subtitle: 'DEVELOPMENT', gradient: 'from-gray-700 to-gray-500' },
    { icon: ShoppingCart, title: 'E-commerce', subtitle: 'DEVELOPMENT', gradient: 'from-orange-600 to-red-500' },
    { icon: Bitcoin, title: 'Blockchain', subtitle: 'DEVELOPMENT', gradient: 'from-cyan-600 to-blue-500' },
    { icon: Gamepad2, title: 'Game', subtitle: 'DEVELOPMENT', gradient: 'from-purple-600 to-pink-500' },
    { icon: Cloud, title: 'Salesforce', subtitle: 'SOLUTIONS', gradient: 'from-blue-500 to-cyan-400' },
    { icon: Brain, title: 'AI & ML', subtitle: 'SOLUTIONS', gradient: 'from-pink-600 to-orange-500' },
    { icon: Cpu, title: 'IoT & Embedded', subtitle: 'SOLUTIONS', gradient: 'from-teal-600 to-green-500' },
  ];

  const technologies = {
    'Android App': 'React Native',
    'iPhone App': 'Kotlin',
    'Flutter': 'Ionic',
    'Swift': 'Xamarin',
  };

  return (
    <section ref={sectionRef} style={{ padding: '60px 0', background: '#f8fafc' }}>
      <style>{`
        .srv-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /* fade animation */
        .srv-fade {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .srv-fade.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* header */
        .srv-header { margin-bottom: 40px; }
        .srv-header h2 {
          font-size: clamp(22px, 4vw, 36px);
          font-weight: 800;
          color: #111827;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .srv-header p {
          font-size: 15px;
          color: #6b7280;
          max-width: 640px;
          line-height: 1.7;
          margin: 0;
        }
        .srv-explore-btn {
          margin-top: 16px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #db2777;
          font-weight: 600;
          font-size: 15px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: gap 0.2s;
        }
        .srv-explore-btn:hover { gap: 10px; }

        /* cards grid */
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (max-width: 1023px) {
          .srv-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .srv-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }

        /* individual card */
        .srv-card {
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        .srv-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .srv-card-inner {
          padding: clamp(16px, 3vw, 24px);
          height: clamp(120px, 18vw, 180px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-sizing: border-box;
        }
        .srv-card-icon { width: clamp(24px, 4vw, 36px); height: clamp(24px, 4vw, 36px); color: #fff; flex-shrink: 0; }
        .srv-card-title { color: #fff; font-size: clamp(13px, 2vw, 18px); font-weight: 700; line-height: 1.2; }
        .srv-card-sub { color: rgba(255,255,255,0.75); font-size: clamp(9px, 1.2vw, 12px); margin-top: 2px; }
        .srv-card-arrow {
          position: absolute;
          bottom: clamp(12px, 2vw, 20px);
          right: clamp(12px, 2vw, 20px);
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s, transform 0.3s;
          color: #fff;
          width: 18px; height: 18px;
        }
        .srv-card:hover .srv-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* bottom card */
        .srv-bottom {
          background: #fff;
          border-radius: 20px;
          padding: clamp(20px, 4vw, 36px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s;
        }
        .srv-bottom.show { opacity: 1; transform: translateY(0); }

        .srv-bottom-inner {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .srv-bottom-icon {
          width: 48px; height: 48px;
          color: #0891b2;
          flex-shrink: 0;
        }
        @media (max-width: 480px) {
          .srv-bottom-inner { flex-direction: column; }
          .srv-bottom-icon { width: 36px; height: 36px; }
        }

        .srv-bottom-title {
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 800;
          color: #111827;
          margin: 0 0 10px;
        }
        .srv-bottom-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .srv-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 600px) {
          .srv-tech-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .srv-tech-key { font-weight: 700; font-size: 13px; color: #111827; }
        .srv-tech-val { font-size: 13px; color: #6b7280; margin-top: 2px; }
      `}</style>

      <div className="srv-wrap">

        {/* Header */}
        <div className={`srv-header srv-fade ${visible ? 'show' : ''}`}>
          <h2>Amplifying Business Progress Through Smart Solutions</h2>
          <p>
            Obtain robust software solutions, modernize systems, and leverage futuristic technologies for growth opportunities with the capabilities of a leading development company.
          </p>
          <button className="srv-explore-btn">
            Explore Services <ArrowRight size={16} />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="srv-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`srv-card srv-fade ${visible ? 'show' : ''}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div
                className={`srv-card-inner bg-gradient-to-br ${service.gradient}`}
                style={{ background: undefined }}
              >
                <div
                  className={`srv-card-inner bg-gradient-to-br ${service.gradient}`}
                  style={{
                    position: 'absolute', inset: 0,
                    background: getGradient(service.gradient),
                    zIndex: 0,
                  }}
                />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <service.icon className="srv-card-icon" />
                  <div>
                    <div className="srv-card-title">{service.title}</div>
                    <div className="srv-card-sub">{service.subtitle}</div>
                  </div>
                </div>
                <ArrowRight className="srv-card-arrow" style={{ position: 'absolute', bottom: 'clamp(12px,2vw,20px)', right: 'clamp(12px,2vw,20px)', zIndex: 1 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className={`srv-bottom ${visible ? 'show' : ''}`}>
          <div className="srv-bottom-inner">
            <Smartphone className="srv-bottom-icon" />
            <div style={{ flex: 1 }}>
              <h3 className="srv-bottom-title">Mobile App Development</h3>
              <p className="srv-bottom-desc">
                We specialize in augmenting the mobile experience for users of different niches, industries, products, and more that can help businesses enhance their value with futuristic mobile applications.
              </p>
              <div className="srv-tech-grid">
                {Object.entries(technologies).map(([key, value], i) => (
                  <div key={i}>
                    <div className="srv-tech-key">{key}</div>
                    <div className="srv-tech-val">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function getGradient(cls: string) {
  const map: Record<string, string> = {
    'from-blue-600 to-cyan-500':    'linear-gradient(135deg, #2563eb, #06b6d4)',
    'from-gray-700 to-gray-500':    'linear-gradient(135deg, #374151, #6b7280)',
    'from-orange-600 to-red-500':   'linear-gradient(135deg, #ea580c, #ef4444)',
    'from-cyan-600 to-blue-500':    'linear-gradient(135deg, #0891b2, #3b82f6)',
    'from-purple-600 to-pink-500':  'linear-gradient(135deg, #9333ea, #ec4899)',
    'from-blue-500 to-cyan-400':    'linear-gradient(135deg, #3b82f6, #22d3ee)',
    'from-pink-600 to-orange-500':  'linear-gradient(135deg, #db2777, #f97316)',
    'from-teal-600 to-green-500':   'linear-gradient(135deg, #0d9488, #22c55e)',
  };
  return map[cls] ?? 'linear-gradient(135deg, #374151, #6b7280)';
}