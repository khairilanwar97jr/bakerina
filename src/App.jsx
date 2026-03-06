import React, { useState, useEffect } from 'react';
import imageB from './assets/imageB.JPG';
import logoNoBackground from './assets/logoNoBackground.png';
import pizza from './assets/pizza.JPG';
import hiring from './assets/hiring.jpg';
import bangibranch from './assets/bangibranch.jpg';
import menu1 from './assets/menu1.jpg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const announcements = [
    {
      id: 0,
      img: imageB,
      tag: "Ramadhan 2026",
      title: "Ramadhan Hours",
      desc: "Join us for Iftar and Sahur. Special artisan dates pastries available daily. Weekdays: 4PM - 12AM | Weekends: 4PM - 1AM."
    },
    {
      id: 1,
      img: bangibranch,
      tag: "Now Open",
      title: "Bakerina PizzaCafe Bangi",
      desc: "Our second home is now open! Visit us at Seksyen 9, Bangi for the same artisan soul and wood-fired excellence."
    },
    {
      id: 2,
      img: hiring,
      tag: "Bakerina Squad",
      title: "We Are Hiring",
      desc: "We are looking for passionate baristas and pizza chefs for Eco Majestic and Bangi."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-white text-brand-black font-sans selection:bg-brand-yellow">

{/* --- NAV BAR: LOGO LEFT, LINKS CENTER, ORDER RIGHT --- */}
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* 1. Logo Left */}
        <div className="flex items-center justify-start gap-3">
          <img src={logoNoBackground} alt="Bakerina" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-serif italic leading-none tracking-tighter">Bakerina</span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black text-brand-yellow">Eco Majestic</span>
          </div>
        </div>

        {/* 2. Links Centered (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center gap-8 text-[11px] font-black uppercase tracking-widest">
          <a href="#" className="hover:text-brand-yellow transition-all">Pastries</a>
          <a href="#" className="hover:text-brand-yellow transition-all">Pizza</a>
          <a href="#" className="hover:text-brand-yellow transition-all">Our Oven</a>
        </div>

        {/* 3. Action Button Right */}
        <div className="flex justify-end">
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="bg-brand-black text-brand-white px-5 md:px-8 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-xl hover:bg-brand-yellow hover:text-brand-black transition-all active:scale-95"
          >
            Order Online
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative mx-4 py-16 md:py-32 px-6 overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={pizza} alt="Bakerina Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1 rounded-full border border-white/30 backdrop-blur-md text-brand-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Est. 2026 • Eco Majestic
            </span>
            <h1 className="text-5xl md:text-[10rem] font-serif leading-[0.85] mb-8 md:mb-10 tracking-tighter text-brand-white">
              The Art of <br /> <span className="text-brand-yellow">Slow</span> Baking.
            </h1>
            <div className="mb-8 md:mb-12 space-y-3 md:space-y-4">
              <h2 className="text-brand-yellow font-black uppercase tracking-[0.1em] text-[11px] md:text-base">
                Neapolitan Pizza • Steak • Custom Cakes
              </h2>
              <p className="text-base md:text-2xl font-medium text-white/90 max-w-lg leading-relaxed">
                Artisan sourdough and wood-fired excellence. Crafted by hand, served with soul in <span className="text-brand-white">Eco Majestic, Semenyih.</span>
              </p>
            </div>
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="h-14 md:h-16 px-8 md:px-10 rounded-full bg-brand-yellow text-brand-black font-black text-base md:text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Browse Menu
            </button>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <img src={logoNoBackground} alt="Logo" className="w-64 md:w-full max-w-[400px] object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* --- ANNOUNCEMENTS --- */}
      <section className="max-w-7xl mx-auto px-4 mt-24 pb-20 overflow-hidden">
        <div className="relative aspect-square w-full max-w-[600px] mx-auto rounded-[3rem] bg-brand-black overflow-hidden shadow-2xl border-2 border-brand-yellow/5">
          {announcements.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => setSelectedAnnouncement(item)}
              className={`absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer ${
                activeSlide === index ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'
              }`}
            >
              <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="bg-brand-yellow w-fit text-brand-black text-[8px] font-black uppercase px-3 py-1 rounded-full mb-3">{item.tag}</span>
                <h3 className="text-3xl md:text-5xl font-serif text-brand-white">{item.title}</h3>
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {[0, 1, 2].map((i) => (
              <button 
                key={i} 
                onClick={(e) => { e.stopPropagation(); setActiveSlide(i); }} 
                className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === i ? 'w-10 bg-brand-yellow' : 'w-2 bg-white/50'}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- MENU IMAGE POPUP (triggered by Browse Menu) --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-white rounded-[2rem] shadow-2xl">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="fixed md:absolute top-4 right-4 z-[130] bg-brand-black text-brand-white w-10 h-10 rounded-full flex items-center justify-center font-black"
            >✕</button>
            <img src={menu1} alt="Menu" className="w-full h-auto" />
          </div>
        </div>
      )}

