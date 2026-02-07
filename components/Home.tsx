
import React from 'react';
import { ReadingType } from '../types';

interface HomeProps {
  onStart: (type: ReadingType) => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  const options = [
    {
      type: ReadingType.DAILY,
      title: "오늘의 운세",
      desc: "당신의 하루를 가이드해줄 한 장의 조언",
      icon: "✨",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      type: ReadingType.PAST_PRESENT_FUTURE,
      title: "과거, 현재, 미래",
      desc: "시간의 흐름에 따른 당신의 운명 분석",
      icon: "⏳",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      type: ReadingType.LOVE,
      title: "애정운",
      desc: "감정과 인연의 흐름에 대한 깊은 통찰",
      icon: "❤️",
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      type: ReadingType.WEALTH,
      title: "재물운",
      desc: "금전적 풍요와 사업적 기회의 포착",
      icon: "💰",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      type: ReadingType.OVERALL,
      title: "전체운",
      desc: "삶의 전반적인 에너지와 방향성 체크",
      icon: "🔮",
      color: "from-indigo-500/20 to-cyan-500/20"
    },
  ];

  return (
    <div className="flex-1 px-6 flex flex-col items-center pb-12">
      <div className="mt-8 mb-10 text-center">
        <h2 className="font-serif text-3xl font-bold mb-4 text-white">
          Explore Your <span className="text-mystic-gold">Destiny</span>
        </h2>
        <p className="text-white/60 text-sm max-w-xs mx-auto leading-relaxed">
          고대의 지혜와 현대의 해석이 만나 당신의 앞날을 밝힙니다.
        </p>
      </div>

      <div className="w-full max-w-md space-y-4 mb-10">
        {options.map((opt) => (
          <button
            key={opt.type}
            onClick={() => onStart(opt.type)}
            className={`w-full group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${opt.color} p-5 text-left transition-all hover:scale-[1.02] hover:border-mystic-gold/50 active:scale-95`}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl filter drop-shadow-md">{opt.icon}</span>
              <div>
                <h3 className="text-white font-bold text-lg mb-0.5">{opt.title}</h3>
                <p className="text-white/50 text-xs">{opt.desc}</p>
              </div>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
