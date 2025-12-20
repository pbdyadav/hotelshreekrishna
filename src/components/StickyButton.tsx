import { Phone, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function StickyButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+919893567595';
  const whatsappNumber = '919893567595';

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {isOpen && (
          <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-4">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span className="font-semibold">Call Now</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={20} />
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
            isOpen
              ? 'bg-red-600 hover:bg-red-700 rotate-90'
              : 'bg-amber-600 hover:bg-amber-700 animate-pulse'
          }`}
          aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        >
          {isOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <Phone className="text-white" size={28} />
          )}
        </button>
      </div>
    </>
  );
}