{/* --- ANNOUNCEMENT POPUP (Updated to show Pic) --- */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Background Blur */}
          <div 
            className="absolute inset-0 bg-brand-black/80 backdrop-blur-md" 
            onClick={() => setSelectedAnnouncement(null)}
          ></div>
          
          {/* Popup Content */}
          <div className="relative bg-brand-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-4 right-4 z-[130] bg-brand-black text-brand-white w-10 h-10 rounded-full flex items-center justify-center font-black"
            >✕</button>

            {/* THE PICTURE BRO */}
            <div className="w-full h-64 md:h-80 overflow-hidden">
              <img 
                src={selectedAnnouncement.img} 
                className="w-full h-full object-cover" 
                alt={selectedAnnouncement.title} 
              />
            </div>

            {/* Info Section */}
            <div className="p-8">
              <span className="bg-brand-yellow text-brand-black text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3 inline-block">
                {selectedAnnouncement.tag}
              </span>
              <h2 className="text-3xl font-serif italic mb-4 text-brand-black">
                {selectedAnnouncement.title}
              </h2>
              <p className="text-brand-black/70 mb-8 leading-relaxed">
                {selectedAnnouncement.desc}
              </p>
              <button 
                onClick={() => setSelectedAnnouncement(null)} 
                className="w-full py-4 bg-brand-black text-brand-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-yellow hover:text-brand-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
{/* --- FOOTER --- */}
      <footer className="bg-brand-black text-brand-white mt-24 py-16 md:py-24 px-6 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
            
            {/* Column 1: Brand & Bio */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {/* REMOVED brightness-0 invert so your logo colors show. Added bg-white for visibility */}
                <div className="bg-white p-1 rounded-full">
                  <img src={logoNoBackground} alt="Bakerina Logo" className="w-12 h-12 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif italic leading-none tracking-tighter">Bakerina</span>
                  <span className="text-[7px] uppercase tracking-[0.4em] font-black text-brand-yellow">Eco Majestic</span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs font-medium">
                Crafting artisan sourdough and wood-fired excellence since 2026. Every loaf and pizza tells a story of patience and soul.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-brand-yellow font-black uppercase text-[10px] tracking-widest">Explore</h4>
                <ul className="space-y-2 text-sm font-bold">
                  <li><a href="#" className="hover:text-brand-yellow transition-colors">Our Menu</a></li>
                  <li><a href="#" className="hover:text-brand-yellow transition-colors">Pastries</a></li>
                  <li><a href="#" className="hover:text-brand-yellow transition-colors">Pizza</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-brand-yellow font-black uppercase text-[10px] tracking-widest">Company</h4>
                <ul className="space-y-2 text-sm font-bold">
                  <li><a href="#" className="hover:text-brand-yellow transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-brand-yellow transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-brand-yellow transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Contact & Socials */}
            <div className="space-y-6">
              <h4 className="text-brand-yellow font-black uppercase text-[10px] tracking-widest">Visit Us</h4>
              <div className="space-y-1 text-sm font-medium">
                <p>Eco Majestic, Semenyih</p>
                <p>Seksyen 9, Bangi</p>
                <p className="pt-2 text-brand-yellow font-black">hello@bakerina.com</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-black transition-all cursor-pointer font-black text-[10px]">IG</div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-black transition-all cursor-pointer font-black text-[10px]">FB</div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-black transition-all cursor-pointer font-black text-[10px]">TT</div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2026 Bakerina. All rights reserved.</span>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] italic font-serif">The Art of Slow Baking</span>
          </div>
        </div>
      </footer>
    </div>
    
  );
}