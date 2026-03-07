import React, { useState, useEffect } from 'react';
import imageB from './assets/imageB.jpg';
import logoNoBackground from './assets/logoNoBackground.png';
import pizza from './assets/pizza.jpg';
import hiring from './assets/hiring.jpg';
import bangibranch from './assets/bangibranch.jpg';
import menu1 from './assets/menu1.jpg';
import Memories from './components/Memories';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showOrderTeaser, setShowOrderTeaser] = useState(false);
  const [formData, setFormData] = useState({ name: '', date: '', pax: '2' });



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
      desc: "Join us for Iftar and Sahur. Special artisan dates pastries available daily. Weekdays: 4PM - 12AM "
    },
    {
      id: 1,
      img: bangibranch,
      tag: "Now Open",
      title: "Bakerina PizzaCafe Bangi",
      desc: "Our second home is now open! Visit us at Bangi for the same artisan soul and wood-fired excellence. | Anja Residensi, Persiaran Bandar, Seksyen 1 Bandar Baru Bangi"
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
            onClick={() => setShowOrderTeaser(true)} // Changed this trigger
            className="bg-brand-black text-brand-white px-5 md:px-8 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-xl hover:bg-brand-yellow hover:text-brand-black transition-all active:scale-95"
          >
            Order Online
          </button>
        </div>
      </nav>

{/* --- HERO SECTION --- */}
<section className="relative mx-4 py-16 md:py-32 px-6 overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-2xl">
  {/* Background Images - Ensure z-index is low */}
  <div className="absolute inset-0 z-0">
    <img src={pizza} alt="Background" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[1px]"></div>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
    <div className="lg:col-span-7">
      <span className="inline-block px-4 py-1 rounded-full border border-white/30 backdrop-blur-md text-brand-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
        Est. 2026 • Eco Majestic
      </span>
      
      {/* 1. The Art of Slow Baking - Smooth Fade Up */}
      <h1 className="animate-reveal text-5xl md:text-[10rem] font-serif leading-[0.85] mb-8 md:mb-10 tracking-tighter text-brand-white">
        The Art of <br /> <span className="text-brand-yellow">Slow</span> Baking.
      </h1>

      {/* 2. The Sliding Items - Wrapped in overflow-hidden to prevent layout jumps */}
      <div className="mb-8 md:mb-12 space-y-3 md:space-y-4 overflow-hidden">
<h2 className="flex flex-wrap items-center gap-2 md:gap-3 text-brand-yellow font-black uppercase tracking-[0.1em] text-[11px] md:text-base">
  <span className="animate-stack-in delay-long-1">Neapolitan Pizza</span>
  
  <span className="text-white/20 opacity-0 animate-stack-in delay-long-1">•</span>
  
  <span className="animate-stack-in delay-long-2">Steak</span>
  
  <span className="text-white/20 opacity-0 animate-stack-in delay-long-2">•</span>
  
  <span className="animate-stack-in delay-long-3">Custom Cakes</span>
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

    {/* 3. Logo - Floating Motion */}
    <div className="lg:col-span-5 flex justify-center">
      <img 
        src={logoNoBackground} 
        alt="Logo" 
        className="animate-float w-64 md:w-full max-w-[400px] object-contain drop-shadow-2xl" 
      />
    </div>
  </div>
</section>

      {/* --- ANNOUNCEMENTS SECTION --- */}
      <section className="w-full py-16 md:py-24 bg-brand-white relative overflow-hidden">

        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 pointer-events-none select-none">
          <h2 className="text-[20vw] font-black text-brand-black/[0.03] uppercase leading-none italic">Journal</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header with Navigation */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
            <div>
              <span className="text-brand-yellow font-black uppercase tracking-[0.4em] text-[10px]">Current Volume</span>
              <h2 className="text-4xl md:text-7xl font-serif italic text-brand-black mt-2 leading-tight">Latest <br className="md:hidden" /> Happenings</h2>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-brand-black font-serif italic text-2xl">0{activeSlide + 1}</span>
              <div className="w-12 md:w-20 h-px bg-brand-black/20"></div>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % announcements.length)}
                className="group relative w-12 h-12 md:w-16 md:h-16 rounded-full border border-brand-black flex items-center justify-center overflow-hidden hover:bg-brand-black transition-all duration-500"
              >
                <span className="relative z-10 group-hover:text-brand-yellow transition-colors italic font-serif text-xl md:text-2xl">→</span>
              </button>
            </div>
          </div>

          {/* THE CLICKABLE SLIDER */}
          <div className="relative w-full h-[450px] md:h-[700px] group">
            {announcements.map((item, index) => (
              <div
                key={item.id}
                // TRIGGER POPUP ON CLICK
                onClick={() => setSelectedAnnouncement(item)}
                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer ${activeSlide === index
                  ? 'translate-x-0 opacity-100 z-20 scale-100'
                  : 'translate-x-[10%] opacity-0 z-10 scale-110 pointer-events-none'
                  }`}
              >
                {/* Image Frame - Artisan Border */}
                <div className="w-full h-full relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] border-[6px] md:border-[12px] border-brand-white bg-brand-black">
                  <img
                    src={item.img}
                    className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out ${activeSlide === index ? 'scale-100 grayscale-0' : 'scale-125 grayscale-[50%]'}`}
                    alt={item.title}
                  />

                  {/* Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/30 to-transparent p-6 md:p-16 flex flex-col justify-end">
                    <div className={`transform transition-all duration-700 delay-300 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <span className="bg-brand-yellow text-brand-black text-[9px] font-black uppercase px-4 py-1.5 rounded-full mb-4 inline-block tracking-widest">
                        {item.tag}
                      </span>
                      <h3 className="text-3xl md:text-8xl font-serif italic text-brand-white leading-tight max-w-3xl drop-shadow-lg">
                        {item.title}
                      </h3>

                      {/* Interaction Hint */}
                      <div className="mt-6 flex items-center gap-3 text-brand-yellow font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">
                        <span className="animate-pulse">●</span>
                        <span>Click to expand story</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Side Navigation - Vertical Pills */}
            <div className="absolute -left-3 md:-left-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-30">
              {announcements.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveSlide(i); }}
                  className={`transition-all duration-500 rounded-full ${activeSlide === i ? 'h-12 md:h-20 w-1.5 bg-brand-yellow' : 'h-3 md:h-5 w-1 bg-brand-black/10 hover:bg-brand-black/30'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE COMPACT ARTISAN CARD --- */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-brand-black/95 backdrop-blur-md"
            onClick={() => setSelectedAnnouncement(null)}
          ></div>

          {/* CARD: Compact max-w-sm and reduced height */}
          <div className="relative bg-brand-white w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">

            {/* CLOSE: Clean & Integrated */}
            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-4 right-4 z-[210] bg-brand-black text-brand-yellow w-8 h-8 rounded-full flex items-center justify-center text-xs border border-brand-yellow/30"
            >✕</button>

            {/* IMAGE: Square-ish Crop to keep the card short */}
            <div className="w-full h-56 md:h-64 relative bg-brand-black">
              <img
                src={selectedAnnouncement.img}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            {/* INFO: Tight spacing, no extra fluff */}
            <div className="p-6 text-center bg-brand-white">
              <span className="text-brand-yellow font-black uppercase text-[8px] tracking-[0.4em] mb-1 block">
                {selectedAnnouncement.tag}
              </span>

              <h2 className="text-2xl md:text-3xl font-serif italic mb-3 text-brand-black leading-tight">
                {selectedAnnouncement.title}
              </h2>

              <p className="text-brand-black/60 mb-6 text-xs italic leading-relaxed px-4">
                "{selectedAnnouncement.desc}"
              </p>

              {/* BUTTON: Slim & Minimalist */}
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="w-full py-3 border border-brand-black hover:bg-brand-black hover:text-brand-yellow transition-all rounded-lg text-[9px] font-black uppercase tracking-[0.3em]"
              >
                Dismiss
              </button>
            </div>

            {/* Accent Footer */}
            <div className="h-1.5 bg-brand-yellow w-full"></div>
          </div>
        </div>
      )}

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


      <Memories />
{/* --- FOOTER --- */}
      <footer className="bg-brand-black text-brand-white mt-24 py-16 md:py-24 px-6 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">

            {/* Column 1: Brand & Bio */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
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
                <p>L1-12, Anja Residensi, Persiaran Bandar, Seksyen 1 Bandar Baru Bangi, 43650 Bandar Baru Bangi,</p>
                <p>019-791 4431</p>
                <p className="pt-2 text-brand-yellow font-black">admin@bakerina.my</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/bakerina.steakcafe/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-black transition-all cursor-pointer group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>

                <a
                  href="https://www.facebook.com/bakerina.yann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-black transition-all cursor-pointer group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>

                <a
                  href="https://www.tiktok.com/@bakerina.steakcafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-black transition-all cursor-pointer group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2026 Bakerina. All rights reserved.</span>
              <span className="text-[9px] text-white/20 uppercase tracking-[0.1em]">Powered by <span className="text-brand-yellow/40 font-black">Binaidea</span></span>
            </div>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] italic font-serif">The Art of Slow Baking</span>
          </div>
        </div>
      </footer>

{/* --- THE INTERACTIVE FLOOR PLAN CARD (LIGHT BACKDROP) --- */}
      {showOrderTeaser && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          {/* LIGHTER BACKDROP: Milky glass effect instead of dark black */}
          <div 
            className="absolute inset-0 bg-white/40 backdrop-blur-md"
            onClick={() => setShowOrderTeaser(false)}
          ></div>

          {/* THE CARD */}
          <div className="relative bg-brand-white w-full max-w-sm rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-in zoom-in duration-300 border-t-8 border-brand-yellow">
            
            {/* TOP RIGHT X BUTTON */}
            <button 
              onClick={() => setShowOrderTeaser(false)}
              className="absolute top-6 right-8 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-brand-black/5 hover:bg-brand-black hover:text-brand-yellow transition-all text-brand-black font-black text-xs"
            >
              ✕
            </button>

            {/* 1. HEADER */}
            <div className="p-10 pb-0 text-center">
              <div className="inline-flex items-center gap-2 bg-brand-black text-brand-yellow px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.3em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping"></span>
                Live Floor Plan
              </div>
              <h2 className="text-4xl font-serif italic text-brand-black leading-none">Ops!</h2>
              <p className="text-[10px] text-brand-black/40 uppercase tracking-widest mt-2 px-6">Table Selection Engine Offline</p>
            </div>

            {/* 2. THE TABLE LAYOUT (Mimic UI) */}
            <div className="relative px-8 py-10">
              
              {/* THE LOADER: Floating over the tables */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-16 h-16 border-[3px] border-brand-black/5 border-t-brand-yellow rounded-full animate-spin shadow-sm"></div>
                <span className="mt-4 bg-brand-black text-brand-yellow text-[7px] font-black px-3 py-1 rounded-md uppercase tracking-[0.4em]">
                  Mapping_Tables...
                </span>
              </div>

              {/* FLOOR PLAN GRID */}
              <div className="grid grid-cols-3 gap-6 opacity-30 select-none pointer-events-none p-4 border-2 border-dashed border-brand-black/5 rounded-[2rem]">
                <div className="col-span-3 text-center text-[7px] font-black uppercase tracking-[0.5em] text-brand-black/20 mb-2 border-b border-brand-black/5 pb-2">
                  Main Entrance
                </div>

                {/* Table 1 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-black/20 flex items-center justify-center text-[8px] font-black">T1</div>
                  <div className="w-8 h-1 bg-brand-black/10 rounded-full"></div>
                </div>

                {/* Table 2 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-10 rounded-md border-2 border-brand-black/20 flex items-center justify-center text-[8px] font-black bg-brand-yellow/10">T2</div>
                  <div className="w-8 h-1 bg-brand-black/10 rounded-full"></div>
                </div>

                {/* Table 3 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-black/20 flex items-center justify-center text-[8px] font-black">T3</div>
                  <div className="w-8 h-1 bg-brand-black/10 rounded-full"></div>
                </div>

                {/* Table 4 (VIP) */}
                <div className="col-span-2 flex flex-col items-center gap-2">
                  <div className="w-full h-12 rounded-xl border-2 border-brand-black/20 flex items-center justify-center text-[8px] font-black uppercase tracking-tighter">VIP Section</div>
                  <div className="w-20 h-1 bg-brand-black/10 rounded-full"></div>
                </div>

                {/* Table 5 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-md border-2 border-brand-black/20 flex items-center justify-center text-[8px] font-black">T5</div>
                  <div className="w-8 h-1 bg-brand-black/10 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* 3. ACTION SECTION */}
            <div className="p-10 pt-0 text-center">
              <p className="text-brand-black/50 text-[11px] italic leading-relaxed mb-8 px-4">
                "We are currently synchronizing the live floor plan with our in-store POS. Please <span className="text-brand-black font-black underline decoration-brand-yellow decoration-2">WhatsApp</span> us to pick your table."
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=60197914431&text=Hi+I+would+like+to+make+a+reservation+at+Bakerina+and+pick+a+specific+table&type=phone_number&app_absent=0" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-brand-black text-brand-yellow rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-xl hover:bg-brand-yellow hover:text-brand-black transition-all active:scale-95 text-center"
              >
                Confirm via WhatsApp
              </a>
              
              <div className="h-6"></div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}