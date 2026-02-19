
import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Star, Github, Globe, Heart } from 'lucide-react';

const SlideFarewell: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[100px] -z-10"></div>
      
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="bg-white p-6 rounded-full shadow-[0_0_60px_rgba(255,255,255,0.2)] mb-4"
      >
        <Plane className="w-24 h-24 text-slate-900 -rotate-12" />
      </motion.div>

      <div className="space-y-4">
        <h1 className="text-7xl font-black text-white tracking-tighter">شكراً لاختياركم خطوط الأسس الجوية</h1>
        <p className="text-3xl text-orange-500 font-bold italic animate-pulse">
          "نلقاكم في رحلة جديدة مع الجذور قريبًا ✈️"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
        <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-3xl border border-slate-700 flex flex-col items-center gap-4">
           <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
           <p className="font-bold text-slate-300">تم جمع كل النجوم!</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-3xl border border-slate-700 flex flex-col items-center gap-4">
           <Globe className="w-10 h-10 text-cyan-400" />
           <p className="font-bold text-slate-300">هبوط آمن في مطار المعرفة</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-3xl border border-slate-700 flex flex-col items-center gap-4">
           <Heart className="w-10 h-10 text-red-500 fill-red-500" />
           <p className="font-bold text-slate-300">نتمنى أنكم استمتعتم بالرحلة</p>
        </div>
      </div>

      <div className="mt-12 text-slate-500 text-sm font-bold uppercase tracking-[0.5em] flex flex-col items-center gap-2">
         <span>Aviation Math Series | Flight G1-17</span>
         <div className="flex gap-4">
           {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-slate-800" />)}
         </div>
      </div>

      <div className="absolute bottom-10 text-xs text-slate-600 font-bold">
        🎧 ملاحظة: "يرجى من الركاب البقاء في مقاعدهم حتى تتوقف الطائرة تماماً عند بوابة المعلومات."
      </div>
    </div>
  );
};

export default SlideFarewell;
