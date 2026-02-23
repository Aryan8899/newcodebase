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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <style>{`
        .srv-fade {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .srv-fade.show {
          opacity: 1;
          transform: translateY(0);
        }
        .srv-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .srv-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .srv-card .arrow-icon {
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .srv-card:hover .arrow-icon {
          opacity: 1;
          transform: translateX(0);
        }
        .srv-bottom {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
        }
        .srv-bottom.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-12 srv-fade ${visible ? 'show' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Amplifying Business Progress Through Smart Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Obtain robust software solutions, modernize systems, and leverage futuristic technologies for growth opportunities with the capabilities of a leading development company.
          </p>
          <button className="mt-6 flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors group">
            <span className="font-medium">Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`srv-fade srv-card rounded-2xl overflow-hidden cursor-pointer ${visible ? 'show' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-6 h-48 flex flex-col justify-between relative`}>
                <service.icon className="w-10 h-10 text-white" />
                <div>
                  <h3 className="text-white text-xl font-bold">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.subtitle}</p>
                </div>
                <ArrowRight className="arrow-icon absolute bottom-6 right-6 w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg srv-bottom ${visible ? 'show' : ''}`}>
          <div className="flex items-start space-x-6">
            <Smartphone className="w-12 h-12 text-cyan-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
              <p className="text-gray-600 mb-6">
                We specialize in augmenting the mobile experience for users of different niches, industries, products, and more that can help businesses enhance their value with futuristic mobile applications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(technologies).map(([key, value], index) => (
                  <div key={index} className="text-sm">
                    <div className="font-semibold text-gray-900">{key}</div>
                    <div className="text-gray-600">{value}</div>
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