import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, Check, Menu, X, Instagram, Facebook } from 'lucide-react';
import logo from "./assets/revlogo.png"

// --- Data Constants ---



const REVIEWS = [
  {
    name: "Elizabeth",
    stars: 5,
    text: "Friendly and knowledgeable trainers, programming that works and the community makes this gym a special place. No matter how challenging the workouts can be, the feeling of pushing yourself to succeed and watching others around you do the same keeps you going back time and time again."
  },
  {
    name: "Candice",
    stars: 5,
    text: "The balance between high quality training, community, and results have been second to none! I've trained at numerous different functional training gyms in my life, and none compare to REVL. The family atmosphere makes every session one to remember. I highly recommend REVL to anyone, no matter the fitness level you're at!"
  },
  {
    name: "Nancy",
    stars: 5,
    text: "I'm so glad to have started my fitness journey here as the experience is amazing. The workouts not only cater to everyone regardless of how long you have been training for but the best part is the fantastic coaching crew. They are all so knowledgeable, approachable and down to earth people."
  }
];

const FAQS = [
  {
    question: "Is REVL suitable for all fitness levels?",
    answer: "REVL Training allows you to experience the kind of targeted and high-performance training that was once reserved exclusively for professional athletes. REVL is the perfect combination of strength and conditioning, ideal for anyone looking to take their training to the next level."
  },
  {
    question: "What styles of training are on offer?",
    answer: "REVL has strength-based sessions on Mondays, Wednesdays, and Fridays (Move/Perform), and cardio-based sessions on Tuesdays, Thursdays, and Saturdays (Sweat). Attending 3-5 sessions per week is recommended for maximum results."
  },
  {
    question: "What's the difference between Move & Perform?",
    answer: "The fundamental goal of Perform is strength progression. Perform is designed with absolute strength in mind using progressive overload to increase the weight you can lift. Think lower reps and more rest. Move combines strength and conditioning movements through isolated total, upper, and lower body sessions to target each muscle group. Get leaner, stronger and fitter. Move faster and feel the burn."
  }
];

const PROGRAMS = [
  {
    title: "MOVE",
    subtitle: "For Body Composition",
    schedule: "Monday, Wednesday, Friday",
    description: "Move combines strength and conditioning movements through isolated total, upper, and lower body sessions to target each muscle group.",
    color: "border-blue-500"
  },
  {
    title: "SWEAT",
    subtitle: "For Cardio Conditioning",
    schedule: "Tuesday, Thursday, Weekends",
    description: "High intensity interval training designed to improve your aerobic capacity and endurance.",
    color: "border-red-500"
  },
  {
    title: "PERFORM",
    subtitle: "For Maximum Strength",
    schedule: "Monday, Wednesday, Friday",
    description: "The fundamental goal of Perform is strength progression. Designed with absolute strength in mind using progressive overload.",
    color: "border-white"
  }
];

// --- Components ---

