
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Users, CheckSquare, Target, ShieldAlert, Cpu } from 'lucide-react';

const challenges = [
  { id: 'أ', q: "٣-٥", steps: "١ / ٣ ٥", a: "١ / ٢٤٣", hint: "٣ × ٣ × ٣ × ٣ × ٣" },
  { id: 'ب', q: "٥-٢", steps: "١ / ٥ ٢", a: "١ / ٢٥", hint: "٥ × ٥" },
  { id: 'ج', q: "٥-٣", steps: "١ / ٥ ٣", a: "١ / ١٢٥", hint: "٥ × ٥ × ٥" },
  { id: 'د', q: "٥-٤", steps: "١ / ٥ ٤", a: "١ / ٦٢٥", hint: "٥ × ٥ × ٥ × ٥" }
];

const SlideImmigration: React.FC<{ onComplete: (p: number) => void }> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);

  const handleReveal = (idx: number) => {
    if (!revealed.includes(idx)) {
      setRevealed([...revealed, idx]);
    }
    if (revealed.length + 1 === challenges.length) {
       onComplete(50);
    }
  };

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-6 h-full justify-center">
      {/* Header Area */}
      <div className="w-full flex justify-between items-center bg-slate-900/80 p-6 rounded-[2.5rem] border-2 border-slate-700 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 animate-pulse"></div>
        <div className="flex items-center gap-5">
          <div className="bg-green-600 p-4 rounded-2xl shadow-[0_0_20px_rgba(22,163,74,0.4)]">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-black text-white">التقويم التكويني (نشاط جماعي)</h2>
            <p className="text-green-400 font-bold text-sm flex items-center gap-2">
               استراتيجية: فك تشفير الرادار <Radio className="w-4 h-4 animate-ping" />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-black/40 px-6 py-2 rounded-2xl border border-slate-700">
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Textbook Ref</span>
           <span className="text-lg font-bold text-white">ص ٢٢ / رقم (١-٢)</span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Radar Interface (Left Side) */}
        <div className="lg:col-span-4 bg-slate-950 rounded-[3rem] p-8 border-2 border-slate-800 relative overflow-hidden flex flex-col gap-6 shadow-inner">
           {/* Radar Sweep Effect */}
           <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square border-2 border-green-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 aspect-square border border-green-500/50 rounded-full"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent to-green-500 origin-left"
              ></motion.div>
           </div>
           
           <h3 className="text-slate-500 font-black text-center text-xs uppercase tracking-widest mb-2 relative z-10">إشارات مشفرة قادمة</h3>
           
           <div className="space-y-3 relative z-10">
             {challenges.map((ch, i) => (
               <motion.button
                 key={ch.id}
                 whileHover={{ scale: 1.02, x: -5 }}
                 onClick={() => setActiveTab(i)}
                 className={`w-full p-5 rounded-2xl border-2 flex items-center justify-between transition-all ${
                   activeTab === i 
                   ? 'bg-green-600/20 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]' 
                   : 'bg-slate-900/50 border-slate-800 hover:border-slate-600'
                 }`}
               >
                 <div className="flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl ${activeTab === i ? 'bg-green-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                     {ch.id}
                   </div>
                   <span className={`text-xl font-bold ${activeTab === i ? 'text-white' : 'text-slate-400'}`}>الكود: {ch.q}</span>
                 </div>
                 {revealed.includes(i) && <CheckSquare className="w-6 h-6 text-green-400" />}
               </motion.button>
             ))}
           </div>

           <div className="mt-auto p-4 bg-black/40 rounded-2xl border border-slate-800 text-center relative z-10">
              <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Crew Mission</p>
              <p className="text-xs text-green-500 font-black">تعاون مع مجموعتك لفك التشفير</p>
           </div>
        </div>

        {/* Decoding Screen (Right Side) */}
        <div className="lg:col-span-8 bg-white text-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col p-12">
           <div className="absolute top-0 left-0 w-full h-3 bg-slate-100 flex">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((revealed.length) / challenges.length) * 100}%` }}
                className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] transition-all duration-500"
              ></motion.div>
           </div>

           <div className="mb-8 text-right flex justify-between items-start">
              <div>
                <span className="text-green-600 font-black text-sm uppercase tracking-tighter mb-2 inline-block px-3 py-1 bg-green-50 rounded-lg border border-green-100">
                  Signal Decryption In Progress
                </span>
                <h3 className="text-4xl font-black leading-tight text-slate-800">اكتب العدد على شكل كسر اعتيادي:</h3>
              </div>
              <Cpu className="w-12 h-12 text-slate-200" />
           </div>

           <div className="flex-1 flex flex-col items-center justify-center gap-8 py-4">
              <motion.div 
                key={activeTab}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-[12rem] font-black tracking-tighter text-slate-900 leading-none relative drop-shadow-2xl"
              >
                {challenges[activeTab].q}
                <motion.div 
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-green-500 blur-[80px] -z-10 rounded-full"
                ></motion.div>
              </motion.div>

              <AnimatePresence mode="wait">
                {revealed.includes(activeTab) ? (
                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex flex-col items-center gap-6 w-full"
                  >
                     <div className="flex items-center gap-10 bg-slate-50 px-16 py-10 rounded-[3rem] border-4 border-green-500 shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
                        <div className="flex flex-col items-center">
                           <div className="text-6xl font-black border-b-4 border-slate-900 pb-2 px-8">١</div>
                           <div className="text-6xl font-black pt-2 px-8">{challenges[activeTab].steps.split('/')[1]}</div>
                        </div>
                        <span className="text-6xl font-black text-slate-300">=</span>
                        <div className="text-8xl font-black text-green-600 tracking-tighter">{challenges[activeTab].a}</div>
                     </div>
                     <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-green-600 font-black text-xl bg-green-50 px-8 py-3 rounded-full border border-green-200 flex items-center gap-3"
                     >
                        <Target className="w-6 h-6" /> تم استعادة الإحداثيات بنجاح
                     </motion.p>
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleReveal(activeTab)}
                    className="bg-slate-900 hover:bg-black text-white px-20 py-8 rounded-[2.5rem] text-3xl font-black shadow-2xl transition-all flex items-center gap-5 group"
                  >
                    <span>فك تشفير الإشارة</span>
                    <Radio className="w-10 h-10 text-green-400 group-hover:animate-pulse" />
                  </motion.button>
                )}
              </AnimatePresence>
           </div>

           <div className="mt-8 flex justify-between items-center border-t border-slate-100 pt-6">
              <div className="flex items-center gap-4 text-slate-500 font-bold bg-slate-50 px-5 py-2 rounded-xl border border-slate-100">
                 <ShieldAlert className="text-orange-500 w-6 h-6" />
                 <span>تلميح لفك الكود: {challenges[activeTab].hint}</span>
              </div>
              <div className="flex gap-3">
                 {challenges.map((_, i) => (
                   <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i === activeTab ? 'bg-green-500 w-12' : revealed.includes(i) ? 'bg-green-200 w-6' : 'bg-slate-100 w-3'}`} />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SlideImmigration;
