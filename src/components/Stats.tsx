import { Award, Smartphone, Globe, Star, Download, Users, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number = 1500, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [started, target, duration]);

  return count;
}

function StatCard({
  icon: Icon,
  number,
  label,
  color,
  started,
  delay,
}: {
  icon: any;
  number: string;
  label: string;
  color: string;
  started: boolean;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!started) return;

    const t = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(t);
  }, [started, delay]);

  // ✅ Better number parsing (supports commas like "1,000+")
  // Extract numeric part (with commas/decimals) + suffix part
  const match = number.match(/^([\d.,]+)(.*)$/);
  const numericRaw = match?.[1] ?? "0";
  const suffix = match?.[2] ?? "";

  const numericValue = parseFloat(numericRaw.replace(/,/g, "")) || 0;
  const isDecimal = numericRaw.includes(".");

  const count = useCountUp(isDecimal ? Math.round(numericValue * 10) : Math.round(numericValue), 1500, visible);
  const displayNum = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <div
      className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 ${color} rounded-lg mb-4`}>
        <Icon className="w-8 h-8" />
      </div>

      <div className="text-4xl font-bold text-gray-900 mb-2">
        {displayNum}
        {suffix}
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
        if (entries[0]?.isIntersecting) {
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
    { icon: Award, number: "100+", label: "Tasks Posted", color: "bg-blue-100 text-blue-600" },
    { icon: Smartphone, number: "50+", label: "Verified Taskers", color: "bg-green-100 text-green-600" },
    { icon: Globe, number: "95%", label: "Task Completion Rate", color: "bg-pink-100 text-pink-600" },
    { icon: Star, number: "24/7", label: "Platform Support", color: "bg-yellow-100 text-yellow-600" },
    { icon: Download, number: "1,000+", label: "App Downloads", color: "bg-purple-100 text-purple-600" },
    { icon: Users, number: "300+", label: "Active Monthly Users", color: "bg-cyan-100 text-cyan-600" },
    { icon: MapPin, number: "50+", label: "Cities Covered", color: "bg-indigo-100 text-indigo-600" },
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
            <StatCard key={index} {...stat} started={started} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}