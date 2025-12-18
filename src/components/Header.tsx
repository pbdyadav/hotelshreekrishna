import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="sticky top-0 z-40 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="flex items-center">
          <img
  src="/logo.png"
  alt="Hotel Shree Krishna Palace Logo"
  className="h-20 sm:h-24 w-auto object-contain"
/>
        </Link>
      

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link to="/rooms" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">
              Rooms
            </Link>
            <Link to="/attractions" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">
              Attractions
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 animate-in slide-in-from-top-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium hover:text-amber-600 transition-colors py-2"
            >
              Home
            </Link>
            <Link
              to="/attractions"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium hover:text-amber-600 transition-colors py-2"
            >
              Attractions
            </Link>
            <Link
              to="/rooms"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium hover:text-amber-600 transition-colors py-2"
            >
              Rooms
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium hover:text-amber-600 transition-colors py-2"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
