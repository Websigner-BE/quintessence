import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contactez-nous</h2>
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Nos Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gold" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-zinc-400">laquintessencefvm@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gold" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-zinc-400">56 Rue des colonies<br />1000 Bruxelles, Belgique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}