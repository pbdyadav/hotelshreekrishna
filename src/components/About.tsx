import { Heart, Shield, Users, Home } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Home,
      title: 'Clean & Spacious Rooms',
      description: 'Well-maintained rooms with comfortable beds and modern amenities for a restful stay.'
    },
    {
      icon: Users,
      title: 'Helpful Staff',
      description: 'Our friendly team is always ready to assist you and make your stay comfortable.'
    },
    {
      icon: Shield,
      title: 'Safe for All',
      description: 'Secure environment perfect for families, solo travelers, and senior citizens.'
    },
    {
      icon: Heart,
      title: 'Peaceful Environment',
      description: 'Quiet and serene atmosphere ideal for rest and relaxation after your temple visit.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Our Hotel
          </h2>
          <div className="w-[480px] h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Hotel Shree Krishna Palace, we provide comfortable and affordable
            accommodation for devotees and travelers visiting Ujjain. Our priority
            is your comfort and peace of mind during your spiritual journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Your Comfort is Our Priority
          </h3>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            We understand the needs of pilgrims and families visiting Mahakaleshwar Temple.
            Our hotel offers a home away from home with modern facilities and traditional hospitality.
          </p>
        </div>
      </div>
    </section>
  );
}
