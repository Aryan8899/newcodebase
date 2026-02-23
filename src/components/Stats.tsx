import { Award, Smartphone, Globe, Star, Download, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration: number = 1500, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatCard({ icon: Icon, number, label, color, started, delay }: {
  icon: any;
  number: string;
  label: string;
  color: string;
  started: boolean;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (started) {
      setTimeout(() => setVisible(true), delay);
    }
  }, [started, delay]);

  // Parse number: extract numeric part and suffix
  const match = number.match(/^([\d.]+)([^\d.]*)$/);
  const numericValue = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const isDecimal = number.includes('.');

  const count = useCountUp(isDecimal ? numericValue * 10 : numericValue, 1500, visible);
  const displayNum = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <div
      className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 ${color} rounded-lg mb-4`}>
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {displayNum}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, number: '12+', label: 'Years of Experience', color: 'bg-blue-100 text-blue-600' },
    { icon: Smartphone, number: '4500+', label: 'Mobile Apps Developed', color: 'bg-green-100 text-green-600' },
    { icon: Globe, number: '2200+', label: 'Websites Developed', color: 'bg-pink-100 text-pink-600' },
    { icon: Star, number: '4.9', label: 'Ratings on Clutch.co', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Download, number: '110+', label: 'App Downloads (M)', color: 'bg-purple-100 text-purple-600' },
    { icon: Users, number: '1200+', label: 'Dedicated Developers', color: 'bg-cyan-100 text-cyan-600' },
  ];

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-pink-600 uppercase tracking-widest mb-3">Our Achievements</p>
        <h2 className="text-4xl font-bold text-gray-900">Years of Experience</h2>
        <div className="mt-4 mx-auto w-16 h-1 bg-pink-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              started={started}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}