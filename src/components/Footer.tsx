import { Phone, MessageCircle, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const phoneNumber = '+919876543210';
  const whatsappNumber = '919876543210';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Hotel Shree Krishna Palace
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your trusted accommodation partner in Ujjain. Experience comfort,
              safety, and traditional hospitality near Mahakaleshwar Temple.
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Call us"
              >
                <Phone size={20} />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Hotel
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Rooms & Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-400">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="flex-shrink-0 mt-1 text-amber-400" size={18} />
                <span>
                  Near Shri Mahakaleshwar Jyotirlinga<br />
                  Ujjain, Madhya Pradesh, India
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-amber-400" size={18} />
                <a href={`tel:${phoneNumber}`} className="hover:text-amber-400 transition-colors">
                  {phoneNumber}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="text-amber-400" size={18} />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center gap-2 mb-2">
              Made with <Heart className="text-red-500 fill-red-500" size={16} /> in Ujjain
            </p>
            <p>
              &copy; {currentYear} Hotel Shree Krishna Palace. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
