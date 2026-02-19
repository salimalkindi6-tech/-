
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const Scene4: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 max-w-5xl w-full">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-6xl font-black text-white">في الاقتصاد 💰</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] text-right flex flex-col justify-center">
          <p className="text-2xl font-bold text-green-400 mb-6">النمو الأسي هو سر الأرباح</p>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            الفائدة المركبة تعتمد على القوة الأسية. كلما زاد الوقت، تضاعف المال بسرعة خيالية.
          </p>
          
          <div className="flex items-center gap-4 justify-end text-3xl font-black text-white">
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ delay: 0.5 }}>100</motion.span>
            <span className="text-green-500">→</span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ delay: 1 }}>200</motion.span>
            <span className="text-green-500">→</span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ delay: 1.5 }}>400</motion.span>
            <span className="text-green-500">→</span>
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ delay: 2 }} className="text-green-500">800</motion.span>
          </div>
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden flex items-end justify-center min-h-[300px]">
          <motion.div 
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 4, ease: "easeIn" }}
            className="w-full bg-gradient-to-t from-green-500/40 to-green-500 rounded-t-3xl relative"
          >
            <TrendingUp className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Scene4;
