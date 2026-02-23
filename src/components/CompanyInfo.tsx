import { ArrowRight } from 'lucide-react';

export default function CompanyInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Top Mobile Application Development, Software Development & IT Consulting Company, Building Smart Solutions For A Smarter World.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Founded in the year 2011, <span className="font-semibold">Hyperlink InfoSystem</span> is a leading Mobile App, Software Development and Web Development company helping global businesses to bring digital transformation. Being a true technological companion, Hyperlink InfoSystem helps startups to enterprise-level businesses to be the industry leaders.
            </p>
            <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors group">
              <span className="font-medium">About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
