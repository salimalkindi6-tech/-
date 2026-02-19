
import React from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, Edit3, QrCode } from 'lucide-react';

const SlideHomework: React.FC = () => {
  return (
    <div className="w-full max-w-5xl">
       <div className="bg-slate-800 rounded-[3rem] border-4 border-slate-700 overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Left: Branding & Graphic */}
          <div className="bg-orange-600 p-12 text-white flex flex-col justify-between items-center md:items-start md:w-1/3">
             <div>
                <Home className="w-16 h-16 mb-4" />
                <h2 className="text-5xl font-black">الواجب المنزلي</h2>
                <p className="text-orange-200 font-bold mt-2 uppercase tracking-widest text-sm">After Landing Mission</p>
             </div>
             
             <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 mt-8 w-full">
                <p className="text-xs font-bold text-center italic">"الرياضيات هي رحلة بلا نهاية، والواجب هو وقودك للرحلة القادمة."</p>
             </div>
          </div>

          {/* Right: Actual Homework Details */}
          <div className="flex-1 p-12 bg-slate-900">
             <div className="space-y-10">
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-start gap-6">
                   <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 shrink-0">
                      <BookOpen className="w-8 h-8 text-orange-500" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-white mb-2 underline decoration-orange-500 underline-offset-8">من الكتاب المدرسي</h3>
                      <p className="text-xl text-slate-400 font-bold leading-relaxed">حل التمارين من الصفحة (١٥) إلى (١٧) كاملة.</p>
                   </div>
                </motion.div>

                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-start gap-6">
                   <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 shrink-0">
                      <Edit3 className="w-8 h-8 text-cyan-400" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-white mb-2 underline decoration-cyan-400 underline-offset-8">المهمة الإبداعية</h3>
                      <p className="text-xl text-slate-400 font-bold leading-relaxed">اكتب ٣ أمثلة من حياتك اليومية تستخدم فيها مفهوم التكرار (مثل البكتيريا، الفوائد، المساحات).</p>
                   </div>
                </motion.div>

                <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
                   <div className="flex items-center gap-4 text-slate-500 text-sm font-bold">
                      <QrCode className="w-12 h-12" />
                      <span>امسح الكود لرفع الواجب <br/> عبر المنصة الرقمية</span>
                   </div>
                   <div className="bg-orange-600 text-white px-6 py-2 rounded-full font-black text-xs animate-pulse shadow-lg shadow-orange-600/20">
                      آخر موعد للتسليم: غداً صباحاً ⏰
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default SlideHomework;
