
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const Scene7: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 max-w-4xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-20">
          <Star className="w-64 h-64 text-yellow-500 animate-spin-slow" />
        </div>

        <h2 className="text-7xl font-black text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400">
          الأسس ليست مجرد درس...
        </h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-4xl font-black text-slate-300 mb-16"
        >
          بل هي اللغة التي نفهم بها العالم.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {['الهندسة', 'الاقتصاد', 'التكنولوجيا', 'العلوم'].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.2 }}
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold text-xl"
            >
              {item}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="p-4 bg-red-500/20 rounded-full">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
          </div>
          <p className="text-2xl font-black text-slate-400">شكراً لمشاهدتكم</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Scene7;
