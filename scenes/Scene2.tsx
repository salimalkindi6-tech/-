
import React from 'react';
import { motion } from 'framer-motion';

const Scene2: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 max-w-4xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-4 uppercase tracking-[0.3em]">مفهوم الأسس</h2>
        <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <motion.div 
            initial={{ scale: 0.5 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-9xl font-black text-white mb-8 dir-ltr"
          >
            2<span className="text-5xl align-top text-purple-500 ml-1">3</span>
          </motion.div>

          <div className="text-4xl font-bold text-slate-400 dir-ltr mb-12">
            = 2 × 2 × 2
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-4 text-right"
          >
            <p className="text-2xl font-bold text-white flex items-center justify-end gap-3">
              الأس هو طريقة مختصرة للضرب المتكرر <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            </p>
            <p className="text-xl text-slate-400 font-medium">
              يساعدنا على تبسيط العمليات الحسابية الكبيرة جداً.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Scene2;
