import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Cool Charms Friends',
      rating: 5,
      review: 'Outstanding service and exceptional results. The team delivered beyond our expectations!',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      name: 'Fast Food Franchisee',
      rating: 5,
      review: 'Professional, responsive, and innovative. They transformed our digital presence completely.',
      color: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      name: 'Buzapp',
      rating: 5,
      review: 'Highly recommend! Their expertise in mobile app development is unmatched in the industry.',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Collection of responses we have got so far by delivering exceptional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${testimonial.color} rounded-full flex items-center justify-center`}>
                  <span className={`text-2xl font-bold ${testimonial.iconColor}`}>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{testimonial.rating} Ratings</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
