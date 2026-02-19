
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Flag } from 'lucide-react';

const SlideObjectives: React.FC = () => {
  const objectives = [
    { title: "الهدف الأول", text: "أستطيع أن أكتب الأعداد مرفوعة إلى قوة الصفر.", color: "bg-orange-500" },
    { title: "الهدف الثاني", text: "أستطيع أن أطبق قواعد الحساب بما في ذلك الأعداد السالبة والأسس.", color: "bg-cyan-500" },
    { title: "الهدف الثالث", text: "أستطيع استخدام الأسس في حل مشكلات حياتية واقعية.", color: "bg-emerald-500" }
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-10">
      <div className="text-center space-y-2">
        <h2 className="text-5xl font-black text-white">خريطة الرحلة 🗺️</h2>
        <p className="text-orange-400 font-bold uppercase tracking-widest text-sm">Learning Flight Path</p>
      </div>

      <div className="w-full space-y-6">
        {objectives.map((obj, i) => (
          <motion.div 
            key={i}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="bg-slate-900/50 border-2 border-slate-800 p-8 rounded-[2.5rem] flex items-center gap-8 relative group hover:border-slate-600 transition-all"
          >
            <div className={`${obj.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg`}>
               <MapPin size={32} />
            </div>
            <div className="flex-1 text-right">
               <span className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-1">{obj.title}</span>
               <h3 className="text-2xl font-bold text-white leading-relaxed">{obj.text}</h3>
            </div>
            <CheckCircle2 className="text-slate-800 group-hover:text-green-500 transition-colors w-10 h-10" />
            
            {/* Connecting Line */}
            {i < objectives.length - 1 && (
              <div className="absolute left-8 top-full h-6 w-1 bg-slate-800 z-0"></div>
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="flex items-center gap-3 bg-slate-800/40 px-6 py-3 rounded-2xl border border-slate-700">
         <Flag className="text-orange-500 w-5 h-5" />
         <span className="text-sm font-bold text-slate-400 italic">هذه هي محطاتنا الرئيسية للوصول للتميز اليوم.</span>
      </div>
    </div>
  );
};

export default SlideObjectives;
