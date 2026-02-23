import { ArrowRight } from 'lucide-react';

export default function BusinessTypes() {
  const businessTypes = [
    {
      number: '1.',
      title: 'Startups Business',
      description: 'Have a strict budget and minimum resources? Don\'t worry, our professionals will give exactly needed tech support to turn your dream idea into a reality.',
    },
    {
      number: '2.',
      title: 'Small Business',
      description: 'Our proficients can help you build your brand identity blending their development experience with well-your development requirements.',
    },
    {
      number: '3.',
      title: 'Enterprise Business',
      description: 'We help enterprise-level businesses enhance their business reach and streamline processes with innovative technology.',
    },
    {
      number: '4.',
      title: 'Agency Business',
      description: 'Enhance the offering of your Agency business by leveraging our development expertise and trending technologies.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div>
            <div className="mb-8">
              <span className="text-pink-600 font-semibold">Contact Us</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Bring Innovation Together!
              </h2>
              <p className="text-gray-600">
                Reach out to the team of the most innovative IT transformation team and bring the transformation you need.
              </p>
              <button className="mt-6 flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors group">
                <span className="font-medium">Drop Your Queries</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Building Smarter Business through Better Tech Experience
          </h2>
          <p className="text-gray-600 max-w-3xl mb-12">
            As a leading app development company in the USA and India, we have worked with 2700+ businesses whether it is a start-up or enterprise, and deliver the best solution in the industry. At Hyperlink InfoSystem, we offer a broad range of IT consulting services based on business requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessTypes.map((type, index) => (
              <div key={index} className="flex space-x-4">
                <div className="text-4xl font-bold text-gray-900 flex-shrink-0">{type.number}</div>
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
