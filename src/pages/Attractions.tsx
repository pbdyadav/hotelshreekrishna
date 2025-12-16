import { MapPin, Navigation, Clock, AlertCircle, Zap, Users, Camera } from 'lucide-react';
import Footer from '../components/Footer';
import StickyButton from '../components/StickyButton';

export default function Attractions() {
  const mainAttractions = [
    {
      name: 'Mahakaleshwar Temple',
      distance: '1.5 km',
      time: '5 minutes',
      image: '/mahakal-temple-nearby.jpg',
      description: 'One of the 12 Jyotirlingas in India, Mahakaleshwar Temple is the primary attraction of Ujjain. The temple is known for its intricate architecture and spiritual significance. The main deity is Lord Shiva, and devotees from all over the world visit here to seek blessings.',
      highlights: [
        'Ancient Jyotirlinga shrine',
        'Stunning stone carvings',
        'Evening Aarti ceremony',
        'Best time: Early morning (5-8 AM)'
      ],
      popularity: 'Essential'
    },
    {
      name: 'Ram Ghat',
      distance: '2 km',
      time: '7 minutes',
      image: '/RamghatUjjain.png',
      description: 'The sacred bathing ghat on the banks of River Shipra, Ram Ghat is a peaceful retreat for spiritual seekers. The ghat is beautifully carved with steps leading down to the river, making it an ideal spot for meditation and morning prayers.',
      highlights: [
        'Sacred bathing spot',
        'Peaceful atmosphere',
        'River meditation',
        'Photography opportunities'
      ],
      popularity: 'Must-Visit'
    },
    {
      name: 'Harsiddhi Temple',
      distance: '2.5 km',
      time: '8 minutes',
      image: '/Harsiddhi.png',
      description: 'Dedicated to Goddess Harsiddhi, this ancient temple is known for its ornate carvings and spiritual energy. Pilgrims believe that visiting this temple brings success and removes obstacles. The temple complex is architecturally stunning with intricate details.',
      highlights: [
        'Powerful Shakti Peeth',
        'Intricate temple art',
        'Peaceful surroundings',
        'Special prayers for prosperity'
      ],
      popularity: 'Highly Recommended'
    },
    {
      name: 'Kal Bhairav Temple',
      distance: '3 km',
      time: '10 minutes',
      image: '/KalaBhairavaUjjain.png',
      description: 'A unique temple dedicated to Kal Bhairav, a fierce form of Lord Shiva. Known for its distinctive features and unusual deity representation, this temple attracts devotees seeking divine protection and blessings for courage and strength.',
      highlights: [
        'Unique fierce deity form',
        'Ancient stone sculptures',
        'Traditional worship practices',
        'Spiritual significance'
      ],
      popularity: 'Worth Visiting'
    },
    {
      name: 'Mangalnath Temple',
      distance: '4 km',
      time: '12 minutes',
      image: '/Mangalnath.png',
      description: 'This temple is dedicated to Mars (Mangal) and is considered one of the most significant astrological temples in India. Devotees visit to overcome astrological challenges and seek blessings for planetary harmony.',
      highlights: [
        'Astrological significance',
        'Beautiful river location',
        'Ancient astronomy references',
        'Spiritual healing site'
      ],
      popularity: 'Spiritually Significant'
    },
    {
      name: 'Shipra River',
      distance: '0.5 km',
      time: '2 minutes',
      image: '/shipra.png',
      description: 'The sacred Shipra River is the lifeblood of Ujjain. Taking a dip in its waters is believed to be highly purifying. The riverbanks host multiple ghats and temples, making it an essential spiritual destination.',
      highlights: [
        'Sacred bathing waters',
        'Multiple ghats available',
        'Evening boat rides',
        'Peaceful morning walks'
      ],
      popularity: 'Essential Experience'
    }
  ];

  const localExperiences = [
    {
      icon: Users,
      title: 'Local Market Tours',
      description: 'Experience the vibrant local markets of Ujjain with authentic street food and handicrafts'
    },
    {
      icon: Camera,
      title: 'Photography Walks',
      description: 'Capture the spiritual essence of Ujjain with guided photography tours of temples and ghats'
    },
    {
      icon: Zap,
      title: 'Spiritual Rituals',
      description: 'Participate in traditional Puja ceremonies and rituals guided by experienced priests'
    },
    {
      icon: Navigation,
      title: 'Heritage Tours',
      description: 'Explore historical sites and learn about Ujjain\'s rich cultural heritage from local guides'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50/30 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                Nearby Attractions
              </h1>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the spiritual wonders of Ujjain. All major temples and attractions
                are within easy reach from our hotel.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Major Temples & Sacred Sites</h2>
              <div className="w-16 h-1 bg-amber-600 mb-8"></div>

              <div className="space-y-12">
                {mainAttractions.map((attraction, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 animate-slide-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-80 md:h-auto overflow-hidden">
                        <img
                          src={attraction.image}
                          alt={attraction.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                {attraction.name}
                              </h3>
                              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full">
                                {attraction.popularity}
                              </span>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {attraction.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-3">Highlights:</h4>
                            <ul className="space-y-2">
                              {attraction.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                          <div className="flex items-center gap-3 text-gray-700">
                            <Navigation className="text-amber-600" size={20} />
                            <div>
                              <p className="text-sm text-gray-600">Distance</p>
                              <p className="font-semibold">{attraction.distance}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-gray-700">
                            <Clock className="text-amber-600" size={20} />
                            <div>
                              <p className="text-sm text-gray-600">Travel Time</p>
                              <p className="font-semibold">{attraction.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-10 border border-amber-200 mb-20">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-amber-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Travel Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>All distances are approximate and measured from our hotel</li>
                    <li>Auto-rickshaws are easily available for temple visits</li>
                    <li>Best time to visit temples: Early morning (5-8 AM) or evening (6-9 PM)</li>
                    <li>Wear comfortable footwear and carry water</li>
                    <li>Our staff can arrange temple tours and guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Local Experiences</h2>
              <div className="w-16 h-1 bg-amber-600 mb-8"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {localExperiences.map((exp, index) => {
                  const Icon = exp.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100 group animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-700 transition-all duration-300 shadow-md group-hover:shadow-lg">
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  );
                })}
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
