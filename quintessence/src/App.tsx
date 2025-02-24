import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleCategories from './components/VehicleCategories';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <VehicleCategories />
      <About />
      <Contact />
      <footer className="bg-zinc-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-zinc-400">
              © 2025 La Quintessence . Tous droits réservés.
            </div>
              <div className="text-sm text-zinc-400">
              TVA : BE0773709711
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;