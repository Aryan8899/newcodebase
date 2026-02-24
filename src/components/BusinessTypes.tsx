import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface BusinessTypesProps {
  onNavigate: (path: string) => void;
}

export default function BusinessTypes({ onNavigate }: BusinessTypesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); obs1.disconnect(); } },
      { threshold: 0.1 }
    );
    const obs2 = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setBottomVisible(true); obs2.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs1.observe(sectionRef.current);
    if (bottomRef.current) obs2.observe(bottomRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  const businessTypes = [
    {
      number: '1.',
      title: 'Busy Individuals',
      description: "Need help with daily tasks, repairs, deliveries, or home services? Post a task and get it done quickly.",
    },
    {
      number: '2.',
      title: 'Homeowners',
      description: 'From plumbing to electrical fixes, find verified professionals near you.',
    },
    {
      number: '3.',
      title: 'Freelancers & Skilled Professionals',
      description: 'Offer your services, receive job requests, and earn flexibly.',
    },
    {
      number: '4.',
      title: 'Small Service Providers',
      description: 'Grow your income by connecting with local customers instantly.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <style>{`
        .bt-img {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .bt-img.show { opacity: 1; transform: translateX(0); }

        .bt-text {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .bt-text.show { opacity: 1; transform: translateX(0); }

        .bt-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .bt-heading.show { opacity: 1; transform: translateY(0); }

        .bt-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          border-left: 3px solid transparent;
          padding-left: 16px;
        }
        .bt-card.show { opacity: 1; transform: translateY(0); }
        .bt-card:hover {
          border-left-color: #e91e8c;
        }
        .bt-card:hover .bt-num {
          color: #e91e8c;
          transform: scale(1.1);
        }
        .bt-num {
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-block;
        }

        .bt-queries-btn {
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          color: #e91e8c;
          font-size: 15px;
          font-weight: 600;
          padding: 0;
          font-family: inherit;
          transition: gap 0.2s;
        }
        .bt-queries-btn:hover { gap: 12px; }
        .bt-queries-btn:hover .bt-arrow { transform: translateX(4px); }
        .bt-arrow { transition: transform 0.2s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`bt-img ${visible ? 'show' : ''}`}>
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div className={`bt-text ${visible ? 'show' : ''}`}>
            <div className="mb-8">
              <span className="text-pink-600 font-semibold">Contact Us</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Bring Innovation Together!
              </h2>
              <p className="text-gray-600">
                Reach out to the team of the most innovative IT transformation team and bring the transformation you need.
              </p>
              <button
                className="bt-queries-btn"
                onClick={() => {
                  onNavigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Drop Your Queries</span>
                <ArrowRight size={18} className="bt-arrow" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20" ref={bottomRef}>
          <div className={`bt-heading ${bottomVisible ? 'show' : ''}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who Uses Mobrib?
            </h2>
            <br/>
            <br/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className={`bt-card flex space-x-4 ${bottomVisible ? 'show' : ''}`}
                style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
              >
                <div className="text-4xl font-bold text-gray-900 flex-shrink-0">
                  <span className="bt-num">{type.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}