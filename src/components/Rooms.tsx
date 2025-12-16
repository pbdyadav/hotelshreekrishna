import { Wifi, Car, Droplets, Wind, Tv, Lock, Coffee, ArrowUpCircle } from 'lucide-react';

export default function Rooms() {
  const amenities = [
    { icon: Wind, label: 'AC / Non-AC Rooms' },
    { icon: Droplets, label: 'Hot Water (Geyser)' },
    { icon: Wifi, label: 'Free Wi-Fi' },
    { icon: Car, label: 'Private Parking' },
    { icon: Tv, label: 'TV in Rooms' },
    { icon: Lock, label: 'Secure Lockers' },
    { icon: ArrowUpCircle, label: 'Elevator Access' },
    { icon: Coffee, label: 'Room Service' }
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Rooms & Amenities
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comfortable rooms equipped with modern amenities for a pleasant stay
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Standard Room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Standard Room</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Clean and comfortable room with attached washroom, perfect for couples and small families.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Attached Washroom
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Hot & Cold Water
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Daily Housekeeping
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Deluxe AC Room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Deluxe AC Room</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Spacious air-conditioned room with premium amenities for maximum comfort.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Air Conditioning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  LED TV
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Extra Spacious
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Hotel Amenities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-amber-50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="text-amber-600" size={28} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {amenity.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <p className="text-red-800 font-semibold text-lg">
            <strong>Please Note:</strong> We provide stay only. Food service is not available at our hotel.
          </p>
        </div>
      </div>
    </section>
  );
}
