
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Fix: 'Tool' is not an exported member of 'lucide-react'. Since it's unused, it has been removed.
import { Settings, Check, AlertCircle } from 'lucide-react';

const SlideCheckTools: React.FC = () => {
  const [checks, setChecks] = useState([false, false, false]);

  const toggleCheck = (i: number) => {
    const newChecks = [...checks];
    newChecks[i] = !newChecks[i];
    setChecks(newChecks);
  };

  const tasks = [
    { q: "ما هو ناتج ضرب ٢ في نفسها ٣ مرات؟", a: "٨" },
    { q: "ما معنى ٢٤ ؟", a: "٢ × ٢ × ٢ × ٢" },
    { q: "هل الأس الصفر يغير النتيجة؟", a: "نعم، النتيجة دائماً ١" }
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8">
      <div className="bg-slate-900 border-4 border-slate-800 rounded-[3rem] p-10 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Settings size={200} className="animate-spin-slow" />
        </div>
        
        <div className="text-right mb-10 border-r-8 border-orange-600 pr-6">
          <h2 className="text-4xl font-black text-white">التحقق من أدوات الطائرة 🔧</h2>
          <p className="text-slate-400 font-bold">التعلم القبلي / التمهيد</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tasks.map((task, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleCheck(i)}
              className={`cursor-pointer p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center text-center gap-4 ${checks[i] ? 'bg-green-600/20 border-green-500' : 'bg-slate-800 border-slate-700 hover:border-orange-500'}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${checks[i] ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                {checks[i] ? <Check size={28} /> : <AlertCircle size={28} />}
              </div>
              <h4 className="text-xl font-bold text-white leading-tight">{task.q}</h4>
              {checks[i] && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 bg-white/10 px-4 py-2 rounded-xl">
                   <span className="text-green-400 font-black">الجواب: {task.a}</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-slate-950 px-10 py-4 rounded-full border border-slate-800 text-slate-500 font-bold italic">
            {checks.every(c => c) ? "✅ الطائرة جاهزة للإقلاع بكامل طاقتها!" : "⚠️ يرجى التأكد من فحص جميع الأدوات قبل المتابعة."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCheckTools;
