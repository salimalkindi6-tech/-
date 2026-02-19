
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle, HelpCircle, ArrowLeft, ArrowDownCircle, Lightbulb } from 'lucide-react';

const SlideTakeoff: React.FC<{ onCorrect: () => void }> = ({ onCorrect }) => {
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const examples = [
    {
      id: 1,
      title: "(أ) ٢-٦",
      question: "اكتب ٢-٦ في شكل كسر",
      steps: [
        { label: "حساب القوة الموجبة أولاً", content: "٢ × ٢ × ٢ × ٢ × ٢ × ٢ = ٦٤" },
        { label: "تطبيق قاعدة الأس السالب", content: "٢-٦ = ١ / ٢ ٦" },
        { label: "النتيجة النهائية", content: "١ / ٦٤", highlighted: true }
      ]
    },
    {
      id: 2,
      title: "(ب) ٦-٢",
      question: "اكتب ٦-٢ في شكل كسر",
      steps: [
        { label: "تطبيق قاعدة الأس السالب مباشرة", content: "٦-٢ = ١ / ٦ ٢" },
        { label: "فك القوة التربيعية", content: "٦ × ٦ = ٣٦" },
        { label: "النتيجة النهائية", content: "١ / ٣٦", highlighted: true }
      ]
    }
  ];

  const handleExampleOpen = (id: number) => {
    setActiveExample(id);
    onCorrect();
  };

  return (
    <div className="w-full max-w-6xl h-full flex flex-col justify-center gap-8">
      {/* Cinematic Header */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between bg-slate-800/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-700 shadow-2xl overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[60px] rounded-full"></div>
        <div className="flex items-center gap-6">
          <div className="bg-orange-600 p-4 rounded-3xl shadow-2xl shadow-orange-600/40 rotate-3">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-black text-white mb-1">مثال شارح: فكرة الدرس</h2>
            <p className="text-orange-400 font-bold flex items-center gap-2">
              <Lightbulb className="w-4 h-4" /> كتاب الطالب، ص ٢٢ - تدريبات الفهم
            </p>
          </div>
        </div>
        <div className="bg-slate-900/80 px-8 py-3 rounded-2xl border border-slate-700/50 flex flex-col items-center">
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Flight Prep</span>
           <span className="text-xl font-bold text-slate-300">مرحلة الشرح الفني</span>
        </div>
      </motion.div>

      {/* Grid for Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {examples.map((ex, i) => (
          <motion.div 
            key={ex.id}
            initial={{ opacity: 0, x: i === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.2 }}
            className={`rounded-[3rem] p-10 border-2 transition-all duration-500 flex flex-col relative overflow-hidden group ${
              activeExample === ex.id 
                ? 'bg-slate-800/90 border-orange-500/50 shadow-2xl shadow-orange-500/10' 
                : 'bg-slate-900/40 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
            }`}
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-600/5 rounded-full blur-[80px] group-hover:bg-orange-600/10 transition-colors"></div>
            
            <div className="mb-8 flex justify-between items-start">
              <span className="bg-orange-600/20 text-orange-500 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-orange-500/20">
                المثال {ex.title}
              </span>
              <HelpCircle className={`w-8 h-8 transition-colors ${activeExample === ex.id ? 'text-orange-500' : 'text-slate-700'}`} />
            </div>

            <h3 className="text-4xl font-black text-white mb-10 leading-relaxed text-right">
              {ex.question}
            </h3>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                {activeExample === ex.id ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {ex.steps.map((step, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className={`p-5 rounded-2xl flex justify-between items-center ${step.highlighted ? 'bg-orange-600 shadow-xl' : 'bg-slate-900/80 border border-slate-700'}`}
                      >
                         <span className={`text-2xl font-black ${step.highlighted ? 'text-white' : 'text-orange-400'}`}>
                           {step.content}
                         </span>
                         <span className={`text-xs font-bold ${step.highlighted ? 'text-orange-100' : 'text-slate-500'}`}>
                           {step.label}
                         </span>
                      </motion.div>
                    ))}
                    <div className="flex items-center justify-center gap-3 pt-4 text-green-500 font-bold">
                       <CheckCircle size={18} />
                       تم تنفيذ المحاكاة بنجاح
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-[2rem] gap-6 group-hover:border-orange-500/30 transition-colors">
                    <p className="text-slate-500 font-bold">اضغط للمشاهدة الخطوات</p>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleExampleOpen(ex.id)}
                      className="bg-orange-600 hover:bg-orange-500 text-white p-5 rounded-full shadow-2xl transition-all shadow-orange-600/20"
                    >
                      <ArrowDownCircle size={32} />
                    </motion.button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-orange-600/10 p-6 rounded-3xl border border-orange-500/20 flex items-center gap-6"
      >
        <div className="bg-orange-500/20 p-3 rounded-2xl">
           <Lightbulb className="text-orange-500 w-8 h-8" />
        </div>
        <p className="text-xl text-slate-300 font-bold text-right leading-relaxed">
          <span className="text-orange-500 font-black">قاعدة الكابتن:</span> الأس السالب لا يعني عدداً سالباً، بل يعني "مقلوب" القوة الموجبة. تأكد دائماً من تحويله لكسر لبدء الحساب بشكل صحيح!
        </p>
      </motion.div>
    </div>
  );
};

export default SlideTakeoff;
