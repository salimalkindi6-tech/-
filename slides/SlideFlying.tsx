
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Wind, ArrowLeftRight } from 'lucide-react';

const SlideFlying: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col items-center py-12">
      {/* Animated Clouds Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ x: [1500, -1500] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-20 text-slate-800">
           <Cloud size={100} />
        </motion.div>
        <motion.div animate={{ x: [1200, -1200] }} transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }} className="absolute bottom-40 text-slate-800">
           <Cloud size={140} />
        </motion.div>
      </div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-6xl font-black mb-4 flex items-center justify-center gap-6">
          <Wind className="w-12 h-12 text-cyan-400" />
          التحليق في سماء الصيغ
        </h2>
        <p className="text-2xl text-slate-400 font-bold">تعلم كيفية التحويل بين الصورة القياسية والأسية</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Type A */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-white/5 backdrop-blur-xl border-2 border-slate-700 p-10 rounded-[3rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-9xl font-black">١</span>
          </div>
          <h3 className="text-orange-500 font-black text-2xl mb-8 uppercase tracking-widest border-b border-slate-800 pb-4">تحويل الضرب إلى أس</h3>
          
          <div className="space-y-12">
            <div className="flex flex-col items-center gap-4">
              <div className="text-4xl font-bold text-slate-400">٤ × ٤ × ٤ × ٤</div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-6xl font-black text-white">٤<span className="text-3xl align-top text-orange-500">٤</span></motion.div>
            </div>
            <div className="p-4 bg-orange-600/10 rounded-2xl text-orange-400 font-bold border border-orange-500/20">
               القاعدة: نكتب العدد المتكرر كأساس، وعدد مرات التكرار كأسّ.
            </div>
          </div>
        </motion.div>

        {/* Type B */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-white/5 backdrop-blur-xl border-2 border-slate-700 p-10 rounded-[3rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-9xl font-black">٢</span>
          </div>
          <h3 className="text-cyan-400 font-black text-2xl mb-8 uppercase tracking-widest border-b border-slate-800 pb-4">تحويل الأس إلى ضرب</h3>
          
          <div className="space-y-12">
            <div className="flex flex-col items-center gap-4">
              <div className="text-6xl font-black text-white">٦<span className="text-3xl align-top text-cyan-400">٢</span></div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="text-4xl font-bold text-slate-400">٦ × ٦</motion.div>
            </div>
            <div className="p-4 bg-cyan-600/10 rounded-2xl text-cyan-400 font-bold border border-cyan-500/20">
               القاعدة: نفكك القوة إلى عملية ضرب متكرر للأساس.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 bg-slate-800/80 px-8 py-4 rounded-full border border-slate-700 flex items-center gap-4 text-xl font-bold">
        <ArrowLeftRight className="w-8 h-8 text-orange-500" />
        العمليتان متعاكستان تمامًا مثل الإقلاع والهبوط!
      </div>
    </div>
  );
};

export default SlideFlying;
