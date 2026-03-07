import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

// --- IMAGE IMPORTS ---
import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpg';
import a4 from '../assets/a4.jpg';
import a5 from '../assets/a5.jpg';
import a6 from '../assets/a6.jpg';
import a7 from '../assets/a7.jpg';
import a8 from '../assets/a8.jpg';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="bg-[#f4f1ea] h-full shadow-inner flex flex-col relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 bottom-0 w-4 md:w-10 pointer-events-none z-10 
        odd:right-0 odd:bg-gradient-to-l even:left-0 even:bg-gradient-to-r 
        from-black/15 to-transparent opacity-60">
      </div>
      {props.children}
    </div>
  );
});

const Cover = React.forwardRef((props, ref) => {
  return (
    <div className="bg-brand-black h-full flex items-center justify-center p-4 md:p-10 shadow-2xl relative" ref={ref} data-density="hard">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>
      <div className="border border-brand-yellow/30 w-full h-full flex flex-col items-center justify-center text-center p-2 md:p-6 relative z-10">
        <span className="text-brand-yellow font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 md:mb-4">Volume I</span>
        <h1 className="text-brand-white text-2xl md:text-8xl font-serif italic leading-none">The <br/> Bakerina <br/> Journal</h1>
        <div className="w-6 md:w-12 h-px bg-brand-yellow my-3 md:my-8"></div>
        <p className="text-brand-yellow/50 text-[8px] md:text-[10px] uppercase tracking-widest font-black">2026 • Eco Majestic</p>
      </div>
    </div>
  );
});

