import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, Check, Menu, X, Instagram, Facebook, MapPin, Play } from 'lucide-react';
import logo from "./assets/revlogo.png"
import image1 from "./assets/image1.jpg"
import bg1 from "./assets/bg1.webp"
import bg2 from "./assets/bg2.webp"
import bg3 from "./assets/bg3.webp"
import bg4 from "./assets/bg4.webp"
import stars2 from "./assets/whitestar.png"
import blacklogo from "./assets/blacklogo.jpg"

import stars1 from "./assets/5stars.png"
import video1 from "./assets/video1.mp4"
import videohero from "./assets/videohero.mp4"

import sweatbg from "./assets/sweatbg.webp"
import movebg from "./assets/movebg.webp"

import performbg from "./assets/performbg.webp"



const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 35 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;

          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        
        return { days, hours, minutes };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-gray-700 selection:text-white pb-20 md:pb-0 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Roboto:wght@300;400;500;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-roboto { font-family: 'Roboto', sans-serif; }
      `}</style>

      {/* Top Announcement Bar */}
      <div className="timer flex flex-col items-center ">
        <div className="flex w-full md:flex-row flex-col justify-center md:mt-2.5  m-auto m-w-[1170px]">
        <div className="font-head flex md:text-[24px] text-[14px] md:w-[50%] uppercase text-center content-center justify-center items-center">This offer ends soon. secure your spot now.</div>
        <div className="flex justify-center gap-6 md:w-[50%] text-center font-head md:mt-0 mt-3">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col">
                  <span className="md:text-[48px] text-[32px] md:leading-15 font-bold ">{value.toString().padStart(2, '0')}</span>
                  <span className="md:text-[14px] text-[10px] font-text uppercase text-gray-400 ">{unit}</span>
                </div>
              ))}
            </div>
            </div>
    
      </div>

{/*      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg top-0' : 'bg-transparent py-5 top-8'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-3xl font-poppins font-bold tracking-tighter italic">REVL <span className="text-gray-400">TRAINING</span></div>
          <button 
            onClick={handleOpenModal}
            className="hidden md:block bg-white text-black hover:bg-gray-200 px-6 py-2 font-poppins font-bold uppercase tracking-wide transition-colors"
          >
            Get Offer
          </button>
        </div>
      </nav>
 */}
      {/* Hero Section */}
      <div className="relative py-[55px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
        <video className="herovideo" autoPlay playsInline muted loop >
      <source src={videohero} type="video/mp4"/>
     </video>
        </div>



        <div className="  py-[15px]  mx-auto w-[85%] z-10 flex flex-col items-center text-center mb-[20px] gap-6">


        <div className="text-[24px] font-text font-bold uppercase text-white mb-8 italic">
            Level Up Your Fitness
          </div>

          <div className="flex z-50 w-full justify-center">
            <img src={logo} alt="REVL Training" className="  md:max-w-[832px]" />
          </div>
          
         {/*  <div className="bg-red-600 text-white px-4 py-1 font-poppins font-bold uppercase tracking-widest text-sm mb-6 animate-pulse">
            Limited Time Intro Offer
          </div> */}


          <div className="text-[32px] md:text-[64px] font-head font-bold uppercase ">14 CLASSES for 
          {" "} 
           <em className='text-red-500'><s>$560</s></em> {" "} $140
           
           </div>

          <div className="text-[28px] md:text-[50px] font-head font-bold uppercase  text-[#CCCCCC] ">
          That's 75% OFF
          </div>

{/* 
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 p-6 rounded-lg max-w-2xl w-full mb-8">
            <div className="text-xl font-poppins uppercase tracking-wide mb-4 text-red-500 font-bold">Offer Ends: Feb 14, 2025</div>
            <div className="flex justify-center gap-6 text-center font-poppins">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-bold leading-none">{value.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase text-gray-400 tracking-wider mt-1">{unit}</span>
                </div>
              ))}
            </div>
          </div>
 */}

<div className="text-[24px] font-text upper font-bold text-white">OFFER ENDS: <u>14 FEB 2026</u></div>
<button 
            onClick={handleOpenModal}
            className="stylebutton max-w-[450px] my-[30px]"
          >
            <div className="text-[24px] font-head font-extrabold">
            CLAIM YOUR OFFER
            </div>
            <div className="text-[14px] font-text font-semibold text-[#1A1E1E]">IT WON’T LAST LONG</div>
    
          </button>


          <h1 className="font-head uppercase text-[24px] ">For Today. For Tomorrow. For Future You.</h1>
        </div>
      </div>

      {/* "Ready to REVL" Section - Split Layout Full Bleed */}
      <section  className="bg-[#1A1E1E]">
        {/* <div className="grid md:grid-cols-2 w-full"> */}
        <div className="flex-[1 1 auto] flex-col md:flex-row flex w-full ">
            {/* Text Side */}
        {/*     <div className="w-[9.4%] hidden md:flex" ></div> */}
            <div className="md:px-[100px] px-6 py-[60px] md:w-[53%] w-full flex flex-col justify-center items-start ">
{/*               <h2 className="text-4xl md:text-6xl font-poppins font-bold uppercase italic leading-none mb-8">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Revl?</span>
              </h2> */}
                <h2 className="text-[32px] font-head font-bold uppercase">
                UNLIKE THE OTHERS
                </h2>

                <p className="text-white font-bold mt-3 max-w-[511px] text-[24px] font-des ">
                This isn't just another gym membership. REVL is where everyday athletes come to redefine their boundaries, forge genuine connections, and discover there's more in the tank than they thought.

              </p>

              <div className="text-[26px] mt-[75px] font-bold uppercase text-black rounded-[150px] py-2 px-5 bg-[#D9D9D9] font-head"> 
               What to expect
              </div>

              
              <ul className="  w-full">
                {[
                  "Expert-led group training sessions designed for results.",
                  "A close-knit community that sweats, supports, and celebrates together.",
                  "Progressive programming that challenges and motivates.",
                  "Purpose-built studios with premium equipment."
                ].map((item, i) => (
                  <li key={i} className="border-b border-(--color-m0fg1ruf) pt-5 pb-2.5 pr-5 ">
                    <div className="flex items-start gap-4">
                      <span className=" text-[20px] font-des text-white">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-white font-bold text-[24px] font-head) mb-5 mt-10">
                <strong>
                ALL OF IT FOR ONLY $140.
                </strong>
              </p>
              <div className='flex w-full justify-center'>
              <button 
            onClick={handleOpenModal}
            className="stylebutton max-w-[450px] my-[30px]"
          >
            <div className="text-[24px] font-head font-extrabold">
            CLAIM YOUR OFFER
            </div>
            <div className="text-[14px] font-text font-semibold text-[#1A1E1E]">IT WON’T LAST LONG</div>
    
          </button>
              </div>

            </div>

            {/* Media Side - Full Bleed */}
            <div className="relative m md:w-[47%] w-full group">
               <img 
                src={image1}
                alt="Group Training" 
                className=" w-full object-cover "
              />
             
            </div>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      <section className="py-[60px] bg-[#CCCABB]  text-black">
        <div className="container md:px-0 px-[50px] mx-auto text-center max-w-5xl justify-items-center">

           <img src={stars1} className="  max-w-56 p-2.5" />


           <h2 className="text-[32px] mt-7 font-des font-bold max-w-[1077px]">
           “If you want to exercise but you don’t know where to start, join REVL! it's the best thing I have done in a long time for my own physical health and mental health."           </h2>
           <button 
            onClick={handleOpenModal}
            className="stylebutton md:max-w-[450px] w-full my-[30px]"
          >
            <div className="text-[24px] font-head font-extrabold">
            CLAIM YOUR OFFER
            </div>
            <div className="text-[14px] font-text font-semibold text-[#1A1E1E]">IT WON’T LAST LONG</div>
    
          </button>

        </div>
      </section>

      {/* Community Section - Split Layout Full Bleed */}
      <section  className="bgstyle bg-[#1A1E1E] border-b border-[#CCCABB] border-b-[6px]">
        <div className="flex-[1 1 auto] md:flex-row flex-col flex w-full">
             {/* Left Column: Video Placeholder - Full Bleed */}
             <div className="relative md:w-[47%] w-full md:h-auto h-100 bg-zinc-800 group overflow-hidden border-r border-zinc-800">
                <div className="absolute inset-0 flex items-center justify-center">
                <video className="videostyle" autoPlay loop playsInline controls muted >
                   <source src={video1} type="video/mp4"/>
                  </video>
                </div>

             </div>

             {/* Right Column: Text Content */}
             <div className="px-6 py-20 md:w-[53%]  w-full flex flex-col justify-items-center items-center text-left">
<div className="md:max-w-[558px] px-6 md:px-0">
                <h2 className="text-[32px] font-head font-bold uppercase  mb-5">
                  Our Community
                </h2>
                <p className="text-white font-des text-[24px] mb-8 font-normal]">
                We know that getting fit is not just about the workout, but also about the community.
                 </p>
                <p className="text-white font-des text-[24px] mb-8 font-normal]">
                REVL is where everyday athletes thrive. Our studios are judgment free zones, where people of all shapes, sizes and fitness levels are welcome.
                </p>
                <p className="text-white font-des text-[24px] mb-8 font-normal]">
                Join a community-driven environment that will challenge you, inspire you, and keep you coming back for more.
                </p>
                
                <h3 className="text-[40px] text-right font-head font-bold uppercase text-[#CCCABB] pt-10 mb-8">
                  For Today.<br/> For Tomorrow.<br/>For Future You.
                </h3>
                <div className='flex w-full justify-center'>
                <button 
            onClick={handleOpenModal}
            className="stylebutton max-w-[450px] my-[30px]"
          >
            <div className="text-[24px] font-head font-extrabold">
            CLAIM YOUR OFFER
            </div>
            <div className="text-[14px] font-text font-semibold text-[#1A1E1E]">IT WON’T LAST LONG</div>
    
          </button>
          </div>
          </div>
             </div>
        </div>
      </section>

      {/* Programs Section */}
      <section  className="py-[60px] bg-[#1A1E1E] md:px-0  ">
        <div className=" mx-auto px-4 flex flex-col items-center justify-items-center z-2">
          <h2 className="font-head text-[50px] font-bold p-5 uppercase text-center ">
            Our Programs
          </h2>
          
          <div className="flex w-[85%] pb-[15px] flex-col md:flex-row justify-center items-center gap-20 md:max-h-[362px]">
            {/* MOVE */}
            <div style={{ backgroundImage: `url(${movebg})` }} className="opbg border op md:max-w-[362px] md:max-h-[362px] flex flex-col leading-10 items-start">
              <h3 className="text-[48px] bg-transparent font-head font-bold opacity-100  text-white">MOVE</h3>
              <p className="text-white font-des   text-center text-[20px] font-bold pb-[60px]">For Body Composition</p>
              <p className="text-white font-text text-[16px] font-normal">Monday, Wednesday, Friday</p>

            </div>

            {/* PERFORM */}
            <div style={{ backgroundImage: `url(${performbg})` }} className="opbg border op md:max-w-[362px] md:max-h-[362px] flex flex-col leading-10 items-start">


              <h3 className="text-[48px] bg-transparent font-head font-bold opacity-100 text-white">PERFORM</h3>
              <p className="text-white font-des  text-center text-[20px] font-bold pb-[60px]">For Maximum Strength</p>
              <p className="text-white font-text text-[16px] font-normal">Monday, Wednesday, Friday</p>
            </div>

            {/* SWEAT */}
            <div style={{ backgroundImage: `url(${sweatbg})` }} className="opbg border op md:max-w-[362px] md:max-h-[362px] flex flex-col leading-10 items-start">

              <h3 className="text-[48px] bg-transparent font-head font-bold opacity-100  text-white">SWEAT</h3>
              <p className="text-white font-des  text-center text-[20px] font-bold pb-[60px]">For Cardio Conditioning</p>
              <p className="text-white font-text text-[16px] font-normal">Tuesday, Thursday, Weekends</p>
            </div>

          </div>

          <p className="font-des text-[20px] max-w-[987px] font-normal w-[75%] text-white text-center py-2.5 px-[5px] mt-10">
          Our sessions are taught by experienced trainers who know how to motivate and encourage you to push yourself to the next level. Always providing modifications and support as needed.                   </p>
        </div>
      </section>

      {/* Ready to Experience REVL? / Offer Details Grid - Full Bleed */}
{/*       <section style={{ backgroundImage: `url(${bg3})` }} className=" text-white bgstyle" >
          <div className="md:flex-[1 1 auto] flex md:flex-row flex-col w-full">

            <div className=" md:w-[9.3%] hidden md:flex" ></div>
            <div className="px-6 py-20 md:w-[39.7%] w-full flex flex-col justify-center items-start">
        
              <div className="text-[26px] mb-10 font-bold uppercase rounded-[150px] py-2 px-5 bg-(--color-m0fg12ll) font-(--headlinefont)"> 
              Limited Time Intro Offer
              </div>
              <div className="text-[39px] font-poppins font-bold uppercase pb-2.5 ">
                Ready to Experience REVL?
              </div>
              <div className="">
                {[
                  "A community where everyday athletes come together to push the limits of their potential.⁠",
                  "A studio designed with innovative layouts guaranteeing the best experience on the gym floor.",
                  "Expert guidance and support from REVL accredited coaches throughout your fitness journey.",
                  "Each training block tailored to you to help you consistently achieve your goals.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start mt-2.5">
                    <div className="w-5 h-5 rounded-full bg-(--color-m0fg1ruf) flex items-center justify-center mt-1 ">
                      <Check className=" h-3 text-black" strokeWidth={3} />
                    </div>
                    <p className="font-poppins text-[18px] font-normal text-white">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-2.5">
                {[
                  "No pressure to join, no catch!⁠",
                 "Get all of this for just $140—saving of 75% when you grab this offer now!"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start mb-2.5">
                    <div className="w-5 h-5 rounded-full bg-(--color-m0fg1ruf) flex items-center justify-center ">
                      <Check className=" h-3 text-black" strokeWidth={3} />
                    </div>
                    <p className="font-poppins text-[20px] font-bold text-white"><strong>{item}</strong></p>
                  </div>
                ))}
              </div>

              <button 
            onClick={handleOpenModal}
            className="stylebutton max-w-[450px] my-[30px]"
          >
            <div className="text-[24px] font-extrabold">
            CLAIM YOUR OFFER
            </div>
            <div className="text-[14px] font-semibold text-(--color-m0fg12ll)">IT WON’T LAST LONG</div>
    
          </button>
            </div>
            

            <div className="relative w-full md:w-[51%] md:h-auto h-100 bg-zinc-800 group overflow-hidden border-r border-zinc-800 ">
                <div className="absolute inset-0 flex items-center justify-center">
                <video className="videostyle" autoPlay loop playsInline controls >
                   <source src={video1} type="video/mp4"/>
                  </video>
                </div>

             </div>
          </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 px-5 md:px-0  bg-[#D3D4D3]">
        <div className=" flex flex-col items-center">
        <img src={stars1} className=" max-w-56 p-2.5" />


<h2 className="text-[32px] text-center mt-7 font-des font-bold max-w-[925px] text-black">
“Friendly and knowledgeable trainers, programming that works and the community makes this gym a special place!”
         </h2>


          <div className="flex max-w-[1080px] md:flex-row flex-col gap-8 mt-10">
            {[
              {
                name: "Elizabeth",
                text: "Friendly and knowledgeable trainers, programming that works and the community makes this gym a special place. No matter how challenging the workouts can be, the feeling of pushing yourself to succeed and watching others around you do the same keeps you going back time and time again.",
              },
              {
                name: "Candice",
                text: "The balance between high quality training, community, and results have been second to none! I've trained at numerous different functional training gyms in my life, and none compare to REVL. The family atmosphere makes every session one to remember. I highly recommend REVL to anyone, no matter the fitness level you're at!",
              },
              {
                name: "Nancy",
                text: "I’m so glad to have started my fitness journey here as the experience is amazing. The workouts not only cater to everyone regardless of how long you have been training for but the best part is the fantastic coaching crew. They are all so knowledgeable, approachable and down to earth people.",
              }
            ].map((review, i) => (
<div 
  key={i} 
  // 1. Add 'flex flex-col' to enable vertical positioning
  // 2. Add 'h-full' so the card stretches to fill the grid row (optional but recommended)
  className="teststyle rounded-2xl px-5 flex min-h-[487px] flex-col h-full"
>
  <div className="flex flex-col items-center text-white mb-4">
    <img src={stars2} />
  </div>

  <p className="text-white text-[20px] font-des text-left my-4">
    "{review.text}"
  </p>

  {/* 3. Add 'mt-auto' here. This pushes this specific div to the bottom. */}
  <div className="font-head uppercase font-bold text-right text-[20px] text-white mt-auto">
    {review.name}
  </div>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bgstyle py-20  flex flex-col items-center px-5 md:px-[100px] bg-[#1A1E1E] ">
        <div className="max-w-[860px]">
          <h2 className="text-[40px] font-head font-bold text-[#CCCABB] uppercase text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-[24px] text-white mt-4 font-des">Have questions? We've got you covered. Check out our FAQ section to find all the details you need about memberships, class schedules, and what to expect at REVL.</p>

          <div className=" mt-8 ">
            {[
              {
                q: "Is REVL suitable for all fitness levels?",
                a: "REVL Training allows you to experience the kind of targeted and high-performance training that was once reserved exclusively for professional athletes. REVL is the perfect combination of strength and conditioning, ideal for anyone looking to take their training to the next level."
              },
              {
                q: "What styles of training are on offer?",
                a: "REVL has strength-based sessions on Mondays, Wednesdays, and Fridays (Move/Perform), and cardio-based sessions on Tuesdays, Thursdays, and Saturdays (Sweat). Attending 3-5 sessions per week is recommended for maximum results."
              },
              {
                q: "What's the difference between Move & Perform?",
                a: "The fundamental goal of Perform is strength progression using progressive overload (lower reps, more rest). Move combines strength and conditioning movements through isolated total, upper, and lower body sessions to target each muscle group. Get leaner, stronger and fitter."
              }
            ].map((faq, i) => (
              <div key={i} className="border-t border-white bg-transparent">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-[15px] text-left"
                >
                  <span className="font-head font-bold text-white leading-normal text-[24px] pr-8">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-white text-[20px] font-des p-[15px]">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
          <button 
            onClick={handleOpenModal}
            className="stylebutton max-w-[450px] my-[30px]"
          >
            <div className="text-[24px] font-head font-extrabold">
            CLAIM YOUR OFFER
            </div>
            <div className="text-[14px] font-text font-semibold text-[#1A1E1E]">IT WON’T LAST LONG</div>
    
          </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-900 text-center flex flex-row md:text-left">
        <div className=" mx-auto px-4 py-[100px] flex flex-col justify-between items-center gap-6">
        <div className="flex z-50 w-full justify-center">
            <img src={logo} alt="REVL Training" className=" max-w-[350px]" />
          </div>          <div className="text-(--color-m0fg1ruf) font-roboto text-[16px] flex flex-row gap-4 md:gap-8 items-center">
            <span>© 2025 REVL Singapore | All Rights Reserved |{" "}
            <a href="#" className="hover:text-white transition-colors font-roboto text-[16px]">Terms & Conditions</a>{" "}|{" "}
            <a href="#" className="hover:text-white transition-colors font-roboto text-[16px]">Privacy Policy</a>
            </span>
          </div>
  
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
 {/*      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 md:hidden z-40">
        <button onClick={handleOpenModal} className="w-full bg-red-600 text-white py-3 font-poppins font-bold uppercase tracking-widest text-lg shadow-lg">
          Secure Offer - $140
        </button>
      </div> */}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 ">
            <div className="absolute  inset-0 bg-black/80 backdrop-blur-sm" onClick={handleCloseModal}></div>
            <div className="relative max-h-[90vh] overflow-y-auto bg-white text-black p-8 md:p-12 max-w-lg w-full shadow-2xl animate-in fade-in zoom-in duration-200 border-2  border-black">
                <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors">
                    <X size={24} />
                </button>
                
                <div>
                <div className="text-[24px] font-text text-center font-bold uppercase text-black mb-8 ">
            Level Up Your Fitness
          </div>

          <div className="flex z-50 w-full justify-center">
            <img src={blacklogo} alt="REVL Training" className="px-[100px]" />
          </div>
          
         {/*  <div className="bg-red-600 text-white px-4 py-1 font-poppins font-bold uppercase tracking-widest text-sm mb-6 animate-pulse">
            Limited Time Intro Offer
          </div> */}


          <div className="text-[56px] font-head text-center font-bold uppercase ">14 CLASSES for 
          {" "} 
           <em className='text-red-500'><s>$560</s></em> {" "} $140
           
           </div>

          <div className="text-[32px] font-head text-center font-bold uppercase  text-black ">
          That's 75% OFF
          </div>
                 </div> 

                 <iframe
    src="https://tiongbahru.revltraining.sg/widget/form/A1s3Do1BbFTSsPwITjZU"
    className="w-full h-full border-none"
    id="inline-A1s3Do1BbFTSsPwITjZU" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="sgrevltrainingpromo.com"
    data-height="1132"
    data-layout-iframe-id="inline-A1s3Do1BbFTSsPwITjZU"
    data-form-id="A1s3Do1BbFTSsPwITjZU"
    title="sgrevltrainingpromo.com"
        >
</iframe>
<script src="https://tiongbahru.revltraining.sg/js/form_embed.js"></script>

                
                <p className="mt-6 text-gray-500 text-xs font-roboto text-center">
                    By submitting this form, you agree to our privacy policy.
                </p>
            </div>
        </div>
      )}

    </div>
  );
};

export default App;