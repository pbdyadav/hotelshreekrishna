import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import StickyButton from '../components/StickyButton';

export default function ContactPage() {
  const phoneNumber = '+919876543210';
  const whatsappNumber = '919876543210';
  const email = 'booking@shreekrishnapalace.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    nights: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', checkIn: '', nights: '1', message: '' });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: phoneNumber,
      link: `tel:${phoneNumber}`,
      color: 'bg-amber-600',
      description: 'Call us anytime for immediate assistance'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: phoneNumber,
      link: `https://wa.me/${whatsappNumber}`,
      color: 'bg-green-600',
      description: 'Chat with us instantly on WhatsApp'
    },
    {
      icon: Mail,
      title: 'Email',
      value: email,
      link: `mailto:${email}`,
      color: 'bg-blue-600',
      description: 'Send us your inquiry via email'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Ujjain, Madhya Pradesh',
      link: '#',
      color: 'bg-red-600',
      description: 'Near Shri Mahakaleshwar Jyotirlinga'
    }
  ];

  const faqs = [
    {
      question: 'What is your cancellation policy?',
      answer: 'We offer free cancellation up to 24 hours before check-in. Cancellations within 24 hours may incur charges.'
    },
    {
      question: 'Do you provide food services?',
      answer: 'No, we provide stay only. Food service is not available, but many restaurants are located nearby.'
    },
    {
      question: 'Is parking included?',
      answer: 'Yes, secure private parking is included free with your room booking.'
    },
    {
      question: 'Can we do early check-in?',
      answer: 'Early check-in is available on request, subject to availability. Please contact us in advance.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, mobile payments (UPI), and bank transfers.'
    },
    {
      question: 'Is Wi-Fi available?',
      answer: 'Yes, free high-speed Wi-Fi is available throughout the hotel.'
    }
  ];

  return (
  <>
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50/30 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl sm:text-4xl font-bold text-gray-900 mb-4 text-left">
              Get In Touch
            </h1>

            <div className="w-[205px] h-1 bg-amber-600 mb-8"></div>

            <p className="text-lg text-gray-600 max-w-5xl leading-relaxed text-left">
              Have questions about your stay in Ujjain? Our team is here to assist you with bookings, 
              availability, room details, and personalised travel guidance.  
              <br /><br />
              We offer fast responses via WhatsApp, phone, and email — ensuring smooth and effortless communication.  
              <br /><br />
              Whether you're planning a family visit, group stay, or business trip, we're committed to making 
              your experience comfortable, convenient, and memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="w-[330px] h-1 bg-amber-600 mb-10"></div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.link}
                        target={method.link.startsWith('https') ? '_blank' : undefined}
                        rel={method.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1 border border-amber-50 group animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <Icon className="text-white" size={32} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {method.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {method.description}
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              {method.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Reception Hours</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={24} />
                    <div>
                      <p className="font-semibold">24/7 Available</p>
                      <p className="text-sm opacity-90">We're always here to help you</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <div className="w-[327px] h-1 bg-amber-600 mb-12"></div>

                <form onSubmit={handleSubmit} className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 border border-amber-100 animate-fade-in">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-300"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Number of Nights
                        </label>
                        <select
                          value={formData.nights}
                          onChange={(e) => setFormData({ ...formData, nights: e.target.value })}
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-300"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 10, 14, 21, 30].map(n => (
                            <option key={n} value={n}>{n} night{n > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-300 resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Send Message
                    </button>

                    {submitted && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 animate-fade-in">
                        <CheckCircle className="text-green-600" size={24} />
                        <p className="text-green-800 font-semibold">
                          Thank you! We'll get back to you soon.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-[470px] h-1 bg-amber-600 mb-12"></div>

              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-amber-100 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-10 text-white shadow-xl text-center animate-fade-in">
              <h3 className="text-3xl font-bold mb-3">Ready to Book?</h3>
              <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
                Contact us now through your preferred method. Our team will help you find the perfect room and make your stay unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${phoneNumber}`}
                  className="px-8 py-3 bg-white text-amber-700 font-bold rounded-lg hover:bg-amber-50 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us On Map</h2>
            <div className="w-[260px] h-1 bg-amber-600 mb-8"></div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[500px] animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.5995028050506!2d75.76467897523989!3d23.190114779056657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637560e5321f8d%3A0x268bc85cafc2ce15!2sHotel%20Shree%20krishna%20palace!5e1!3m2!1sen!2sus!4v1765893419292!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Shree Krishna Palace Location"
              ></iframe>
            </div>
          </div>
        </div>

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
