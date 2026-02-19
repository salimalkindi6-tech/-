
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Mic, Lock } from 'lucide-react';

const SlideGate: React.FC<{ 
  onNext: () => void; 
  onPlayVoice: () => void;
  isVoiceLoading: boolean;
}> = ({ onNext, onPlayVoice, isVoiceLoading }) => {
  const [gateClosed, setGateClosed] = useState(false);

  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-12 text-center">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-900/80 border-4 border-slate-700 rounded-[3rem] p-12 shadow-[0_0_60px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 to-orange-400"></div>
        
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-800">
          <div className="text-right">
            <h2 className="text-orange-500 text-5xl font-black mb-1">G1-17</h2>
            <p className="text-slate-500 font-bold text-xs">GATE / بوابـة الأسس</p>
          </div>
          <Plane className="w-16 h-16 text-orange-500 animate-pulse" />
          <div className="text-left">
            <h2 className="text-slate-200 text-5xl font-black mb-1">GRADE 8</h2>
            <p className="text-slate-500 font-bold text-xs">READY FOR BOARDING</p>
          </div>
        </div>

        <div className="space-y-8">
          <h1 className="text-6xl font-black text-white leading-tight">
            تم إغلاق بوابة الأسس! 🔐
          </h1>
          <p className="text-xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed">
            جميع الركاب الذين أتقنوا القوانين سيحصلون على ختم خبير القوى. 
            استمع الآن لرسالة الكابتن لبدء الرحلة.
          </p>

          <div className="flex flex-col items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, rotate: gateClosed ? 0 : -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setGateClosed(true);
                onPlayVoice();
              }}
              className={`px-12 py-6 rounded-[2rem] text-3xl font-black transition-all shadow-2xl flex items-center gap-4 mx-auto ${gateClosed ? 'bg-slate-800 text-slate-400 border border-slate-700' : 'bg-orange-600 hover:bg-orange-500 text-white'}`}
            >
              {isVoiceLoading ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>جاري الاتصال بالكابتن...</span>
                </div>
              ) : (
                <>
                  <span>{gateClosed ? 'تم الاستماع للنداء' : 'نداء الكابتن الأخير'}</span>
                  <Mic className="w-10 h-10" />
                </>
              )}
            </motion.button>
            {gateClosed && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-green-500 font-black text-lg flex items-center gap-2"
              >
                <Lock className="w-5 h-5" /> البوابات مغلقة. استعد للإقلاع.
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
      
      <p className="text-slate-500 italic font-bold">
        🎧 "يرجى من جميع الركاب التوجه إلى مقاعدهم، الرحلة على وشك الانطلاق."
      </p>
    </div>
  );
};

export default SlideGate;
