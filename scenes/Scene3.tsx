
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Square } from 'lucide-react';

const Scene3: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12 max-w-6xl w-full">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-right"
      >
        <div className="flex items-center justify-end gap-4 mb-6">
          <h2 className="text-5xl font-black text-white">في الهندسة</h2>
          <div className="bg-orange-500 p-3 rounded-2xl">
            <Square className="w-8 h-8 text-white" />
          </div>
        </div>
        <p className="text-2xl text-slate-400 font-bold leading-relaxed">
          المهندسون يستخدمون الأسس في <br/> تصميم المباني والجسور.
        </p>
        
        <div className="mt-12 space-y-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex justify-between items-center">
            <span className="text-2xl font-black text-orange-400 italic">L²</span>
            <span className="text-xl font-bold">مساحة المربع = الطول تربيع</span>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex justify-between items-center">
            <span className="text-2xl font-black text-purple-400 italic">L³</span>
            <span className="text-xl font-bold">حجم المكعب = الطول تكعيب</span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center items-center">
        <motion.div
          animate={{ rotateY: [0, 360], rotateX: [0, 45] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-64 h-64 border-4 border-orange-500 relative flex items-center justify-center transform preserve-3d"
        >
          <div className="absolute inset-0 bg-orange-500/20"></div>
          <Box className="w-32 h-32 text-orange-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Scene3;
