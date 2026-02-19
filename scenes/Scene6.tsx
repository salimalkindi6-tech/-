
import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Zap } from 'lucide-react';

const Scene6: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12 max-w-6xl w-full">
      <div className="flex justify-center items-center">
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="relative"
        >
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
          <Microscope className="w-64 h-64 text-indigo-400 relative z-10" />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-right"
      >
        <h2 className="text-6xl font-black text-white mb-8">في العلوم 🔬</h2>
        <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/10">
          <p className="text-2xl font-bold text-indigo-400 mb-6">الصيغة العلمية</p>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            نستخدم الأسس للتعبير عن العظمة المطلقة في الفضاء <br/> أو الصغر المتناهي في الذرات.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-black/40 p-5 rounded-2xl border border-indigo-500/20">
               <span className="text-3xl font-black text-white dir-ltr">10⁶</span>
               <span className="font-bold">أعداد ضخمة جداً (مليون)</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 p-5 rounded-2xl border border-pink-500/20">
               <span className="text-3xl font-black text-white dir-ltr">10⁻³</span>
               <span className="font-bold">أعداد مجهرية دقيقة</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Scene6;
