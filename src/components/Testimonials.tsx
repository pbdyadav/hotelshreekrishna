import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Excellent hotel with very clean rooms. The staff was extremely helpful and cooperative. Location is perfect, just 5 minutes from Mahakaleshwar Temple. Highly recommended for families.',
      date: 'November 2024'
    },
    {
      name: 'Priya Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'We stayed here during our Ujjain visit and it was a wonderful experience. The rooms were spotless, and the owners were very kind and helpful. Great value for money.',
      date: 'October 2024'
    },
    {
      name: 'Amit Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Safe and comfortable stay. The private parking was a huge advantage. Staff went out of their way to help us with temple timings and auto arrangements. Will definitely stay again.',
      date: 'September 2024'
    },
    {
      name: 'Meena Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      text: 'Very peaceful environment after darshan. Clean rooms with hot water facility. The location is excellent and close to all major temples. Perfect for devotees visiting Ujjain.',
      date: 'August 2024'
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      text: 'Best budget hotel near Mahakal Temple. The owners are very helpful and the rooms are maintained really well. Parking facility is excellent. Highly recommended!',
      date: 'July 2024'
    },
    {
      name: 'Anjali Gupta',
      location: 'Indore, Madhya Pradesh',
      rating: 5,
      text: 'Stayed with my elderly parents and they loved it. Very safe and comfortable. Staff was respectful and helpful. Clean rooms and good amenities. Thank you for the wonderful hospitality!',
      date: 'June 2024'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <div className="w-[470px] h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued guests who stayed with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-amber-100 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="text-amber-400" size={36} />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-amber-500 fill-amber-500"
                      size={18}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs text-amber-600 mt-1 font-medium">
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-10 text-center text-white shadow-xl">
          <Star className="mx-auto mb-4 text-amber-200 fill-amber-200" size={48} />
          <h3 className="text-3xl font-bold mb-3">
            Join Our Happy Guests
          </h3>
          <p className="text-lg opacity-95 max-w-2xl mx-auto mb-6">
            Experience the warmth of traditional hospitality combined with modern comfort
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300 shadow-lg"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </section>
  );
}
