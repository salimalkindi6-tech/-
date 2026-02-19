
import React from 'react';
import { motion } from 'framer-motion';

const Scene1: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 max-w-4xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-12"
      >
        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          الأسس: قوة الأرقام <br/> <span className="text-blue-500">في حياتنا اليومية</span>
        </h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-2xl md:text-4xl font-bold text-slate-300 italic"
        >
          "كيف يمكن لرقم صغير أن يصنع فرقاً كبيراً؟"
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Scene1;
