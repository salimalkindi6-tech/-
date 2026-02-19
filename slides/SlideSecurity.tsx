
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Luggage, Search, ArrowRight, CheckCircle2 } from 'lucide-react';

const SlideSecurity: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
      if (step === 1) onComplete();
    }
  };

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-12">
      <div className="flex items-center gap-4 bg-orange-600/10 border border-orange-500/50 px-6 py-3 rounded-full">
        <ShieldCheck className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-black text-orange-400">تفتيش المفاهيم: ما هو الأس؟</h2>
      </div>

      <div className="w-full h-80 bg-slate-800 rounded-3xl border-4 border-slate-700 relative flex items-center justify-center overflow-hidden">
        {/* Conveyor Belt Background */}
        <div className="absolute inset-0 opacity-10 flex flex-col justify-around pointer-events-none">
          {[...Array(5)].map((_, i) => (
             <div key={i} className="h-2 w-full bg-slate-400 animate-[move_5s_linear_infinite]"></div>
          ))}
        </div>

        {/* The Scanning Machine */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-full bg-slate-700 border-x-8 border-slate-600 z-10 flex flex-col items-center justify-center">
            <div className="w-full h-1 bg-cyan-400 shadow-[0_0_15px_cyan] animate-pulse"></div>
            <div className="text-[10px] font-bold text-cyan-400 mt-2">SCANNING...</div>
        </div>

        {/* Content Animation */}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="s1"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              className="flex items-center gap-8 relative z-20"
            >
              <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl border-4 border-orange-500">
                <span className="text-9xl font-black leading-none">٣</span>
                <span className="text-4xl font-bold align-top text-orange-600 ml-2">٤</span>
              </div>
              <ArrowRight className="w-12 h-12 text-slate-500" />
              <div className="text-right">
                <h3 className="text-3xl font-black mb-2">الصورة الأسية</h3>
                <p className="text-slate-400 font-bold">عدد صغير (الأس) فوق عدد كبير (الأساس)</p>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div 
              key="s2"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              className="flex items-center gap-8 relative z-20"
            >
              <div className="bg-orange-600 text-white p-8 rounded-2xl shadow-2xl">
                <span className="text-5xl font-black">٣ × ٣ × ٣ × ٣</span>
              </div>
              <ArrowRight className="w-12 h-12 text-slate-500" />
              <div className="text-right">
                <h3 className="text-3xl font-black mb-2">الصورة التحليلية</h3>
                <p className="text-slate-400 font-bold">تكرار ضرب الأساس بمقدار عدد الأس</p>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="s3"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="grid grid-cols-3 gap-8 relative z-20"
            >
               <div className="bg-slate-900 p-6 rounded-3xl border-2 border-slate-700 text-center">
                  <div className="text-5xl font-black text-white mb-2">٣</div>
                  <div className="text-orange-500 font-bold uppercase">الأساس</div>
                  <div className="text-xs text-slate-500 mt-2 italic">العدد المتكرر</div>
               </div>
               <div className="bg-slate-900 p-6 rounded-3xl border-2 border-slate-700 text-center">
                  <div className="text-5xl font-black text-white mb-2">٤</div>
                  <div className="text-orange-500 font-bold uppercase">الأس</div>
                  <div className="text-xs text-slate-500 mt-2 italic">عدد مرات التكرار</div>
               </div>
               <div className="bg-slate-900 p-6 rounded-3xl border-2 border-slate-700 text-center">
                  <div className="text-5xl font-black text-white mb-2">٨١</div>
                  <div className="text-orange-500 font-bold uppercase">الناتج</div>
                  <div className="text-xs text-slate-500 mt-2 italic">قوة العدد</div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button 
        onClick={handleNext}
        disabled={step === 2}
        className={`px-12 py-4 rounded-full font-black text-xl transition-all shadow-xl flex items-center gap-3 ${step === 2 ? 'bg-green-600 cursor-default' : 'bg-orange-600 hover:bg-orange-500 animate-bounce'}`}
      >
        {step === 2 ? (
          <>تم الفحص بنجاح <CheckCircle2 /></>
        ) : (
          <>اضغط لفحص المفهوم <Search /></>
        )}
      </button>
    </div>
  );
};

export default SlideSecurity;
