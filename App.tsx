
import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, Mic, Target, ChevronRight, ChevronLeft, 
  Award, Map, ShieldCheck, Zap, Home, 
  Menu, X, Trophy, User, Settings
} from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";

// Import Types
import { FlightPhase, PassportState } from './types.ts';

// Import Slides
import SlideGate from './slides/SlideGate.tsx';
import SlideBoarding from './slides/SlideBoarding.tsx';
import SlideDestination from './slides/SlideDestination.tsx';
import SlideObjectives from './slides/SlideObjectives.tsx';
import SlideCheckTools from './slides/SlideCheckTools.tsx';
import SlideConcepts from './slides/SlideConcepts.tsx';
import SlideBoardingPass from './slides/SlideBoardingPass.tsx';
import SlideTakeoff from './slides/SlideTakeoff.tsx';
import SlideFlying from './slides/SlideFlying.tsx';
import SlideTurbulence from './slides/SlideTurbulence.tsx';
import SlideLanding from './slides/SlideLanding.tsx';
import SlideFarewell from './slides/SlideFarewell.tsx';
import SlideHomework from './slides/SlideHomework.tsx';

// Import Scenes (used as transitions or backgrounds)
import Scene1 from './scenes/Scene1.tsx';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [passport, setPassport] = useState<PassportState>({ 
    stamps: [], 
    points: 0, 
    rank: 'مسافر مبتدئ' 
  });
  const [isVoiceLoading, setIsVoiceLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the slide sequence
  const slideSequence = [
    { id: 'INTRO', component: Scene1, phase: FlightPhase.GATE },
    { id: 'GATE', component: SlideGate, phase: FlightPhase.GATE },
    { id: 'BOARDING', component: SlideBoarding, phase: FlightPhase.GATE },
    { id: 'DESTINATION', component: SlideDestination, phase: FlightPhase.DESTINATION },
    { id: 'OBJECTIVES', component: SlideObjectives, phase: FlightPhase.OBJECTIVES },
    { id: 'CHECK_TOOLS', component: SlideCheckTools, phase: FlightPhase.CHECK_TOOLS },
    { id: 'BOARDING_PASS', component: SlideBoardingPass, phase: FlightPhase.GATE },
    { id: 'TAKEOFF', component: SlideTakeoff, phase: FlightPhase.GATE },
    { id: 'CONCEPTS', component: SlideConcepts, phase: FlightPhase.CONCEPTS },
    { id: 'FLYING', component: SlideFlying, phase: FlightPhase.CONCEPTS },
    { id: 'TURBULENCE', component: SlideTurbulence, phase: FlightPhase.CONCEPTS },
    { id: 'LANDING', component: SlideLanding, phase: FlightPhase.LANDING },
    { id: 'HOMEWORK', component: SlideHomework, phase: FlightPhase.FAREWELL },
    { id: 'FAREWELL', component: SlideFarewell, phase: FlightPhase.FAREWELL },
  ];

  const nextSlide = () => {
    if (currentSlideIndex < slideSequence.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const updatePassport = (pointsToAdd: number) => {
    setPassport(prev => {
      const newPoints = prev.points + pointsToAdd;
      let newRank = prev.rank;
      if (newPoints >= 100) newRank = 'خبير طيران';
      else if (newPoints >= 50) newRank = 'مساعد طيار';
      
      return {
        ...prev,
        points: newPoints,
        rank: newRank
      };
    });
  };

  const playVoice = async (text: string) => {
    setIsVoiceLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text }] }],
        config: { 
          responseModalities: [Modality.AUDIO], 
          speechConfig: { 
            voiceConfig: { 
              prebuiltVoiceConfig: { voiceName: 'Kore' } 
            } 
          } 
        },
      });
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const arrayBuffer = Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0)).buffer;
        const dataInt16 = new Int16Array(arrayBuffer);
        const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
        const channelData = buffer.getChannelData(0);
        for (let i = 0; i < dataInt16.length; i++) {
          channelData[i] = dataInt16[i] / 32768.0;
        }
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start();
      }
    } catch (e) {
      console.error("TTS Error:", e);
      // Fallback or silent fail
    } finally {
      setIsVoiceLoading(false);
    }
  };

  const renderCurrentSlide = () => {
    const slide = slideSequence[currentSlideIndex];
    const SlideComponent = slide.component;

    // Pass specific props based on slide type
    const commonProps = { onNext: nextSlide };
    
    if (slide.id === 'GATE') {
      return <SlideGate onNext={nextSlide} onPlayVoice={() => playVoice("أهلاً بكم في رحلة الأسس، يرجى ربط الأحزمة")} isVoiceLoading={isVoiceLoading} />;
    }
    
    if (slide.id === 'BOARDING_PASS') {
      return <SlideBoardingPass onComplete={(p) => { updatePassport(p); nextSlide(); }} />;
    }

    // Default render for most slides
    return <SlideComponent {...commonProps} />;
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Header / HUD */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-12 bg-slate-900/40 p-6 rounded-[2.5rem] border border-white/5 backdrop-blur-2xl z-50 shadow-2xl">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:flex items-center gap-4 bg-black/20 px-6 py-3 rounded-2xl border border-white/5">
             <div className="text-right">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Flight Status</p>
                <p className="text-sm font-bold text-orange-400">{slideSequence[currentSlideIndex].phase}</p>
             </div>
             <div className="w-px h-8 bg-white/10"></div>
             <Plane className="text-orange-500 animate-bounce" size={20} />
          </div>
        </div>

        <div className="flex items-center gap-8">
           <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                 <span className="text-xs font-black text-slate-400 uppercase">Passport</span>
                 <Trophy size={14} className="text-yellow-500" />
              </div>
              <p className="text-lg font-black text-white">{passport.rank}</p>
              <div className="w-32 h-1.5 bg-white/10 rounded-full mt-1 overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${Math.min(passport.points, 100)}%` }}
                   className="h-full bg-gradient-to-r from-orange-500 to-yellow-500"
                 />
              </div>
           </div>
           
           <div className="flex gap-2">
              <button 
                onClick={prevSlide} 
                disabled={currentSlideIndex === 0}
                className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 disabled:opacity-20 transition-all border border-white/10"
              >
                <ChevronRight size={24} />
              </button>
              <button 
                onClick={nextSlide} 
                disabled={currentSlideIndex === slideSequence.length - 1}
                className="p-4 bg-orange-600 rounded-2xl hover:bg-orange-500 disabled:opacity-20 transition-all shadow-lg shadow-orange-600/20"
              >
                <ChevronLeft size={24} />
              </button>
           </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center w-full max-w-7xl z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlideIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 1.05 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="w-full flex justify-center"
          >
            <Suspense fallback={<div className="text-white text-2xl font-black animate-pulse">جاري التحميل...</div>}>
              {renderCurrentSlide()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Progress */}
      <footer className="mt-12 w-full max-w-4xl flex flex-col items-center gap-4 z-10">
        <div className="flex gap-2">
          {slideSequence.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlideIndex ? 'w-12 bg-orange-500' : 'w-3 bg-white/10'}`}
            />
          ))}
        </div>
        <p className="text-slate-600 text-[10px] font-black tracking-[0.4em] uppercase">
          Grade 8 • Mathematics Aviation Series • Flight G1-17
        </p>
      </footer>

      {/* Side Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-slate-900 border-l border-white/10 z-[70] p-8 flex flex-col gap-8 shadow-2xl"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-black text-white">قائمة الرحلة</h3>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/5 rounded-xl"><X /></button>
              </div>

              <div className="space-y-2">
                {slideSequence.map((slide, idx) => (
                  <button 
                    key={slide.id}
                    onClick={() => { setCurrentSlideIndex(idx); setIsMenuOpen(false); }}
                    className={`w-full text-right p-4 rounded-2xl font-bold transition-all flex items-center justify-between group ${idx === currentSlideIndex ? 'bg-orange-600 text-white' : 'hover:bg-white/5 text-slate-400'}`}
                  >
                    <span className="text-xs opacity-40 font-mono">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{slide.id}</span>
                  </button>
                ))}
              </div>

              <div className="mt-auto p-6 bg-white/5 rounded-[2rem] border border-white/5">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="bg-orange-600 p-3 rounded-xl"><User size={20} /></div>
                    <div className="text-right">
                       <p className="text-xs text-slate-500 font-black uppercase">Pilot</p>
                       <p className="font-bold text-white">أنت (المتعلم)</p>
                    </div>
                 </div>
                 <div className="flex justify-between text-xs font-black text-slate-500 uppercase">
                    <span>Rank</span>
                    <span className="text-orange-500">{passport.rank}</span>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

