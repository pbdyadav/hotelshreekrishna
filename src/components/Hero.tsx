import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  const phoneNumber = '+919876543210';
  const whatsappNumber = '919876543210';

  return (
    // Added 'overflow-hidden' to ensure the wave cut doesn't cause horizontal scroll
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Full background image */}
      <img
        src="/roomhome.avif"
        alt="Hotel room at Shree Krishna Palace Ujjain"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* WAVE CUT EFFECT AT THE BOTTOM */}
     
        <div className="absolute bottom-0 w-full h-24 bg-white/50 rounded-t-[150px] z-10"></div>


      {/* Content wrapper */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          
          {/* LEFT TEXT PANEL */}
          {/* FIX 1: Increased background opacity for better contrast */}
          <div className="max-w-2xl bg-brown/50 backdrop-blur-md p-8 sm:p-10 rounded-2xl text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comfortable Stay <br /> Near Mahakal Temple
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
              Experience clean and spacious rooms with private parking in the
              heart of Ujjain. Ideal for families and devotees visiting
              Shri Mahakaleshwar Jyotirlinga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              
              <a
                href="#contact"
                className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition shadow-lg"
              >
                Book Now
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg flex items-center gap-2"
              >
                <Phone size={20} />
                Call
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}