import React from 'react';

const categories = [
  {
    title: "Berlines",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
    description: "Élégance et confort pour vos trajets quotidiens"
  },
  {
    title: "SUV",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80",
    description: "Polyvalence et prestance sur tous les terrains"
  },
  {
    title: "4x4",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
    description: "Puissance et robustesse pour l'aventure"
  },
  {
    title: "Cabriolets",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
    description: "Liberté et sensations à l'état pur"
  }
];

export default function VehicleCategories() {
  return (
    <section id="vehicules" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Nos Catégories de Véhicules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="group relative overflow-hidden rounded-lg">
              <img 
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-zinc-300">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}