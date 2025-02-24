import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80"
              alt="Showroom"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-zinc-300 mb-6">
              Depuis près de 4 ans, La Quintessence incarne l'excellence dans le monde de l'automobile. 
              Notre engagement envers la qualité et le service client nous a permis de devenir une référence 
              incontournable pour les passionnés d'automobiles d'exception.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gold/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gold mb-2">4+</h3>
                <p className="text-zinc-400">Années d'expérience</p>
              </div>
              <div className="border border-gold/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gold mb-2">150+</h3>
                <p className="text-zinc-400">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}