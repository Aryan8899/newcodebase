import { Award, Smartphone, Globe, Star, Download, Users } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Award, number: '12+', label: 'Years of Experience', color: 'bg-blue-100 text-blue-600' },
    { icon: Smartphone, number: '4500+', label: 'Mobile Apps Developed', color: 'bg-green-100 text-green-600' },
    { icon: Globe, number: '2200+', label: 'Websites Developed', color: 'bg-pink-100 text-pink-600' },
    { icon: Star, number: '4.9', label: 'Ratings on Clutch.co', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Download, number: '110M', label: 'App Downloads', color: 'bg-purple-100 text-purple-600' },
    { icon: Users, number: '1200+', label: 'Dedicated Developers', color: 'bg-cyan-100 text-cyan-600' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} rounded-lg mb-4`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
