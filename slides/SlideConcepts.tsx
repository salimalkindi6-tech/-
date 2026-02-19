
import React from 'react';
import { motion } from 'framer-motion';
import { Info, HelpCircle, Layers } from 'lucide-react';

const SlideConcepts: React.FC = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-10">
      <div className="text-center">
         <h2 className="text-5xl font-black text-white mb-2">تعريفات قمرة القيادة 🛫</h2>
         <p className="text-slate-500 font-bold italic text-xl">المفاهيم الأساسية للرحلة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* The Base */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-slate-900 border-4 border-slate-800 p-12 rounded-[3.5rem] relative group"
        >
          <div className="absolute -top-10 -right-4 bg-orange-600 text-white p-4 rounded-3xl shadow-xl">
             <Layers size={40} />
          </div>
          <h3 className="text-3xl font-black text-orange-500 mb-6 text-right">الأساس (Base)</h3>
          <div className="text-right space-y-6">
            <p className="text-2xl text-slate-300 font-bold leading-relaxed">
              هو <span className="text-white bg-orange-600/20 px-2 rounded">العدد الحقيقي</span> الذي يتم ضربه في نفسه بشكل متكرر.
            </p>
            <div className="bg-black/30 p-8 rounded-3xl border border-slate-800 text-center">
               <span className="text-8xl font-black text-white">٥</span>
               <p className="text-slate-500 font-bold mt-2 uppercase text-xs">This is the Base / هذا هو الأساس</p>
            </div>
          </div>
        </motion.div>

        {/* The Exponent */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-slate-900 border-4 border-slate-800 p-12 rounded-[3.5rem] relative group"
        >
          <div className="absolute -top-10 -right-4 bg-cyan-600 text-white p-4 rounded-3xl shadow-xl">
             <HelpCircle size={40} />
          </div>
          <h3 className="text-3xl font-black text-cyan-500 mb-6 text-right">الأس (Exponent)</h3>
          <div className="text-right space-y-6">
            <p className="text-2xl text-slate-300 font-bold leading-relaxed">
              هو الذي يشير إلى <span className="text-white bg-cyan-600/20 px-2 rounded">عدد مرات ضرب</span> العدد في نفسه.
            </p>
            <div className="bg-black/30 p-8 rounded-3xl border border-slate-800 text-center relative">
               <span className="text-4xl font-black text-cyan-500 absolute top-10 right-1/2 translate-x-12">٣</span>
               <span className="text-8xl font-black text-white opacity-20">٥</span>
               <p className="text-slate-500 font-bold mt-2 uppercase text-xs">This is the Exponent / هذا هو الأس</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-xl font-bold italic text-slate-400">
         💡 مثال: في العدد <span className="text-orange-500">٥^٣</span>، نضرب <span className="text-orange-500">٥</span> في نفسها <span className="text-cyan-400">٣ مرات</span> (٥×٥×٥ = ١٢٥)
      </div>
    </div>
  );
};

export default SlideConcepts;
