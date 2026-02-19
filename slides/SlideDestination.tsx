
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Plane, Target } from 'lucide-react';

const SlideDestination: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-12">
      <h2 className="text-4xl font-black text-white tracking-[0.3em] uppercase mb-4">كشف الوجهة / DESTINATION</h2>
      
      <div className="w-full h-[500px] bg-slate-900 rounded-[4rem] border-8 border-slate-800 relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.6)]">
        {/* Animated Grid Map */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <AnimatePresence>
          {!revealed ? (
            <motion.div 
              key="map"
              exit={{ opacity: 0, scale: 1.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center"
            >
              <div className="relative mb-12">
                 <motion.div 
                   animate={{ x: [0, 400], y: [0, -100] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                   className="absolute -top-10 -left-10 text-orange-500 opacity-30"
                 >
                    <Plane size={60} />
                 </motion.div>
                 <Map className="w-32 h-32 text-slate-700 animate-pulse" />
              </div>
              
              <h3 className="text-5xl font-black text-white mb-6">هل عرفتم إلى أين نحن مسافرون؟</h3>
              <p className="text-slate-500 text-xl font-bold mb-10">اضغط على زر الرادار لكشف الإحداثيات</p>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setRevealed(true)}
                className="bg-orange-600 text-white px-12 py-6 rounded-full text-3xl font-black shadow-[0_0_40px_rgba(234,88,12,0.4)] flex items-center gap-4"
              >
                <span>تشغيل الرادار</span>
                <Target size={32} />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              key="reveal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-orange-600/20 to-transparent"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10 }}
                className="bg-white p-20 rounded-[5rem] shadow-[0_0_120px_white] mb-12"
              >
                 <h1 className="text-[12rem] font-black text-slate-900 leading-none tracking-tighter">الأسس</h1>
              </motion.div>
              <h4 className="text-4xl font-black text-orange-400 italic">"قوة الأرقام في سماء الرياضيات"</h4>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideDestination;
