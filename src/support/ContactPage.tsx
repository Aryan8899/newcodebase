import { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Zap, Send } from 'lucide-react';

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: '#3b82f6',
      bg: '#eff6ff',
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['hello@Mobrib.com', 'support@Mobrib.com'],
      color: '#e91e8c',
      bg: '#fdf2f8',
    },
    {
      icon: MapPin,
      title: 'Location',
      lines: ['123 Tech Street', 'Silicon Valley, CA 94025'],
      color: '#10b981',
      bg: '#ecfdf5',
    },
  ];

  const extras = [
    {
      icon: Clock,
      title: 'Business Hours',
      lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: '#f59e0b',
    },
    {
      icon: Zap,
      title: 'Quick Response',
      lines: ['We typically respond to inquiries within 2-4 hours during business hours.'],
      color: '#8b5cf6',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', paddingTop: '110px', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,300&family=DM+Sans:wght@400;500;600;700&display=swap');

        .ct-badge {
          display: inline-block;
          background: #fdf2f8;
          color: #e91e8c;
          font-size: 12px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          padding: 5px 16px; border-radius: 50px; margin-bottom: 16px;
        }
        .ct-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 900; color: #111;
          line-height: 1.08; margin: 0 0 14px;
        }
        .ct-h1 em { font-style: italic; color: #e91e8c; }
        .ct-sub { font-size: 16px; color: #777; line-height: 1.75; max-width: 480px; }

        .ct-fade {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ct-fade.show { opacity: 1; transform: translateY(0); }

        /* Info cards top row */
        .ct-info-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 52px;
        }
        @media (max-width: 900px) { .ct-info-row { grid-template-columns: 1fr; } }

        .ct-info-card {
          background: #fff;
          border-radius: 18px;
          padding: 24px 24px 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex; gap: 16px; align-items: flex-start;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s;
        }
        .ct-info-card.show { opacity: 1; transform: translateY(0); }
        .ct-info-card:hover { box-shadow: 0 10px 28px rgba(0,0,0,0.09); transform: translateY(-4px) !important; }

        .ct-info-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ct-info-title {
          font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #aaa; margin-bottom: 8px;
        }
        .ct-info-line {
          font-size: 14px; font-weight: 500; color: #333;
          line-height: 1.7;
        }

        /* Main 2-col layout */
        .ct-main {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 28px;
          margin-top: 28px;
        }
        @media (max-width: 900px) { .ct-main { grid-template-columns: 1fr; } }

        /* Left extras */
        .ct-extra-card {
          background: #fff; border-radius: 18px; padding: 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .ct-extra-card.show { opacity: 1; transform: translateY(0); }
        .ct-extra-title {
          font-weight: 700; font-size: 15px; color: #111;
          margin-bottom: 10px; display: flex; align-items: center; gap: 8px;
        }
        .ct-extra-line { font-size: 14px; color: #666; line-height: 1.75; }

        /* Form card */
        .ct-form-card {
          background: #fff; border-radius: 20px; padding: 36px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          opacity: 0; transform: translateX(30px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .ct-form-card.show { opacity: 1; transform: translateX(0); }

        .ct-form-title {
          font-family: 'Fraunces', serif;
          font-size: 22px; font-weight: 800; color: #111; margin-bottom: 6px;
        }
        .ct-form-sub { font-size: 13px; color: #888; margin-bottom: 24px; line-height: 1.6; }

        .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 600px) { .ct-row { grid-template-columns: 1fr; } }

        .ct-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
        .ct-label { font-size: 12px; font-weight: 600; color: #555; letter-spacing: 0.5px; }
        .ct-input, .ct-select, .ct-textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; color: #111;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px; padding: 11px 14px;
          background: #fafaf9; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%; box-sizing: border-box;
        }
        .ct-input:focus, .ct-select:focus, .ct-textarea:focus {
          border-color: #e91e8c;
          box-shadow: 0 0 0 3px rgba(233,30,140,0.08);
          background: #fff;
        }
        .ct-textarea { resize: vertical; min-height: 120px; }

        .ct-submit {
          width: 100%; background: #1976d2; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
          padding: 14px; border-radius: 50px; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(25,118,210,0.3); margin-top: 4px;
        }
        .ct-submit:hover { background: #1565c0; transform: translateY(-2px); box-shadow: 0 8px 22px rgba(25,118,210,0.35); }

        .ct-success {
          background: #ecfdf5; border: 1.5px solid #10b981;
          border-radius: 12px; padding: 16px 20px;
          color: #065f46; font-size: 14px; font-weight: 600;
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 20px;
          animation: slideDown 0.4s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div ref={sectionRef} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Hero */}
        <div className={`ct-fade ${visible ? 'show' : ''}`}>
          <span className="ct-badge">Get In Touch</span>
          <h1 className="ct-h1">Let's Build Something<br /><em>Great Together</em></h1>
          <p className="ct-sub">Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.</p>
        </div>

        {/* Top info cards */}
        <div className="ct-info-row">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className={`ct-info-card ${visible ? 'show' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="ct-info-icon" style={{ background: info.bg }}>
                <info.icon size={20} color={info.color} />
              </div>
              <div>
                <div className="ct-info-title">{info.title}</div>
                {info.lines.map((line, j) => (
                  <div key={j} className="ct-info-line">{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main layout */}
        <div className="ct-main">

          {/* Left — extras */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {extras.map((ex, i) => (
              <div
                key={i}
                className={`ct-extra-card ${visible ? 'show' : ''}`}
                style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="ct-extra-title">
                  <ex.icon size={16} color={ex.color} />
                  <span style={{ color: ex.color }}>{ex.title}</span>
                </div>
                {ex.lines.map((line, j) => (
                  <div key={j} className="ct-extra-line">{line}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div className={`ct-form-card ${visible ? 'show' : ''}`}>
            <div className="ct-form-title">Let's Start a Conversation</div>
            <div className="ct-form-sub">Fill out the form and our team will get back to you within 24 hours.</div>

            {submitted && (
              <div className="ct-success">
                ✅ Message sent! We'll get back to you within 24 hours.
              </div>
            )}

            <div className="ct-row">
              <div className="ct-field">
                <label className="ct-label">Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} className="ct-input" placeholder="John Doe" />
              </div>
              <div className="ct-field">
                <label className="ct-label">Email Address *</label>
                <input name="email" value={form.email} onChange={handleChange} className="ct-input" placeholder="john@example.com" />
              </div>
            </div>

            <div className="ct-row">
              <div className="ct-field">
                <label className="ct-label">Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="ct-input" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="ct-field">
                <label className="ct-label">Subject *</label>
                <select name="subject" value={form.subject} onChange={handleChange} className="ct-select">
                  <option value="">Select a subject</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>SEO Services</option>
                  <option>Web Hosting</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="ct-field">
              <label className="ct-label">Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="ct-textarea" placeholder="Tell us about your project..." />
            </div>

            <button className="ct-submit" onClick={handleSubmit}>
              <Send size={16} /> Send Message
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}