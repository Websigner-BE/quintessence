import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-gold" />
            <span className="text-xl font-bold">La Quintessence</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-white hover:text-gold transition-colors">Accueil</a>
            <a href="#vehicules" className="text-white hover:text-gold transition-colors">Nos Véhicules</a>
            <a href="#about" className="text-white hover:text-gold transition-colors">À Propos</a>
            <a href="#contact" className="text-white hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}