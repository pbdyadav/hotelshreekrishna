import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const phoneNumber = '+919893567595';
  const whatsappNumber = '919893567595';
  const email = 'booking@shreekrishnapalace.com';

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for bookings and inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-lg text-amber-700 hover:text-amber-800 font-semibold"
                  >
                    {phoneNumber}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Call us anytime for bookings</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-green-700 hover:text-green-800 font-semibold"
                  >
                    {phoneNumber}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Chat with us instantly</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-lg text-blue-700 hover:text-blue-800 font-semibold break-all"
                  >
                    {email}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Send us your queries</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Near Shri Mahakaleshwar Jyotirlinga<br />
                    Ujjain (Mahakal Nagari)<br />
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reception Hours</h3>
                  <p className="text-gray-700 font-semibold">24/7 Available</p>
                  <p className="text-gray-600 text-sm mt-1">We're here to help you round the clock</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-10 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Book Your Stay</h3>
            <p className="text-lg mb-8 opacity-95 leading-relaxed">
              Experience comfortable accommodation in the holy city of Ujjain.
              Contact us now to check availability and make your reservation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p>Early check-in and late check-out available on request</p>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p>Special rates for extended stays and groups</p>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p>Advance booking recommended during festival seasons</p>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p>Flexible cancellation policy available</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex-1 px-6 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