const Button = ({ children, className = "", onClick, fullWidth = false }) => (
  <button 
    onClick={onClick}
    className={`uppercase font-black italic tracking-widest py-3 px-6 md:py-4 md:px-8 border-2 border-red-600 bg-red-600 text-white hover:bg-transparent hover:text-red-600 transition-all duration-300 ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    {children}
  </button>
);

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-12 md:py-24 ${className}`}>
    {children}
  </section>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-zinc-800">
    <button 
      className="w-full py-4 md:py-6 flex justify-between items-center text-left focus:outline-none group"
      onClick={onClick}
    >
      <span className="text-base md:text-lg font-bold text-white uppercase tracking-wider pr-4 group-hover:text-red-600 transition-colors">{question}</span>
      {isOpen ? <ChevronUp className="text-red-600 flex-shrink-0" /> : <ChevronDown className="text-zinc-500 group-hover:text-white flex-shrink-0" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}>
      <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">{answer}</p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToOffer = () => {
    setIsMobileMenuOpen(false); // Close menu if open
    const section = document.getElementById('offer-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Mock timer logic
      setTimeLeft({ days: 2, hours: 14, minutes: 35, seconds: 20 });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-red-600 selection:text-white">
      
      {/* Styles for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .stroke-text {
          -webkit-text-stroke: 1px black; 
        }
      `}</style>

      {/* Top Banner */}
      <h1 className="bg-red-600 text-white text-center py-2 md:py-3 text-[10px] md:text-sm font-black tracking-[0.2em] uppercase sticky top-0 z-50 font-[family-name: --headline]">
        14 Classes for $140 |
        
       {/* <span className="underline cursor-pointer" onClick={scrollToOffer}>Sign-up</span> */}
      </h1>

      {/* Navigation - Full Width */}
      <nav className="absolute w-full z-40 bg-transparent border-b border-white/10 top-[30px] md:top-[44px]">
        <div className="w-full px-6 md:px-12 py-4 md:py-6 flex justify-between items-center">
          {/* Logo Update */}
          <div className="relative z-50">
            <img src={logo} alt="REVL Training" className="h-8 md:h-10 w-auto object-contain" />
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
             <Button onClick={scrollToOffer} className="py-2 px-6 text-xs">
               Secure Offer
             </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white cursor-pointer relative z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-30 flex flex-col items-center justify-center space-y-8 p-6 animate-fade-in">
          <h2 className="text-3xl font-black italic uppercase text-zinc-700">Menu</h2>
          <button onClick={scrollToOffer} className="text-2xl font-bold uppercase hover:text-red-600 transition-colors">Sign Up</button>
          <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('programs').scrollIntoView({behavior: 'smooth'})}} className="text-xl font-bold uppercase text-zinc-400 hover:text-white transition-colors">Programs</button>
          <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('faq').scrollIntoView({behavior: 'smooth'})}} className="text-xl font-bold uppercase text-zinc-400 hover:text-white transition-colors">FAQ</button>
          <Button onClick={scrollToOffer} className="mt-8 w-full max-w-xs">Secure Offer Now</Button>
        </div>
      )}

      {/* Hero Section - Full Screen */}
      <div className="relative min-h-[90vh] md:h-screen flex items-center justify-center text-center px-4 md:px-0 overflow-hidden pt-20 md:pt-0">
        {/* Video Placeholder */}
        <div className="absolute inset-0 bg-zinc-900 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="w-full h-full flex items-center justify-center opacity-30">
             <span className="text-zinc-600 font-black text-6xl md:text-9xl uppercase opacity-20 select-none">Video BG</span>
          </div>
        </div>

        <div className="relative z-20 max-w-[90%]  mx-auto space-y-6 md:space-y-8 mt-8 md:mt-16 justify-items-center">
        <img src={logo} alt="REVL Training" className=" max-[900px] object-contain" />
          <h1 className="text-[20px] font-black uppercase italic leading-[0.9] tracking-tighter">
            Level Up Your Fitness
          </h1>
          
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-[50px] font-bold uppercase  text-[#CCCCCC]">
              Get 75% OFF!
            </h2>
            <h1 className="text-[80px]  text-zinc-300 uppercase  font-bold font-[family-name: --headline]">
            Secure your 14 CLASSES for only 
            <em><s>$560</s></em> 
            140
            </h1>
            <div className="inline-block border border-white/30 bg-black/50 backdrop-blur px-4 py-2 rounded mb-4">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs md:text-sm">Offer Ends: Feb 14, 2025</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <Button onClick={scrollToOffer} className="text-sm md:text-lg px-8 md:px-12 py-4 md:py-5 w-full md:w-auto shadow-[0_0_30px_rgba(220,38,38,0.4)]">
              Secure This Offer Now
            </Button>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500">This offer won't last long!</p>
          </div>
        </div>
      </div>

      {/* Marquee Banner - Full Width */}
      <div className="bg-white text-black py-3 md:py-4 overflow-hidden border-y border-zinc-200">
        <div className="animate-marquee items-center">
          {[1, 2, 3, 4].map((i) => (
             <React.Fragment key={i}>
                <span className="text-lg md:text-2xl font-black italic uppercase tracking-wider mx-4 whitespace-nowrap">For Today. For Tomorrow. For Future You.</span>
                <span className="text-lg md:text-2xl font-black italic uppercase tracking-wider mx-4 text-transparent stroke-text">•</span>
             </React.Fragment>
          ))}
        </div>
      </div>

      {/* Ready To Revl (Intro) - Full Width Container */}
      <Section className="bg-black">
        <div className="w-full px-6 md:px-16 text-center max-w-[1800px] mx-auto">
          <h2 className="text-3xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 md:mb-12">
            Ready to <span className="text-red-600">REVL?</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-2xl leading-relaxed font-light mb-12 md:mb-20 max-w-4xl mx-auto">
            REVL is a place, an experience and a community where everyday athletes come not only to better their health, but to redefine their boundaries.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-24 text-left max-w-6xl mx-auto">
             <div className="space-y-12">
               <div className="flex gap-6">
                 <div className="w-1 h-16 bg-red-600 flex-shrink-0"></div>
                 <div>
                   <h3 className="text-lg md:text-2xl font-bold uppercase mb-2">Supportive</h3>
                   <p className="text-zinc-400 text-sm md:text-base">Group training to inspire you to achieve your best.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="w-1 h-16 bg-red-600 flex-shrink-0"></div>
                 <div>
                   <h3 className="text-lg md:text-2xl font-bold uppercase mb-2">Results-Focused</h3>
                   <p className="text-zinc-400 text-sm md:text-base">Group training that will challenge & motivate you.</p>
                 </div>
               </div>
             </div>
             <div className="space-y-12">
               <div className="flex gap-6">
                 <div className="w-1 h-16 bg-red-600 flex-shrink-0"></div>
                 <div>
                   <h3 className="text-lg md:text-2xl font-bold uppercase mb-2">Feel Good Fitness</h3>
                   <p className="text-zinc-400 text-sm md:text-base">We sweat together - succeed together.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="w-1 h-16 bg-red-600 flex-shrink-0"></div>
                 <div>
                   <h3 className="text-lg md:text-2xl font-bold uppercase mb-2">Expert Knowledge</h3>
                   <p className="text-zinc-400 text-sm md:text-base">Structured programming that delivers consistent results.</p>
                 </div>
               </div>
             </div>
          </div>

          <div className="mt-12 md:mt-24 bg-zinc-900 border border-zinc-800 p-6 md:p-12 rounded-none max-w-5xl mx-auto">
            <h3 className="text-xl md:text-3xl font-black uppercase italic mb-4">Get started with 14 Classes for $140</h3>
            <p className="text-zinc-400 mb-6 md:mb-8 text-sm md:text-lg">Discover what you're capable of.</p>
            <Button onClick={scrollToOffer} fullWidth className="md:w-auto">Secure This Offer Now</Button>
          </div>
        </div>
      </Section>

      {/* Community Image Text Split - Already Full Width */}
      <Section className="py-0 bg-white text-black">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 bg-zinc-200 h-[300px] md:min-h-[600px] flex items-center justify-center relative overflow-hidden order-1">
             <div className="text-zinc-400 font-black text-3xl md:text-5xl uppercase opacity-20 -rotate-12">Community Image</div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center bg-black text-white order-2">
            <h2 className="text-xs md:text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Our Community</h2>
            <h3 className="text-3xl md:text-6xl font-black uppercase italic leading-none mb-6">
              For Today. <br/>For Tomorrow.
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-lg">
              We know that getting fit is not just about the workout, but also about the community. REVL is where everyday athletes thrive. Our studios are judgment free zones.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8 text-sm md:text-lg">
              Join a community-driven environment that will challenge you, inspire you, and keep you coming back for more.
            </p>
            <Button onClick={scrollToOffer} className="self-start w-full md:w-auto">
              Secure This Offer Now
            </Button>
          </div>
        </div>
      </Section>

      {/* Programs - Full Width Container */}
      <Section className="bg-zinc-900" id="programs">
        <div className="w-full px-6 md:px-16 max-w-[1800px] mx-auto">
          <h2 className="text-3xl md:text-7xl font-black uppercase italic text-center mb-12 md:mb-20">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {PROGRAMS.map((program, index) => (
              <div key={index} className={`bg-black p-6 md:p-12 border-t-4 ${program.color} hover:bg-zinc-900 transition-colors duration-300`}>
                <h3 className="text-2xl md:text-4xl font-black italic uppercase mb-2">{program.title}</h3>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 md:mb-8">{program.subtitle}</p>
                <div className="w-12 h-1 bg-zinc-800 mb-4 md:mb-8"></div>
                <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-6 h-auto md:h-24">
                  {program.description}
                </p>
                <div className="flex items-center text-[10px] md:text-sm font-bold uppercase tracking-wider text-white">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  {program.schedule}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-20 max-w-3xl mx-auto">
             <p className="text-zinc-400 text-xs md:text-base">
               Our sessions are taught by experienced trainers who know how to motivate and encourage you to push yourself to the next level. Always providing modifications and support as needed.
             </p>
          </div>
        </div>
      </Section>

      {/* Value Stack / Ready to Experience - Full Width Container */}
      <Section className="bg-black relative border-t border-zinc-900">
        <div className="w-full px-6 md:px-16 max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
            
            <div className="w-full md:w-1/2 space-y-6 md:space-y-10">
              <div>
                <span className="text-red-600 font-bold uppercase tracking-widest text-xs md:text-sm">Limited Time Intro Offer</span>
                <h2 className="text-3xl md:text-7xl font-black uppercase italic mt-2 mb-6">
                  Ready to Experience <br/> REVL?
                </h2>
              </div>

              <ul className="space-y-4 md:space-y-8">
                {[
                  "A community where everyday athletes come together.",
                  "A studio designed with innovative layouts.",
                  "Expert guidance and support from accredited coaches.",
                  "Each training block tailored to you.",
                  "No pressure to join, no catch!"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 md:w-8 md:h-8 text-red-600 mr-3 md:mr-6 flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-base md:text-2xl font-light leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-10 flex items-center justify-between">
                <div>
                   <p className="text-zinc-500 uppercase text-[10px] md:text-sm font-bold tracking-widest">Total Value $560</p>
                   <p className="text-white text-2xl md:text-4xl font-black italic uppercase">Save 75%</p>
                </div>
                <div className="text-right">
                   <p className="text-red-600 text-3xl md:text-5xl font-black">$140</p>
                   <p className="text-zinc-500 text-[10px] md:text-sm">SGD</p>
                </div>
              </div>

              <Button onClick={scrollToOffer} fullWidth className="md:hidden">Secure This Offer Now</Button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] bg-zinc-800 w-full relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-zinc-700 font-black text-4xl md:text-7xl uppercase -rotate-90">Gym Floor</span>
                 </div>
                 {/* Video Play Button Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center">
                       <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[16px] md:border-l-[24px] border-l-white border-b-[8px] md:border-b-[12px] border-b-transparent ml-1 md:ml-2"></div>
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6 text-white font-bold uppercase tracking-widest text-[10px] md:text-sm">Enable Sound</div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Testimonials - Full Width Container */}
      <Section className="bg-white text-black">
        <div className="w-full px-6 md:px-16 max-w-[1800px] mx-auto">
           <div className="text-center mb-12 md:mb-20">
             <div className="flex justify-center mb-4 text-red-600 gap-1">
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
             </div>
             <h2 className="text-2xl md:text-4xl font-black uppercase italic">"Friendly and knowledgeable trainers..."</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
             {REVIEWS.map((review, i) => (
               <div key={i} className="flex flex-col items-center text-center">
                 <div className="w-14 h-14 md:w-20 md:h-20 bg-black text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl mb-6">
                   {review.name.charAt(0)}
                 </div>
                 <div className="flex text-red-600 mb-4 gap-1">
                   {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
                 </div>
                 <p className="text-zinc-600 italic leading-relaxed mb-6 text-sm md:text-lg">"{review.text}"</p>
                 <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm">{review.name}</h4>
               </div>
             ))}
           </div>
        </div>
      </Section>

      {/* FAQ - Full Width Container */}
      <Section className="bg-zinc-900 border-t border-black" id="faq">
        <div className="w-full px-6 md:px-16 max-w-5xl mx-auto">
           <h2 className="text-3xl md:text-6xl font-black uppercase italic text-center mb-4 md:mb-8">Frequently Asked Questions</h2>
           <p className="text-zinc-400 text-center mb-8 md:mb-16 max-w-xl mx-auto text-sm md:text-lg">
             Have questions? We've got you covered. Check out our FAQ section to find all the details you need.
           </p>

           <div className="space-y-2">
             {FAQS.map((faq, idx) => (
               <AccordionItem 
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === idx}
                  onClick={() => toggleFaq(idx)}
               />
             ))}
           </div>
        </div>
      </Section>

      {/* Final Form Section - Full Width Container */}
      <Section id="offer-section" className="bg-black py-16 md:py-32">
        <div className="w-full px-6 md:px-16 max-w-[1800px] mx-auto">
          <div className="max-w-xl mx-auto text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-black uppercase italic mb-4">Ready to Get Started?</h2>
            <p className="text-lg md:text-2xl text-zinc-400">Claim your Intro Offer below!</p>
          </div>

          <div className="max-w-3xl mx-auto bg-zinc-900 p-6 md:p-16 border border-zinc-800 relative">
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
               75% Off · Limited Time
             </div>

             <form className="space-y-4 md:space-y-8 mt-4 md:mt-0" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                 <div>
                   <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">First Name</label>
                   <input className="w-full bg-black border border-zinc-700 p-3 md:p-5 text-white focus:border-red-600 outline-none transition-colors" type="text" />
                 </div>
                 <div>
                   <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Last Name</label>
                   <input className="w-full bg-black border border-zinc-700 p-3 md:p-5 text-white focus:border-red-600 outline-none transition-colors" type="text" />
                 </div>
               </div>
               
               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                 <input className="w-full bg-black border border-zinc-700 p-3 md:p-5 text-white focus:border-red-600 outline-none transition-colors" type="email" />
               </div>

               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Phone Number</label>
                 <input className="w-full bg-black border border-zinc-700 p-3 md:p-5 text-white focus:border-red-600 outline-none transition-colors" type="tel" />
               </div>

               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Select Studio</label>
                 <select className="w-full bg-black border border-zinc-700 p-3 md:p-5 text-white focus:border-red-600 outline-none appearance-none transition-colors">
                   <option>Singapore - CBD</option>
                   <option>Singapore - River Valley</option>
                 </select>
               </div>

               <Button fullWidth className="mt-4 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                 Secure This Offer Now
               </Button>
               
               <p className="text-center text-[10px] md:text-xs text-zinc-600 uppercase tracking-widest mt-4">
                 This offer won't last long!
               </p>
             </form>
          </div>
        </div>
      </Section>

      {/* Footer - Full Width */}
      <footer className="bg-black border-t border-zinc-900 py-8 md:py-16">
        <div className="w-full px-6 md:px-16 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all">
              <Facebook size={18} />
            </a>
          </div>
          <p className="text-zinc-600 text-[10px] md:text-xs uppercase tracking-widest mb-4">
            &copy; 2025 – REVL Singapore | All Rights Reserved
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-[10px] md:text-xs text-zinc-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}