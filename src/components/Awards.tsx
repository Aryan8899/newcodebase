import { Award } from 'lucide-react';

export default function Awards() {
  const badges = [
    { name: 'Top App Developers', year: '2024' },
    { name: 'Best Mobile App', year: '2024' },
    { name: 'Top Rated Company', year: '2024' },
    { name: 'Excellence Award', year: '2024' },
    { name: 'Industry Leader', year: '2024' },
    { name: 'Customer Choice', year: '2024' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold">
              Acclaimed by Pioneers, Chosen by You!
            </h2>
            <p className="text-blue-200 leading-relaxed">
              Hyperlink InfoSystem's trail of awards is an example of our championing excellence and innovations that drive outcomes.
            </p>
          </div>

          <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ranked As #1</h3>
              <p className="text-blue-200">Top App Development Company since 2014</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
                >
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-xs text-white font-medium">{badge.name}</div>
                  <div className="text-xs text-blue-300">{badge.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
