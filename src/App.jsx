import React, { useState } from 'react'; 
import imageA from './assets/imageA.JPG';
import imageB from './assets/imageB.JPG'; 
import menu1 from './assets/menu1.JPG'; 

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-white text-brand-black font-sans selection:bg-brand-yellow">
      
      {/* --- FLOATING NAV --- */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-3xl font-serif italic leading-none">Bakerina</span>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">Eco Majestic</span>
        </div>
        
        <div className="hidden md:flex gap-12 text-sm font-bold lowercase tracking-tight">
          <a href="#" className="hover:text-brand-yellow transition-all">Pastries</a>
          <a href="#" className="hover:text-brand-yellow transition-all">Pizza</a>
          <a href="#" className="hover:text-brand-yellow transition-all">Our Oven</a>
        </div>

        <button className="bg-brand-black text-brand-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-brand-black/10 hover:bg-brand-yellow hover:text-brand-black transition-all">
          Order Online
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative mx-4 mt-4 py-20 md:py-32 px-6 overflow-hidden rounded-[4rem] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={imageA} alt="Bakerina Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/30 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1 rounded-full border border-white/30 backdrop-blur-md text-brand-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Est. 2026 • Local Craft • Eco Majestic
            </span>
            <h1 className="text-6xl md:text-[10rem] font-serif leading-[0.85] mb-10 tracking-tighter text-brand-white">
              The Art of <br />
              <span className="text-brand-yellow">Slow</span> Baking.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/80 max-w-lg mb-12">
              Where artisan sourdough meets wood-fired pizza. Crafted by hand in the heart of Semenyih.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setIsMenuOpen(true)} className="h-16 px-10 rounded-full bg-brand-yellow text-brand-black font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-yellow/20">
                Browse Menu
              </button>
              <div className="h-16 w-16 rounded-full border-2 border-white text-white flex items-center justify-center animate-bounce">↓</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-brand-yellow rounded-[40%_60%_70%_30%/40%_50%_60%_50%] flex items-center justify-center p-12 shadow-2xl shadow-brand-yellow/30">
              <div className="w-full aspect-square bg-brand-black rounded-[50%_50%_30%_70%/50%_30%_70%_50%] overflow-hidden flex items-center justify-center text-center p-10 text-brand-white italic font-serif text-3xl">
                "Trust <br /> the <br /> Crust"
              </div>
            </div>
          </div>
        </div>
      </section>

{/* --- ANNOUNCEMENTS: CLEAN & VIBRANT --- */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Ramadhan (Image B) */}
          <div className="relative group overflow-hidden rounded-[3rem] bg-brand-black min-h-[450px] md:min-h-[500px] shadow-2xl border-4 border-brand-yellow/20">
            <img src={imageB} alt="Ramadhan Hours" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-brand-white">
              <span className="bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full shadow-lg">Ramadhan 2026</span>
              <h3 className="text-4xl font-serif mt-6 mb-2">Ramadhan Hours</h3>
              <p className="text-white/80 text-sm">Check our updated baking schedule for Eco Majestic. Fresh sourdough ready for your Iftar.</p>
            </div>
          </div>

          {/* Card 2: Baking Memories (Image A) - FIXED GREY ISSUE */}
          <div className="relative group overflow-hidden rounded-[3rem] bg-brand-white min-h-[450px] md:min-h-[500px] shadow-2xl border-4 border-brand-black/5">
            <img 
              src={imageA} 
              alt="Bakerina Atmosphere" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              /* Removed opacity-60 so it's not grey anymore */
            />
            
            {/* Soft Gradient Overlay: Only darkens top and bottom slightly, keeps middle clear */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-10">
              <div className="w-16 h-16 rounded-full border-2 border-brand-yellow flex items-center justify-center mb-6 animate-pulse">
                <span className="text-brand-yellow text-xl font-serif italic">B.</span>
              </div>
              {/* Added drop-shadow to text so it stands out against the clear photo */}
              <h3 className="text-5xl font-serif text-brand-white mb-4 tracking-tighter drop-shadow-2xl">
                Baking <br/> Memories
              </h3>
              <p className="text-white/90 text-[10px] uppercase tracking-[0.5em] font-black drop-shadow-lg">
                Eco Majestic Heritage
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- DAILY BATCHES WITH ONLINE PICS --- */}
      <section className="bg-white py-32 px-6 rounded-[4rem] shadow-2xl shadow-black/5 mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <h2 className="text-5xl font-serif">Daily Batches</h2>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow cursor-pointer hover:underline" onClick={() => setIsMenuOpen(true)}>
              Full Menu →
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-brand-white rounded-[2rem] mb-6 overflow-hidden transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover"
                  alt="Sourdough"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Signature Sourdough</h3>
              <p className="text-gray-400 text-sm">Naturally leavened for 48 hours for the perfect crust.</p>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-brand-white rounded-[2rem] mb-6 overflow-hidden transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover"
                  alt="Pizza"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Wood-Fired Margherita</h3>
              <p className="text-gray-400 text-sm">San Marzano tomatoes, fresh mozzarella, and garden basil.</p>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-brand-white rounded-[2rem] mb-6 overflow-hidden transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover"
                  alt="Coffee"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Artisan White</h3>
              <p className="text-gray-400 text-sm">Silky smooth espresso blended with creamy local milk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-2xl flex flex-col items-center overflow-y-auto p-4 md:p-12">
          <button onClick={() => setIsMenuOpen(false)} className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] bg-brand-yellow text-brand-black w-12 h-12 rounded-full font-black text-xl flex items-center justify-center shadow-2xl">✕</button>
          <div className="max-w-4xl w-full mt-10 mb-20">
            <img src={menu1} alt="Bakerina Menu" className="w-full h-auto rounded-3xl shadow-2xl border-4 border-brand-yellow/10" />
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center">
        <p className="text-3xl font-serif mb-4 italic">Bakerina.</p>
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 italic">Handmade with love in Eco Majestic</p>
      </footer>
    </div>
  );
}