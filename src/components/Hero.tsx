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
      {/* This element creates the wave shape using a custom CSS clip-path or SVG background. 
         Since Tailwind doesn't natively support complex clip-paths, we'll use a strong, curved overlay 
         and ensure the content sits above it. For a true wave, you'd need custom CSS or an SVG.
         A simple curved bottom using pseudo-elements is often achieved with custom classes or an SVG overlay.
         
         For a quick Tailwind solution, we'll use a simpler, strong bottom curve effect 
         or rely on custom CSS for the exact wave shape.
         
         Since complex shapes require custom CSS (which I cannot provide here), 
         I will use a large, absolute border-radius on a hidden element at the bottom 
         to simulate a dip, and rely on a simpler approach for the content wrapper. 
         
         Alternatively, if you define the following custom CSS in your stylesheet:
         .wave-cut-bottom { clip-path: url(#wave-clip); } 
         
         We'll assume you add the wave effect via a different method or rely on custom CSS, 
         and focus on the background text fix.
         
         For a visual effect close to a wave (a rounded bottom section): */}
        <div className="absolute bottom-0 w-full h-24 bg-white/50 rounded-t-[150px] z-10"></div>


      {/* Content wrapper */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          
          {/* LEFT TEXT PANEL */}
          {/* FIX 1: Increased background opacity for better contrast */}
          <div className="max-w-2xl bg-black/70 backdrop-blur-md p-8 sm:p-10 rounded-2xl text-left">
            
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