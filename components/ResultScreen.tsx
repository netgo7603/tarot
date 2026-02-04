
import React from 'react';
import { ReadingType, SelectedCard } from '../types';

interface ResultScreenProps {
  readingType: ReadingType;
  cards: SelectedCard[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ readingType, cards, onRestart }) => {
  
  const getInterpretationText = (card: SelectedCard) => {
    switch (readingType) {
      case ReadingType.LOVE: return card.interpretations.love;
      case ReadingType.WEALTH: return card.interpretations.wealth;
      case ReadingType.PAST_PRESENT_FUTURE:
        if (card.position === 'Past') return card.interpretations.past;
        if (card.position === 'Present') return card.interpretations.present;
        if (card.position === 'Future') return card.interpretations.future;
        return card.interpretations.general;
      default: return card.interpretations.general;
    }
  };

  const getTitle = () => {
    switch (readingType) {
      case ReadingType.LOVE: return "Love Insight";
      case ReadingType.WEALTH: return "Wealth Prospect";
      case ReadingType.PAST_PRESENT_FUTURE: return "Destiny Path";
      case ReadingType.DAILY: return "Daily Fortune";
      default: return "Overall Reading";
    }
  };

  const getSearchTypeLabel = () => {
    switch (readingType) {
      case ReadingType.LOVE: return "애정운";
      case ReadingType.WEALTH: return "재물운";
      case ReadingType.DAILY: return "오늘의 운세";
      default: return "의미";
    }
  };

  const handleAISearch = (cardName: string) => {
    const typeLabel = getSearchTypeLabel();
    const query = encodeURIComponent(`타로 카드 ${cardName} ${typeLabel} 상세 의미 해석`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-6 pb-20 max-w-xl mx-auto">
        <div className="mt-8 mb-12 text-center">
           <h2 className="text-mystic-gold font-serif text-xs uppercase tracking-[0.4em] font-bold mb-2">{getTitle()}</h2>
           <p className="text-white/40 text-[10px] uppercase tracking-widest">{new Date().toLocaleDateString('ko-KR')}</p>
        </div>

        {cards.map((card, idx) => (
          <div key={idx} className="mb-16 last:mb-0">
            {/* Card Visual */}
            <div className="relative group mb-8 flex flex-col items-center">
              <div className="absolute inset-0 aura-glow rounded-xl scale-125 opacity-30 pointer-events-none"></div>
              <div className="relative w-56 h-80 rounded-xl border border-mystic-gold/30 overflow-hidden bg-mystic-navy shadow-2xl">
                <img 
                  src={card.image} 
                  alt={card.name} 
                  className="w-full h-full object-cover grayscale brightness-75 transition-all group-hover:grayscale-0 group-hover:brightness-100 duration-1000"
                  onError={(e) => {
                    // Fallback to another source if Wikimedia fails
                    (e.target as HTMLImageElement).src = `https://www.sacred-texts.com/tarot/pkt/img/ar${card.id < 10 ? '0' + card.id : card.id}.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-x-0 bottom-6 text-center">
                  <h3 className="text-mystic-gold font-serif text-2xl font-extrabold tracking-widest uppercase">{card.name}</h3>
                </div>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-mystic-purple/20 text-mystic-purple text-[10px] font-bold uppercase tracking-widest border border-mystic-purple/30">
                  {card.arcana} Arcana
                </span>
                <p className="text-white/40 text-xs italic text-center max-w-[240px] leading-relaxed">
                  "{card.meaning}"
                </p>
              </div>
            </div>

            {/* Interpretation Card */}
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-mystic-gold/10">
                    {card.position === 'Past' && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    {card.position === 'Present' && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                    {card.position === 'Future' && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    {(!card.position || card.position === 'Current') && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>}
                  </div>
                  <h4 className="text-white font-serif font-bold text-lg uppercase tracking-wide">
                    {card.position ? `The ${card.position}` : 'Insight'}
                  </h4>
                  <div className="flex-grow h-[1px] bg-gradient-to-r from-mystic-gold/40 to-transparent"></div>
                </div>
                
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm relative z-10 whitespace-pre-wrap mb-6">
                    {getInterpretationText(card)}
                  </p>
                  
                  {/* Google AI Search Button */}
                  <button 
                    onClick={() => handleAISearch(card.name)}
                    className="relative z-10 w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-mystic-gold/30 text-mystic-gold text-xs font-bold hover:bg-mystic-gold/10 transition-all active:scale-95 group/btn"
                  >
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
                    </div>
                    Google AI로 더 깊은 의미 알아보기
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Affirmation Card */}
        <div className="mt-12 py-10 px-8 rounded-3xl bg-gradient-to-br from-mystic-purple/20 to-transparent border border-mystic-gold/20 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mystic-gold/50 to-transparent"></div>
           <h4 className="text-mystic-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Daily Affirmation</h4>
           <p className="text-lg font-serif italic text-white/90 leading-relaxed">
             "나는 우주의 신성한 에너지를 신뢰하며, 오늘 내게 주어지는 모든 경험이 나를 성장의 길로 이끌 것임을 믿습니다."
           </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <button 
            onClick={onRestart}
            className="w-full bg-mystic-purple py-4 rounded-2xl font-bold text-white shadow-lg shadow-mystic-purple/20 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            새로운 리딩 시작하기
          </button>
          
          <div className="flex gap-4">
             <button className="flex-1 bg-white/5 border border-white/10 py-4 rounded-2xl font-bold text-white transition-all hover:bg-white/10 active:scale-95 flex items-center justify-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
               저장하기
             </button>
             <button className="flex-1 bg-white/5 border border-white/10 py-4 rounded-2xl font-bold text-white transition-all hover:bg-white/10 active:scale-95 flex items-center justify-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m7.947 0c.202.404.316.86.316 1.342 0 .482-.114.938-.316 1.342m0 0a2 2 0 103.947 0m-3.947 0c.202.404.316.86.316 1.342 0 .482-.114.938-.316 1.342m-7.947 0a2 2 0 10-3.947 0m3.947 0c-.202.404-.316.86-.316 1.342 0 .482.114.938.316 1.342m7.947-2.684a2 2 0 10-3.947 0m-3.947 0a2 2 0 103.947 0m-3.947 0c.202-.404.316-.862.316-1.342 0-.482-.114-.938-.316-1.342m7.947 0c.202-.404.316-.862.316-1.342 0-.482-.114-.938-.316-1.342" /></svg>
               공유하기
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