const Memories = () => {
  const book = useRef();
  const sectionRef = useRef();
  const [hasBlown, setHasBlown] = useState(false);
  const [dimensions, setDimensions] = useState({ w: 600, h: 800 });

  // Calculate the middle point: (Cover + 6 Stories*2 + BackCover) = 14 pages total
  // Start page 6 or 7 is roughly the middle spread
  const MIDDLE_PAGE = 8; 

  // --- THE "ANGIN" BLOW SHUT LOGIC ---
  const simulateWindBlow = () => {
    if (!book.current) return;
    const pageFlip = book.current.pageFlip();
    
    let currentPage = pageFlip.getCurrentPageIndex();

    // Start flipping backwards to 0
    const interval = setInterval(() => {
      if (currentPage <= 0) {
        clearInterval(interval);
      } else {
        currentPage -= 1;
        pageFlip.flip(currentPage);
      }
    }, 150); // Speed of the wind
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only when it comes into view
        if (entry.isIntersecting && !hasBlown) {
          // Give the user a split second to see it open, then blow
          setTimeout(() => {
            simulateWindBlow();
            setHasBlown(true);
          }, 300);
        } else if (!entry.isIntersecting) {
          // Reset so it can happen again if they scroll away and back
          setHasBlown(false);
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasBlown]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ w: 450, h: 1000 });
      } else {
        setDimensions({ w: 600, h: 800 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const playSound = () => {
    const audio = new Audio('https://www.soundjay.com/misc/sounds/paper-flip-1.mp3');
    audio.volume = 0.3;
    audio.play();
  };

  const stories = [
    { title: "The First Spark", desc: "Our journey started with a single wood-fired oven and a dream to bring authentic artisan bread to Eco Majestic.", img: a4 },
    { title: "The Bakerina Smile", desc: "It’s more than just the food; it’s the warmth we share. Seeing our customers leave with a smile and come back like family is the heart of our new shop.", img: a2 },
    { title: "Evening Glow", desc: "The shop comes alive at night. There's nothing better than seeing a full house enjoying our signature western meal and a good glass of juice.", img: a3 },
    { title: "From Grain to Grill", desc: "We pushed past the flour and dough to master the flame. Introducing our curated steak menu—taking that same artisan heart and serving it up perfectly seared, because we never stop evolving.", img: a8 },
    { title: "The Bangi Chapter", desc: "We stepped out of our comfort zone to bring our craft to a new neighborhood. It was a leap of faith, but seeing the same love for our bread here proves that home is wherever we share our passion", img: a5 },
    { title: "The Neapolitan Soul", desc: "We took our sourdough obsession to the wood-fired oven. Our Neapolitan-style pizza is a tribute to tradition—thin, airy, and charred to perfection. One bite and you'll taste the artisan heart in every slice.", img: a7 },
  ];

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-2 md:py-24 flex flex-col items-center justify-center bg-[#e8e4da] overflow-hidden">
      
      {/* BACKGROUND TEXT */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span className="absolute top-10 -left-10 text-[12vh] font-serif italic text-black/5 whitespace-nowrap">Our Story</span>
        <span className="absolute bottom-20 -right-10 text-[15vh] font-black uppercase text-brand-yellow/10 tracking-tighter">Artisan</span>
        <span className="absolute top-1/2 left-5 -translate-y-1/2 text-[8vh] font-serif text-brand-white/40 rotate-90 origin-left opacity-20">EST. 2026</span>
      </div>

      <div className="relative z-10 w-full max-w-[100vw] px-1 md:px-12 flex flex-col items-center justify-center overflow-hidden">
        
        {/* HEADER TEXT */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-brand-black text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-2">The Archive</h2>
          <p className="text-brand-black/40 font-serif italic text-sm md:text-2xl">Flip through our favorite chapters</p>
        </div>

        <div className="relative p-1 md:p-12 bg-[#d7d2c5] rounded-xl shadow-inner border border-black/5 w-full md:max-w-[1400px] flex justify-center overflow-hidden max-h-[60vh] md:max-h-none">
          
          <HTMLFlipBook 
            width={dimensions.w} height={dimensions.h} size="stretch"
            minWidth={150} maxWidth={1200}
            minHeight={200} maxHeight={1600}
            showCover={true} onFlip={playSound}
            usePortrait={false} mobileScrollSupport={true}
            startPage={MIDDLE_PAGE} // <--- FIX: This makes it open by default!
            className="bakerina-book shadow-[0_0_50px_rgba(0,0,0,0.2),5px_5px_0_#fff,10px_10px_0_#fff]"
            ref={book}
          >
            <Cover />
            {stories.map((story, index) => [
              <Page key={`text-${index}`}>
                <div className="h-full flex flex-col justify-between p-4 md:p-24 border-r border-black/5">
                  <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px]">Page {index * 2 + 1}</span>
                  <div>
                    <h3 className="text-sm md:text-5xl font-serif italic mb-1 md:mb-6 text-brand-black/80 leading-tight">{story.title}</h3>
                    <p className="text-[10px] md:text-xl text-brand-black/60 leading-tight md:leading-relaxed italic">{story.desc}</p>
                  </div>
                  {index === stories.length - 1 ? (
                      <div className="mt-1">
                        <p className="font-serif italic text-brand-yellow text-xs md:text-2xl opacity-70">- The Bakerina Team</p>
                      </div>
                  ) : <div className="h-px w-4 md:w-12 bg-brand-yellow/30"></div>}
                </div>
              </Page>,
              <Page key={`img-${index}`}>
                <div className="h-full w-full p-2 md:p-14 bg-[#f4f1ea]">
                  <div className="w-full h-full shadow-lg transform rotate-1 border-[4px] md:border-[20px] border-[#fffdfa] overflow-hidden">
                    <img src={story.img} alt="" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              </Page>
            ])}
            <Cover />
          </HTMLFlipBook>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="relative z-10 mt-6 md:mt-16 flex flex-col items-center gap-6">
        <div className="flex gap-3 md:gap-10">
          <button onClick={() => book.current.pageFlip().flipPrev()} className="bg-transparent text-brand-black/60 border-b border-brand-black/20 px-4 md:px-8 py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:text-brand-black hover:border-brand-black transition-all">← Previous</button>
          <button onClick={() => book.current.pageFlip().flipNext()} className="relative group overflow-hidden bg-brand-black text-brand-yellow border border-brand-yellow/50 px-6 md:px-12 py-2 md:py-3 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] shadow-lg hover:shadow-brand-yellow/20 transition-all active:scale-95">
            <span className="relative z-10">Next Page →</span>
            <div className="absolute inset-0 bg-brand-yellow opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Memories;