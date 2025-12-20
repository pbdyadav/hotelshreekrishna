import { Wind, Droplets, Wifi, Car, Tv, Lock, Coffee, Users, Zap, Bed, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';
import StickyButton from '../components/StickyButton';

import { useState } from "react";

function ImageSlider({ photos }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % photos.length);
  };

  const prev = () => {
    setCurrent((current - 1 + photos.length) % photos.length);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Main image */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[480px] overflow-hidden rounded-lg shadow-lg">
        <img
          key={current}
          src={photos[current]}
          alt="Room"
          className="absolute w-full h-full object-cover rounded-xl transition-all duration-700 animate-[flip_0.7s_ease]"
        />

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-lg"
        >
          ❮
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-lg"
        >
          ❯
        </button>
      </div>

      {/* Thumbnail Row */}
      <div className="flex gap-3 overflow-x-auto justify-center pb-2">
        {photos.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumbnail"
            onClick={() => setCurrent(index)}
            className={`w-20 h-16 object-cover rounded-md border-2 cursor-pointer transition 
              ${index === current ? "border-amber-600 scale-110" : "border-transparent opacity-70"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Rooms() {
  const handleBooking = (room) => {
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;

  const message = `
Hello, I want to book a room:

🏨 Room Details:
• Room Type: ${room.name}
• Price: ${room.price}
• Guests Allowed: ${room.guests}

📅 Booking Dates:
• Check-in: ${checkIn || "Not selected"}
• Check-out: ${checkOut || "Not selected"}

Please confirm availability.
`;

  window.open(
    `https://wa.me/919893567595?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  const roomTypes = [
    {
      name: 'Standard Non-AC Room',
      price: '₹500 - ₹700',
      guests: '1-2',
      images: [
      "/room/Single1.jpg",
      "/room/Single2.jpg",
      "/room/Single3.jpg",
      "/room/Single4.jpg"
    ],
      description: 'Perfect for budget-conscious travelers seeking comfort without AC. Spacious room with natural ventilation, ceiling fan, and all essential amenities for a pleasant stay.',
      amenities: [
        'Comfortable bed with quality mattress',
        'Attached washroom',
        'Hot water (geyser)',
        'Ceiling fan',
        'Wall-mounted TV',
        'Free Wi-Fi',
        'Room service',
        'Secure locker'
      ],
      features: [
        'Natural light and ventilation',
        'Peaceful ambiance',
        'Best for short stays',
        'Ideal for budget travelers'
      ]
    },
    {
      name: 'Standard AC Room',
      price: '₹800 - ₹1000',
      guests: '1-2',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comfortable air-conditioned room ideal for those seeking cool comfort. Features premium bedding, modern amenities, and maintains a pleasant temperature throughout the day.',
      amenities: [
        'Premium AC unit',
        'Quality bed with pillows',
        'Attached washroom',
        'Hot & cold water',
        'LED TV',
        'Free high-speed Wi-Fi',
        'Mini fridge',
        'Comfortable seating area'
      ],
      features: [
        'Climate control',
        'All-day comfort',
        'Enhanced privacy',
        'Perfect for hot weather'
      ]
    },
    {
      name: 'Deluxe AC Room',
      price: '₹1200 - ₹1500',
      guests: '2-3',
      image: 'https://images.pexels.com/photos/1454496/pexels-photo-1454496.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spacious and luxurious room with premium amenities. Perfect for families and those seeking extra comfort with enhanced furnishings and modern conveniences.',
      amenities: [
        'Powerful AC with thermostat',
        'King-size bed with premium mattress',
        'Attached bathroom with hot water',
        'Large LED TV with cable',
        'Fast Wi-Fi connectivity',
        'Mini bar & tea maker',
        'Comfortable seating & work desk',
        'Premium toiletries'
      ],
      features: [
        'Extra spacious layout',
        'Premium furnishings',
        'Enhanced comfort',
        'Perfect for families'
      ]
    },
    {
      name: 'Family Suite (AC)',
      price: '₹1800 - ₹2200',
      guests: '3-4',
      image: 'https://images.pexels.com/photos/1579655/pexels-photo-1579655.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spacious family room with multiple beds and premium amenities. Ideal for families traveling together with kids. Offers maximum comfort and convenience.',
      amenities: [
        'Multiple beds with premium mattresses',
        'Powerful AC with climate control',
        'Spacious attached bathroom',
        'Hot & cold water unlimited',
        'Large LED TV with cable',
        'Free premium Wi-Fi',
        'Tea/Coffee maker',
        'Spacious seating area',
        'Multiple power outlets',
        'Premium bedding & pillows'
      ],
      features: [
        'Extra large room',
        'Multiple beds setup',
        'Family-friendly layout',
        'Maximum privacy'
      ]
    }
  ];

  const amenities = [
    { icon: Wind, label: 'AC / Non-AC Rooms', description: 'Choose based on your preference and budget' },
    { icon: Droplets, label: 'Hot Water (24/7)', description: 'Instant hot water geyser in all rooms' },
    { icon: Wifi, label: 'Free Wi-Fi', description: 'High-speed internet throughout the hotel' },
    { icon: Car, label: 'Private Parking', description: 'Secure parking for your vehicle' },
    { icon: Tv, label: 'LED TV with Cable', description: 'Entertainment in your room' },
    { icon: Lock, label: 'Secure Lockers', description: 'Safe storage for valuables' },
    { icon: Coffee, label: 'Room Service', description: 'Beverages and light snacks available' },
    { icon: Users, label: 'Helpful Staff', description: '24/7 customer support for assistance' },
    { icon: Bed, label: 'Quality Bedding', description: 'Comfortable beds with premium mattresses' },
    { icon: Zap, label: 'Daily Housekeeping', description: 'Room cleaning and maintenance daily' },
    { icon: AlertCircle, label: 'First Aid Kit', description: 'Basic medical supplies available' },
    { icon: Users, label: 'Guest Area', description: 'Comfortable common areas for guests' }
  ];

  const bookingInfo = [
    {
      title: 'Check-in',
      details: '2:00 PM onwards (Early check-in available on request)'
    },
    {
      title: 'Check-out',
      details: '12:00 PM (Late check-out available at additional cost)'
    },
    {
      title: 'Payment Methods',
      details: 'Cash, Card, Mobile Payments, Bank Transfer'
    },
    {
      title: 'Cancellation',
      details: 'Free cancellation up to 24 hours before check-in'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50/30 pt-16 pb-4 sm:pt-24 sm:pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                Rooms & Amenities
              </h1>
              <div className="w-[535px] h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Choose from our comfortable room options designed for every budget and need.
Each room is thoughtfully prepared to offer a peaceful and relaxing stay for individuals, families, and groups.
Enjoy clean, spacious interiors with fresh linens, soft mattresses, and modern fittings to ensure complete comfort.
All rooms include attached bathrooms, excellent ventilation, and reliable 24/7 hot water facilities.
Guests can benefit from convenient in-room features such as complimentary Wi-Fi, seating space, and essential toiletries.
Private parking, CCTV security, and a friendly reception team make your stay even more safe and hassle-free.
Whether you're traveling for pilgrimage, business, or family vacation, our rooms offer the perfect balance of affordability and comfort.
Stay with us and enjoy a welcoming environment designed to make you feel at home in the heart of Ujjain.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Room Options</h2>
            <div className="w-[305px] h-1 bg-amber-600 mb-12"></div>

            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
  <div>
    <label className="font-semibold">Check-in</label>
    <input
      id="checkIn"
      type="date"
      className="border rounded-lg p-2 w-full"
    />
  </div>

  <div>
    <label className="font-semibold">Check-out</label>
    <input
      id="checkOut"
      type="date"
      className="border rounded-lg p-2 w-full"
    />
  </div>
</div>
              {roomTypes.map((room, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 border border-amber-50 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
  className={`grid md:grid-cols-2 gap-10 items-center ${
    index % 2 === 1 ? "md:flex-row-reverse" : ""
  }`}
>
  <ImageSlider photos={room.images || [room.images]} />

  <div className="p-8 sm:p-10 flex flex-col justify-between">
    <div>
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          {room.name}
        </h3>
        <p className="text-2xl font-bold text-amber-600 mb-4">
          {room.price}
          <span className="text-lg text-gray-600 font-normal"> per night</span>
        </p>
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Users size={20} className="text-amber-600" />
          <span>Up to {room.guests} guests</span>
        </div>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {room.description}
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Amenities:</h4>
          <ul className="space-y-2">
            {room.amenities.map((amenity, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3">Perfect For:</h4>
          <ul className="space-y-2">
            {room.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <button
  className="mt-8 px-8 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
  onClick={() => handleBooking(room)}
>
  Book This Room
</button>
  </div>

                    

                    <div className="p-8 sm:p-10 flex flex-col justify-between">
                      <div>
                        <div className="mb-6">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {room.name}
                          </h3>
                          <p className="text-2xl font-bold text-amber-600 mb-4">
                            {room.price}
                            <span className="text-lg text-gray-600 font-normal"> per night</span>
                          </p>
                          <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <Users size={20} className="text-amber-600" />
                            <span>Up to {room.guests} guests</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {room.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-3">Amenities:</h4>
                            <ul className="space-y-2">
                              {room.amenities.map((amenity, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                                  {amenity}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-gray-900 mb-3">Perfect For:</h4>
                            <ul className="space-y-2">
                              {room.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <button className="mt-8 px-8 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Book This Room
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotel-wide Amenities</h2>
              <div className="w-[360px] h-1 bg-amber-600 mb-12"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">
                            {amenity.label}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {amenity.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Booking Information</h2>
              <div className="w-[335px] h-1 bg-amber-600 mb-12"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bookingInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {info.title}
                    </h3>
                    <p className="text-gray-700">
                      {info.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-lg animate-fade-in">
              <div className="flex gap-4">
                <AlertCircle className="text-red-600 flex-shrink-0" size={28} />
                <div>
                  <p className="text-red-800 font-bold text-lg mb-2">
                    Important Information
                  </p>
                  <p className="text-red-800">
                    We provide <strong>stay only</strong> accommodation. Food/breakfast service is <strong>NOT</strong> available at our hotel. However, multiple restaurants and food outlets are available in the nearby area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <StickyButton />
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
