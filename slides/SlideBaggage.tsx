
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Backpack, Luggage, Star, ArrowLeft } from 'lucide-react';

const SlideBaggage: React.FC = () => {
  const [openBags, setOpenBags] = useState<number[]>([]);

  const bags = [
    { 
      title: "مهمة (١): التقويم التكويني", 
      q: "اكتب كل عدد على شكل كسر: (أ) ٣-٥ ، (ب) ٥-٢ ، (ج) ٥-٣", 
      a: "(أ) ١/٢٤٣ ، (ب) ١/٢٥ ، (ج) ١/١٢٥" 
    },
    { 
      title: "مهمة (٢): التقويم التكويني (٢)", 
      q: "اكتب ٧ × ٧ × ٧ × ٧ على شكل كسر أو عدد صحيح: ٧^٤ ÷ ٧^٤", 
      a: "٧^٠ = ١ (قاعدة القوة الصفرية)" 
    },
    { 
      title: "النشاط الإثرائي: تحدي القمة", 
      q: "أوجد ناتج ما يلي: ٣^٣ + ٣^٢ + ٣^١ + ٣^٠", 
      a: "٢٧ + ٩ + ٣ + ١ = ٤٠" 
    }
  ];

  const toggleBag = (idx: number) => {
    if (openBags.includes(idx)) {
      setOpenBags(openBags.filter(i => i !== idx));
    } else {
      setOpenBags([...openBags, idx]);
    }
  };

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black mb-4 flex items-center justify-center gap-4 text-white">
           <Backpack className="w-12 h-12 text-orange-500" />
           استلام الحقائب: الأنشطة التدريبية
        </h2>
        <p className="text-xl text-slate-400 font-bold">تمارين مختارة من كتاب الطالب ص ٢٢ و ٢٣ وفقاً لتحضير الدرس</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {bags.map((bag, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`cursor-pointer transition-all duration-500 flex flex-col items-center group`}
            onClick={() => toggleBag(i)}
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: openBags.includes(i) ? -8 : 0, scale: openBags.includes(i) ? 1.05 : 1 }}
                className={`w-64 h-52 bg-slate-800 rounded-[2.5rem] border-b-[12px] border-slate-900 shadow-2xl relative flex flex-col items-center justify-center border-4 transition-colors ${openBags.includes(i) ? 'border-orange-500 bg-slate-700' : 'border-slate-700 group-hover:border-slate-500'}`}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-10 bg-slate-700 rounded-t-2xl border-x-4 border-t-4 border-slate-600"></div>
                <Luggage className={`w-20 h-20 transition-colors ${openBags.includes(i) ? 'text-orange-500' : 'text-slate-600'}`} />
                <div className="absolute bottom-4 flex gap-1">
                   {[...Array(3)].map((_, j) => <Star key={j} size={12} className={j < (i+1) ? 'text-yellow-500 fill-yellow-500' : 'text-slate-800'} />)}
                </div>
              </motion.div>
            </div>

            <div className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-black shadow-xl border-x-[6px] border-orange-500 -mt-6 relative z-10 text-center text-sm">
               {bag.title}
            </div>

            <AnimatePresence>
              {openBags.includes(i) && (
                <motion.div 
                  initial={{ height: 0, opacity: 0, y: -20 }}
                  animate={{ height: 'auto', opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -20 }}
                  className="w-full bg-slate-900/80 backdrop-blur-md border-2 border-orange-500/30 rounded-[2rem] p-8 text-center mt-6 shadow-2xl"
                >
                  <p className="text-slate-500 text-xs font-bold mb-3 uppercase tracking-widest">المحتوى التعليمي</p>
                  <p className="text-xl font-black text-white mb-8 leading-relaxed text-right border-r-4 border-orange-500 pr-4">{bag.q}</p>
                  
                  <div className="bg-orange-600 text-white p-6 rounded-2xl shadow-inner relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:rotate-12 transition-transform">
                       <Star size={48} />
                    </div>
                    <p className="text-orange-200 text-xs font-bold mb-2 text-right">الإجابة النموذجية:</p>
                    <p className="text-2xl font-black tracking-wide">{bag.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3 text-slate-500 text-sm font-bold bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
         <ArrowLeft className="w-4 h-4 animate-bounce" />
         <span>اضغط على الحقائب لفتحها وحل التمارين</span>
      </div>
    </div>
  );
};

export default SlideBaggage;
