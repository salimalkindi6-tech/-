
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const Scene5: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Matrix-like Background */}
      <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 p-4 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.span 
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 5 }}
            className="text-xs font-mono text-blue-500"
          >
            {Math.round(Math.random())}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <div className="inline-block bg-blue-600 p-4 rounded-3xl mb-8 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
          <Cpu className="w-16 h-16 text-white" />
        </div>
        
        <h2 className="text-6xl font-black text-white mb-8">في التكنولوجيا 💻</h2>
        
        <div className="bg-black/40 backdrop-blur-xl border border-blue-500/30 p-12 rounded-[3rem]">
          <p className="text-3xl font-bold text-blue-400 mb-6 italic">لغة الحاسوب هي لغة الأسس</p>
          <p className="text-xl text-slate-300 leading-relaxed">
            أجهزة الحاسوب تعتمد على قوى العدد اثنين (Binary System). <br/>
            الذاكرة (RAM) ومساحات التخزين (GB, TB) تُقاس وتُصمم <br/> باستخدام العمليات الأسية المتكررة.
          </p>
          
          <div className="mt-12 flex justify-center gap-8">
            <div className="p-4 bg-blue-900/30 rounded-xl border border-blue-500/20 font-mono">2¹⁰ = 1024</div>
            <div className="p-4 bg-purple-900/30 rounded-xl border border-purple-500/20 font-mono">2²⁰ = 1MB</div>
            <div className="p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/20 font-mono">2³⁰ = 1GB</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Scene5;
