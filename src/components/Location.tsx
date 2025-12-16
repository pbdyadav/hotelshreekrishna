import { MapPin, Navigation, Car, Clock } from 'lucide-react';

export default function Location() {
  const landmarks = [
    {
      icon: MapPin,
      name: 'Mahakaleshwar Temple',
      distance: '1.5 km',
      time: '5 min drive'
    },
    {
      icon: MapPin,
      name: 'Ram Ghat',
      distance: '2 km',
      time: '7 min drive'
    },
    {
      icon: MapPin,
      name: 'Harsiddhi Temple',
      distance: '2.5 km',
      time: '8 min drive'
    },
    {
      icon: MapPin,
      name: 'Kal Bhairav Temple',
      distance: '3 km',
      time: '10 min drive'
    }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Prime Location in Ujjain
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategically located near major temples and landmarks for your convenience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nearby Landmarks
            </h3>
            <div className="space-y-4">
              {landmarks.map((landmark, index) => {
                const Icon = landmark.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {landmark.name}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Navigation size={14} />
                            {landmark.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {landmark.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Car className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Private Parking Available</h4>
                    <p className="text-green-800 text-sm">
                      Secure parking space for your vehicle. No need to worry about finding parking near the temple.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Navigation className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Easy Auto Access</h4>
                    <p className="text-blue-800 text-sm">
                      Convenient location with easy access to auto-rickshaws and taxis for temple visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Find Us Here
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.123456789!2d75.76!3d23.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzQ4LjAiTiA3NcKwNDUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Shree Krishna Palace Location"
              ></iframe>
            </div>
            <div className="mt-4 bg-amber-50 p-6 rounded-xl border border-amber-200">
              <p className="text-gray-700 font-medium">
                <MapPin className="inline mr-2 text-amber-600" size={20} />
                Near Shri Mahakaleshwar Jyotirlinga, Ujjain, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
