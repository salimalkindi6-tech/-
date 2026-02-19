
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, UserCheck, Star, Sparkles, ChevronLeft } from 'lucide-react';

const SlideBoardingPass: React.FC<{ onComplete: (p: number) => void }> = ({ onComplete }) => {
  const [solved, setSolved] = useState(false);

  return (
    <div className="w-full max-w-5xl">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-black text-white flex items-center justify-center gap-4">
           بطاقة صعود الطائرة 🎫
        </h2>
        <p className="text-orange-500 font-bold italic text-xl mt-2">تنبيه: على كل راكب حل هذه المسألة للترقية إلى "مساعد طيار"</p>
      </div>

      <motion.div 
        initial={{ rotateY: -20, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        className="bg-white text-slate-900 rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)] flex flex-col md:flex-row relative border-8 border-slate-100"
      >
        <div className="flex-[2] p-12 border-r-4 border-dashed border-slate-100">
           <div className="flex justify-between items-start mb-10">
              <div className="flex items-center gap-4">
                 <div className="bg-orange-600 p-4 rounded-2xl text-white">
                    <Star size={32} />
                 </div>
                 <div className="text-right">
                    <p className="text-xs font-black text-slate-400 uppercase">Mission Level / مستوى المهمة</p>
                    <h3 className="text-2xl font-black">تحدي الطاقم الجماعي</h3>
                 </div>
              </div>
              <div className="text-left">
                 <h3 className="text-4xl font-black text-orange-600">G1-17</h3>
              </div>
           </div>

           <div className="bg-slate-50 p-10 rounded-[2.5rem] border-2 border-slate-200 mb-8 text-right">
              <h4 className="text-3xl font-black mb-6">المسألة:</h4>
              <p className="text-5xl font-black text-slate-800 dir-ltr mb-4">٢^٣ + ٢^٠ = ؟</p>
              <p className="text-slate-500 font-bold">احسب قيمة التعبير الرياضي أعلاه مع طاقمك.</p>
           </div>

           <div className="flex justify-between items-center">
              {!solved ? (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSolved(true)}
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl flex items-center gap-3"
                >
                   <span>عرض الحل والترقية</span>
                   <ChevronLeft />
                </motion.button>
              ) : (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3">
                   <UserCheck /> تم الحل بنجاح: ٨ + ١ = ٩
                </motion.div>
              )}
           </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-orange-500 to-orange-600 p-12 flex flex-col justify-between items-center text-center text-white">
           <div>
              <div className="bg-white p-4 rounded-3xl shadow-xl inline-block mb-6">
                 <QrCode size={100} className="text-slate-900" />
              </div>
              <h4 className="text-3xl font-black mb-1">ترقية فورية</h4>
              <p className="text-orange-100 font-bold opacity-80">CO-PILOT STATUS</p>
           </div>

           {solved && (
             <motion.div 
               initial={{ y: 20, opacity: 0 }} 
               animate={{ y: 0, opacity: 1 }} 
               onClick={() => onComplete(50)}
               className="cursor-pointer bg-white text-orange-600 px-8 py-4 rounded-2xl font-black text-lg shadow-2xl flex items-center gap-2 group"
             >
                <Sparkles className="group-hover:animate-spin" /> استلام الرتبة
             </motion.div>
           )}
        </div>
      </motion.div>
    </div>
  );
};

export default SlideBoardingPass;
