export default function Partners() {
  const partners = [
    { name: 'Google', color: 'text-blue-600' },
    { name: 'Microsoft', color: 'text-blue-500' },
    { name: 'CMMI', color: 'text-cyan-600' },
    { name: 'AWS', color: 'text-orange-600' },
    { name: 'Oracle', color: 'text-red-600' },
  ];

  const clients = [
    { name: 'GAR', color: 'text-blue-600' },
    { name: 'TATA', color: 'text-blue-800' },
    { name: 'Viacom', color: 'text-cyan-600' },
    { name: 'zyrtec', color: 'text-pink-600' },
    { name: 'Google', color: 'text-blue-600' },
    { name: 'ASTRAL', color: 'text-orange-600' },
    { name: 'Disney', color: 'text-blue-700' },
    { name: 'CEAT', color: 'text-cyan-700' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-6">Official Partner of:</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className={`text-2xl font-bold ${partner.color}`}>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-16">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className={`text-3xl font-bold ${client.color}`}>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
