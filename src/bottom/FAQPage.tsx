import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What services does Mobrib offer?',
    a: 'Mobrib offers a full range of digital services including Web Development, Mobile App Development, UI/UX Design, SEO Services, Web Hosting, and Performance Optimization. We cover every layer of your digital product.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'The timeline depends on the complexity of the app. A simple app can take 4–8 weeks, while a more complex product with custom features typically takes 3–6 months. We provide a detailed timeline after our initial discovery call.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes! We offer dedicated post-launch support and maintenance packages. Our team is available 24/7 to ensure your product runs smoothly, stays secure, and evolves with your business needs.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'We work with modern technology stacks including React, Next.js, Node.js, Flutter, React Native, Swift, Kotlin, and more. We choose the best tools based on your project requirements and long-term scalability.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing varies based on scope, complexity, and timeline. We offer flexible engagement models — fixed price, time & material, and dedicated team. Get in touch for a free quote tailored to your project.',
  },
  {
    q: 'Can you redesign my existing website or app?',
    a: 'Absolutely. We specialize in redesigns and modernization projects. Whether it\'s a full visual overhaul or a performance upgrade, we\'ll help you bring your product up to today\'s standards.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Every product we build is fully responsive and optimized for all screen sizes — mobile, tablet, and desktop. Mobile-first is our default approach, not an afterthought.',
  },
  {
    q: 'How do I get started with Mobrib?',
    a: 'Simply click "Get A Free Quote" in the header or visit our Contact page. We\'ll schedule a free discovery call to understand your goals and recommend the best approach for your project.',
  },
];

function FAQItem({ faq, index, visible }: { faq: { q: string; a: string }; index: number; visible: boolean }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`faq-item ${visible ? 'show' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button className={`faq-trigger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span className="faq-q">{faq.q}</span>
        <span className="faq-icon">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div className={`faq-body ${open ? 'open' : ''}`}>
        <div className="faq-body-inner">{faq.a}</div>
      </div>
    </div>
  );
}

export default function FAQPage() {
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

        .faq-badge {
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
        .faq-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 900;
          color: #111;
          line-height: 1.08;
          margin: 0 0 16px;
        }
        .faq-h1 em { font-style: italic; color: #e91e8c; }
        .faq-sub {
          font-size: 16px;
          color: #777;
          line-height: 1.75;
          max-width: 500px;
        }

        .faq-hero-fade {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .faq-hero-fade.show { opacity: 1; transform: translateY(0); }

        .faq-list {
          margin-top: 56px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .faq-item.show { opacity: 1; transform: translateY(0); }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 22px 28px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.2s;
        }
        .faq-trigger:hover { background: #fafaf9; }
        .faq-trigger.open { background: #fdf2f8; }

        .faq-q {
          font-size: 16px;
          font-weight: 600;
          color: #111;
          line-height: 1.4;
          flex: 1;
        }
        .faq-trigger.open .faq-q { color: #e91e8c; }

        .faq-icon {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          transition: background 0.2s, color 0.2s, transform 0.3s;
        }
        .faq-trigger.open .faq-icon {
          background: #e91e8c;
          color: #fff;
          transform: rotate(180deg);
        }

        .faq-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .faq-body.open { max-height: 300px; }

        .faq-body-inner {
          padding: 0 28px 22px;
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          border-top: 1px solid #f5f5f5;
          padding-top: 16px;
        }

        .faq-cta-box {
          margin-top: 56px;
          background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
          border-radius: 24px;
          padding: 48px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .faq-cta-box.show { opacity: 1; transform: translateY(0); }
        .faq-cta-btn {
          background: #fff;
          color: #1976d2;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          margin-top: 20px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .faq-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
      `}</style>

      <div ref={sectionRef} style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Hero */}
        <div className={`faq-hero-fade ${visible ? 'show' : ''}`}>
          <span className="faq-badge">Got Questions?</span>
          <h1 className="faq-h1">We Have the <em>Answers</em></h1>
          <p className="faq-sub">
            Everything you need to know about working with Mobrib. Can't find what you're looking for? Reach out to us directly.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} visible={visible} />
          ))}
        </div>

        {/* CTA Box */}
        <div className={`faq-cta-box ${visible ? 'show' : ''}`}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 8px' }}>Still have questions?</p>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: 900, color: '#fff', margin: '0' }}>
            Let's Talk About Your Project
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', margin: '12px 0 0', lineHeight: 1.6 }}>
            Our team is happy to answer your questions and get you started.
          </p>
          <button className="faq-cta-btn">Get A Free Quote</button>
        </div>

      </div>
    </div>
  );
}