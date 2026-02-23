import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-pink-600">Hyperlink</span>
                <span className="text-gray-800"> InfoSystem</span>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Hire Resources</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Industries</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Case Study</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Resources</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Contact Us</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-600" />
                <span className="text-gray-700">+91 8000 284 488</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pink-600" />
                <span className="text-gray-700">+1 (303) 476 4465</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get A Free Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
