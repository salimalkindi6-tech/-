
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ArrowDown, HelpCircle } from 'lucide-react';

const SlideTurbulence: React.FC<{ onCorrect: () => void }> = ({ onCorrect }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) onCorrect();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12 text-center relative overflow-hidden">
      {/* Turbulence Background Animation */}
      <motion.div 
        animate={{ 
          x: [0, -5, 5, -2, 2, 0],
          y: [0, 5, -5, 2, -2, 0]
        }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="absolute inset-0 bg-red-900/5 -z-10"
      />

      <div className="bg-red-600 text-white px-8 py-4 rounded-3xl flex items-center gap-4 shadow-2xl animate-pulse">
        <AlertTriangle className="w-10 h-10" />
        <h2 className="text-4xl font-black">تحذير: مطبات هوائية (الأس السالب)</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-16 perspective-1000">
        <div className="text-right max-w-sm">
          <h3 className="text-3xl font-black mb-4 text-orange-500 italic">ماذا يحدث إذا كان الأس سالبًا؟</h3>
          <p className="text-xl text-slate-400 font-bold">عندما نرى علامة السالب، فهذا يعني أننا بحاجة إلى "قلب" الكسر لنحصل على القيمة الموجبة!</p>
        </div>

        {/* The Card Flip Interaction */}
        <motion.div 
          onClick={toggleFlip}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-80 h-96 relative cursor-pointer group preserve-3d"
        >
          {/* Front: Negative Exponent */}
          <div className="absolute inset-0 backface-hidden bg-slate-800 border-4 border-red-500 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center gap-6">
             <div className="text-9xl font-black">٢<span className="text-4xl align-top text-red-500">-٣</span></div>
             <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-xs font-black animate-bounce">اضغط للقلب! 🔄</div>
          </div>

          {/* Back: Fraction Form */}
          <div className="absolute inset-0 backface-hidden bg-green-900 border-4 border-green-500 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center gap-4 rotate-y-180">
             <div className="flex flex-col items-center">
                <div className="text-6xl font-black border-b-4 border-white px-8 pb-2">١</div>
                <div className="text-6xl font-black pt-2">٢<span className="text-3xl align-top text-green-400">٣</span></div>
             </div>
             <div className="text-4xl font-black text-white mt-4">= ١ / ٨</div>
             <div className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-black">هبوط آمن! ✅</div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
           <button 
            onClick={() => setShowExplanation(!showExplanation)}
            className="bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 p-6 rounded-2xl flex items-center gap-4 transition-all"
           >
              <HelpCircle className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-black">لماذا نقلب الكسر؟</span>
           </button>
           
           <AnimatePresence>
             {showExplanation && (
               <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-slate-700 p-6 rounded-2xl text-right max-w-xs shadow-xl border border-slate-600"
               >
                 <p className="text-slate-200 font-bold leading-relaxed">
                   الأس السالب يمثل "مقلوب" القوة الموجبة. إنه طريقة رياضية لتمويل الضرب المتكرر إلى قسمة متكررة.
                 </p>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4 text-slate-500 italic">
        🔔 "يرجى ربط أحزمة الأمان، نحن نمر بمنطقة قوى سالبة!"
      </div>
    </div>
  );
};

export default SlideTurbulence;
