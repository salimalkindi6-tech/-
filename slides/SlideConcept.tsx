
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Info, ArrowRight, ClipboardCheck, ArrowDownCircle } from 'lucide-react';

const SlideConcept: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [activeTab, setActiveTab] = useState<'positive' | 'negative'>('positive');

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-8 h-full justify-center">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-4 bg-orange-600/10 border border-orange-500/50 px-8 py-4 rounded-full shadow-lg">
          <ClipboardCheck className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-black text-orange-400">تخليص إجراءات السفر: التعلم القبلي</h2>
        </div>
        <p className="text-slate-400 font-bold mt-2">تأكد من معرفتك للأساسيات قبل ختم جوازك والمغادرة</p>
      </div>

      <div className="w-full flex gap-4 justify-center mb-4">
        <button 
          onClick={() => setActiveTab('positive')}
          className={`px-8 py-3 rounded-2xl font-black transition-all border-2 ${activeTab === 'positive' ? 'bg-orange-600 border-orange-500 shadow-lg' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
        >
          مفهوم الأسس (الأساس والقوة)
        </button>
        <button 
          onClick={() => setActiveTab('negative')}
          className={`px-8 py-3 rounded-2xl font-black transition-all border-2 ${activeTab === 'negative' ? 'bg-red-600 border-red-500 shadow-lg' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
        >
          حالة القوى السالبة
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'positive' ? (
          <motion.div 
            key="positive"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Concept Block */}
            <motion.div 
              className="bg-slate-800 p-10 rounded-[3rem] border-4 border-slate-700 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <span className="text-9xl font-black text-white">٣</span>
              </div>
              
              <h3 className="text-2xl font-black mb-8 text-orange-500">تحليل القوة</h3>
              <div className="flex flex-col items-center gap-8">
                <div className="text-9xl font-black text-white relative">
                  ٣
                  <span className="text-4xl align-top text-orange-500 absolute -right-8 top-0">٤</span>
                  {/* Floating labels */}
                  <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 50, opacity: 1 }} className="absolute left-full top-0 text-slate-400 text-sm font-bold whitespace-nowrap">
                    ← يُسمى (الأس)
                  </motion.div>
                  <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 50, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute left-full bottom-0 text-slate-400 text-sm font-bold whitespace-nowrap">
                    ← يُسمى (الأساس)
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Calculation Block */}
            <motion.div 
              className="bg-slate-900 p-10 rounded-[3rem] border-4 border-slate-800 shadow-inner flex flex-col justify-center gap-8"
            >
              <div className="text-right">
                <h3 className="text-2xl font-black text-white mb-2">كيف نحسبها؟</h3>
                <p className="text-slate-400 font-bold leading-relaxed">
                  العدد <span className="text-white">٣٤</span> يعني ضرب الرقم <span className="text-orange-500">٣</span> في نفسه <span className="text-orange-500">أربع مرات</span>.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6 bg-black/30 p-8 rounded-3xl border border-white/5">
                <div className="text-4xl font-black text-orange-500 dir-ltr tracking-[0.2em]">
                  ٣ × ٣ × ٣ × ٣ = ٨١
                </div>
              </div>

              <div className="space-y-3">
                 <div className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Info className="w-4 h-4 text-orange-500" />
                    <span>الأساس: هو الرقم المتكرر</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Info className="w-4 h-4 text-orange-500" />
                    <span>الأس: هو عدد مرات تكرار الضرب</span>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="negative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-4xl bg-red-950/20 p-12 rounded-[3rem] border-4 border-red-900/50 flex flex-col items-center gap-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
            
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-black text-red-500">قاعدة القوى السالبة</h3>
              <p className="text-xl text-slate-300 font-bold max-w-2xl mx-auto leading-relaxed">
                يتم تغيير موقع الأس السالب حتى يصبح موجباً وذلك بتغيير مكان الأساس والأس من البسط إلى المقام (أو العكس).
              </p>
            </div>

            <div className="flex items-center gap-12 bg-black/40 p-12 rounded-[2rem] border-2 border-red-500/20">
               <div className="text-7xl font-black text-white relative">
                 ٦<span className="text-3xl align-top text-red-500">-٢</span>
               </div>
               
               <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                 <ArrowRight className="w-12 h-12 text-slate-600" />
               </motion.div>

               <div className="flex flex-col items-center">
                  <div className="text-5xl font-black border-b-4 border-white px-8 pb-3">١</div>
                  <div className="text-5xl font-black pt-3">٦<span className="text-3xl align-top text-green-500">٢</span></div>
               </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
               <p className="text-slate-400 font-bold italic">"تم التحويل من البسط إلى المقام وتغيير إشارة الأس!"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
        className="mt-4 bg-green-600 hover:bg-green-500 text-white px-12 py-4 rounded-2xl font-black text-xl transition-all shadow-xl shadow-green-900/20 flex items-center gap-3"
      >
        <span>إتمام إجراءات الدخول</span>
        <ArrowDownCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default SlideConcept;
