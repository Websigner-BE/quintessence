import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div id="accueil" className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Roulez l'excellence,<br />vivez la performance
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-zinc-300">
          Découvrez notre collection exclusive de véhicules d'exception
        </p>
        <a
  href="#vehicules"
  className="bg-gold text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gold/90 transition-colors inline-block"
>
  Découvrir notre collection
</a>

        <a href="#vehicules" className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}