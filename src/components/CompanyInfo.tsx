import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function CompanyInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.animate-item');
            children.forEach((child, i) => {
              setTimeout(() => {
                (child as HTMLElement).style.opacity = '1';
                (child as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <style>{`
        .animate-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="animate-item text-4xl font-bold text-gray-900 mb-6 leading-tight">
              India’s Smart Task & Service Marketplace            </h2>
          </div>
          <div className="space-y-6">
            <p className="animate-item text-gray-700 leading-relaxed">
              
              Mobrib is a modern task marketplace platform that connects people who need work done with trusted local service providers. From small errands to professional services, Mobrib makes hiring fast, secure, and hassle-free.

              With real-time updates, competitive offers, and secure escrow payments, we ensure transparency and trust at every step. <span className="font-bold">Mobrib</span> is a leading Mobile App, Software Development and Web Development company helping global businesses to bring digital transformation. Being a true technological companion, Hyperlink InfoSystem helps startups to enterprise-level businesses to be the industry leaders.
            </p>
            {/* <button className="animate-item flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors group">
              <span className="font-medium">About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}