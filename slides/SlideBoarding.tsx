
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, QrCode, Target, Award, ShieldCheck } from 'lucide-react';

const SlideBoarding: React.FC = () => {
  const successCriteria = [
    { text: "أستطيع أن أكتب الأعداد مرفوعة إلى قوة الصفر.", icon: <ShieldCheck className="w-6 h-6 text-orange-500" /> },
    { text: "أستطيع أن أطبق قواعد الحساب بما في ذلك الأعداد السالبة والأسس.", icon: <Award className="w-6 h-6 text-orange-500" /> }
  ];

  return (
    <div className="w-full max-w-5xl">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-black text-white tracking-widest mb-2 flex items-center justify-center gap-4">
          بطاقة الصعود <span className="text-orange-500">BOARDING PASS</span>
        </h2>
        <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div 
        initial={{ rotateX: 20, opacity: 0, scale: 0.95 }}
        animate={{ rotateX: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white text-slate-900 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row border-[6px] border-slate-200 relative"
      >
        {/* Decorative Ticket Notch */}
        <div className="absolute top-1/2 -left-6 w-12 h-12 bg-slate-900 rounded-full -translate-y-1/2 hidden md:block"></div>
        <div className="absolute top-1/2 -right-6 w-12 h-12 bg-slate-900 rounded-full -translate-y-1/2 hidden md:block"></div>

        {/* Main Section */}
        <div className="flex-[3] p-12 border-r-4 border-dashed border-slate-100 relative">
          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-xl shadow-orange-600/30">
                <Target size={28} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Passenger / الراكب</p>
                <h3 className="text-2xl font-black">مستكشفو الرياضيات المتميزون</h3>
              </div>
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Flight / الرحلة</p>
              <h3 className="text-3xl font-black text-orange-600">G1-17</h3>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-xs uppercase font-black text-slate-500 mb-6 flex items-center gap-2 border-b-2 border-slate-50 pb-2">
               معايير النجاح المستهدفة
            </p>
            <div className="space-y-4">
              {successCriteria.map((item, i) => (
                <motion.div 
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                  key={i} 
                  className="flex items-center gap-5 bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 hover:border-orange-200 transition-colors group shadow-sm"
                >
                  <div className="bg-white p-2 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <span className="font-bold text-xl text-slate-800 leading-relaxed text-right flex-1">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-end mt-8">
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-black text-slate-400">Class / الفئة</p>
              <p className="text-lg font-black bg-slate-900 text-white px-4 py-1 rounded-lg">الدرجة الأولى (8th Grade)</p>
            </div>
            <div className="flex items-center gap-3 bg-orange-100 px-6 py-3 rounded-2xl border border-orange-200">
               <Award className="w-5 h-5 text-orange-600" />
               <span className="text-sm font-black text-orange-900 uppercase">First Semester 2024/25</span>
            </div>
          </div>
        </div>

        {/* Side Section (Stub) */}
        <div className="flex-1 bg-gradient-to-br from-orange-500 to-orange-600 p-12 flex flex-col justify-between items-center text-center text-white relative">
          <div className="w-full">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white/30">
               <p className="text-[10px] font-black uppercase tracking-widest text-orange-100 mb-3">Gate Verification</p>
               <div className="bg-white p-3 rounded-xl shadow-lg inline-block">
                  <QrCode className="w-20 h-20 text-slate-900" />
               </div>
            </div>
            <h4 className="font-black text-2xl mb-1 shadow-sm">حل المشكلات</h4>
            <p className="text-xs text-orange-100 font-bold opacity-80">Problem Solving Mastery</p>
          </div>
          
          <div className="w-full pt-8 border-t border-orange-400/30">
             <p className="text-[10px] font-black text-orange-100 uppercase mb-2">Subject / المادة</p>
             <p className="font-black text-xl">الرياضيات الذكية</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideBoarding;
