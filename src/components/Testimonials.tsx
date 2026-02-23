import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Cool Charms Friends',
      rating: 5,
      review: 'Outstanding service and exceptional results. The team delivered beyond our expectations!',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      name: 'Fast Food Franchisee',
      rating: 5,
      review: 'Professional, responsive, and innovative. They transformed our digital presence completely.',
      color: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      name: 'Buzapp',
      rating: 5,
      review: 'Highly recommend! Their expertise in mobile app development is unmatched in the industry.',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <style>{`
        .tm-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .tm-heading.show { opacity: 1; transform: translateY(0); }

        .tm-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease;
        }
        .tm-card.show { opacity: 1; transform: translateY(0); }
        .tm-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transform: translateY(-6px) !important;
        }

        .tm-avatar {
          transition: transform 0.3s ease;
        }
        .tm-card:hover .tm-avatar {
          transform: scale(1.1) rotate(5deg);
        }

        .tm-star {
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .tm-star.show {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 tm-heading ${visible ? 'show' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Collection of responses we have got so far by delivering exceptional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`tm-card bg-white rounded-2xl p-8 shadow-lg ${visible ? 'show' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`tm-avatar w-16 h-16 ${testimonial.color} rounded-full flex items-center justify-center`}>
                  <span className={`text-2xl font-bold ${testimonial.iconColor}`}>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`tm-star w-4 h-4 fill-yellow-400 text-yellow-400 ${visible ? 'show' : ''}`}
                        style={{ transitionDelay: `${index * 0.15 + i * 0.07}s` }}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{testimonial.rating} Ratings</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}