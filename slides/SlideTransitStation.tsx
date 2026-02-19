
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Users, CheckCircle, ArrowRight } from 'lucide-react';

const SlideTransitStation: React.FC<{ onComplete: (p: number) => void }> = ({ onComplete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-10">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-white flex items-center justify-center gap-4">
           محطة التحليق (ترانزيت) 🔄
        </h2>
        <p className="text-cyan-400 font-bold text-xl max-w-3xl leading-relaxed">
          أيها الركاب، سنهبط مؤقتاً لإعادة ترتيب الطاقم. سيعمل كل "ثنائي" معاً لحل مسائل القوى.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="bg-slate-900 border-4 border-slate-800 p-10 rounded-[3rem] text-right flex flex-col justify-between h-[400px]">
           <div>
              <span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block">تحدي الثنائي</span>
              <h3 className="text-3xl font-black text-white mb-6">أوجد قيمة: ٣^-٢</h3>
              <p className="text-slate-500 font-bold italic">تذكروا قاعدة قلب الكسر لتحويل الأس إلى موجب.</p>
           </div>
           
           <button 
             onClick={() => setShowAnswer(true)}
             className="bg-cyan-600 hover:bg-cyan-500 text-white p-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-cyan-900/40"
           >
              تحقق من الإجابة الثنائية
           </button>
        </div>

        <div className="bg-slate-800/40 border-4 border-dashed border-slate-700 p-10 rounded-[3rem] flex items-center justify-center text-center relative overflow-hidden">
           {showAnswer ? (
             <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-6">
                <div className="bg-white text-slate-900 p-10 rounded-[2rem] shadow-2xl">
                   <div className="text-4xl font-black border-b-2 border-slate-200 pb-2">١</div>
                   <div className="text-4xl font-black pt-2">٣^٢</div>
                   <div className="text-5xl font-black text-cyan-600 mt-6">= ١ / ٩</div>
                </div>
                <button onClick={() => onComplete(30)} className="bg-green-600 text-white px-8 py-3 rounded-xl font-black flex items-center gap-2 mx-auto">
                   لقد أصبحتم طاقم ترانزيت محترف <CheckCircle />
                </button>
             </motion.div>
           ) : (
             <div className="flex flex-col items-center gap-4 text-slate-600">
                <Users size={80} className="opacity-20" />
                <p className="font-bold">اربطوا أحزمة التعاون واضبطوا أدواتكم...</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default SlideTransitStation;
