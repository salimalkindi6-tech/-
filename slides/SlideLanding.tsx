
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaneLanding, Building, Laptop, FlaskConical, DollarSign, Heart, Volume2, Mic, MapPin } from 'lucide-react';

const SlideLanding: React.FC<{ onPlayFinalVoice: () => void, isVoiceLoading: boolean }> = ({ onPlayFinalVoice, isVoiceLoading }) => {
  const [hasStartedVoice, setHasStartedVoice] = useState(false);

  const applications = [
    { icon: <Building />, label: "الهندسة والمباني", color: "bg-orange-500" },
    { icon: <DollarSign />, label: "الاقتصاد والفوائد", color: "bg-emerald-500" },
    { icon: <Laptop />, label: "التكنولوجيا والحواسيب", color: "bg-cyan-500" },
    { icon: <FlaskConical />, label: "العلوم والبحث", color: "bg-purple-500" }
  ];

  const playLandingSfx = () => {
    try {
      const AudioCtx = (window.AudioContext || (window as any).webkitAudioContext);
      const ctx = new AudioCtx();
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 5);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 6);
      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start();
    } catch (e) {}
  };

  const handleStart = () => {
    setHasStartedVoice(true);
    playLandingSfx();
    onPlayFinalVoice();
  };

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-8 py-4">
      <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-4 bg-orange-600/20 border-2 border-orange-500 px-8 py-4 rounded-full shadow-[0_0_30px_rgba(234,88,12,0.3)]">
           <PlaneLanding className="w-12 h-12 text-orange-500 animate-bounce" />
           <h2 className="text-5xl font-black text-white">وصلنا بسلام! 🛬</h2>
        </div>
        <p className="text-xl text-slate-400 font-bold max-w-4xl leading-relaxed mx-auto italic">
           "مسافرينا الأعزاء، نعتز بصحبتكم في هذه الرحلة التعليمية."
        </p>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch">
        <motion.div 
          className="flex-1 bg-slate-900/80 border-4 border-slate-700 p-8 rounded-[3.5rem] relative overflow-hidden backdrop-blur-2xl shadow-2xl"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-orange-600"></div>
          <div className="flex justify-between items-center mb-6">
            <div className="bg-orange-600 p-3 rounded-2xl shadow-lg">
              <Volume2 className="text-white w-8 h-8" />
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">إعلان الهبوط النهائي</span>
          </div>

          <div className="space-y-4 text-right">
            <p className="text-xl font-bold text-white leading-loose h-64 overflow-y-auto custom-scrollbar pr-2 dir-rtl">
              مسافرينا الأعزاء، لقد أنهينا رحلتنا التعليمية اليوم! 🛫
              أخذناكم في جولة بين المدن المختلفة: مدينة الأساسيات، ومدينة التحدي، وصولاً إلى مدينة الخبراء.
              الآن، حان وقت العودة إلى بلادنا، ربطنا أحزمتنا استعداداً للهبوط،
              ووصلت طائراتنا بأمان إلى المطار! 🛬
              تأكدنا خلال الرحلة أن الأسس ليست مجرد أرقام، بل هي المفتاح لفهم:
              الهندسة والمباني، الاقتصاد والفوائد، التكنولوجيا والحواسيب، والعلوم.
              كل مسافر منكم أصبح اليوم طياراً صغيراً في عالم الأرقام،
              لديه القدرة على استخدام الأسس في الحياة اليومية!
              شكراً لكم على تفاعلكم، وعلى روح المغامرة التي أضفتموها لرحلتنا.
              استعدوا للرحلة القادمة مع مغامرة جديدة في عالم الرياضيات! ✨✈️
            </p>
          </div>

          <div className="mt-8">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isVoiceLoading}
              onClick={handleStart}
              className={`w-full py-5 rounded-2xl font-black text-2xl flex items-center justify-center gap-4 shadow-xl transition-all ${hasStartedVoice ? 'bg-slate-800 text-slate-400 border border-slate-700' : 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-900/40'}`}
            >
              {isVoiceLoading ? (
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>بث صوت الكابتن...</span>
                </div>
              ) : (
                <>
                  <span>{hasStartedVoice ? 'إعادة تشغيل النداء' : 'تشغيل إعلان الهبوط'}</span>
                  <Mic className="w-8 h-8" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {applications.map((app, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-slate-900/40 border-2 border-slate-800 p-6 rounded-[2.5rem] flex flex-col items-center text-center gap-4 hover:border-orange-500/50 transition-all hover:bg-slate-900/60"
            >
              <div className={`${app.color} p-4 rounded-2xl text-white shadow-lg shadow-black/20`}>
                 {app.icon}
              </div>
              <span className="font-black text-white text-base leading-tight">{app.label}</span>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="col-span-2 bg-white/5 border border-white/10 p-6 rounded-[2.5rem] text-center flex items-center justify-center gap-3"
          >
             <Heart className="text-red-500 fill-red-500 animate-pulse" />
             <span className="font-black text-slate-400">نراكم في رحلات تعليمية قادمة</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SlideLanding;
