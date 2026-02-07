
import React from 'react';
import { ReadingType, SelectedCard } from '../types';
import { getTarotImageById } from '../constants';

interface ResultScreenProps {
  readingType: ReadingType;
  cards: SelectedCard[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ readingType, cards, onRestart }) => {

  const getInterpretationText = (card: SelectedCard) => {
    let text = "";
    switch (readingType) {
      case ReadingType.LOVE: text = card.interpretations.love; break;
      case ReadingType.WEALTH: text = card.interpretations.wealth; break;
      case ReadingType.PAST_PRESENT_FUTURE:
        if (card.position === 'Past') text = card.interpretations.past || "";
        else if (card.position === 'Present') text = card.interpretations.present || "";
        else if (card.position === 'Future') text = card.interpretations.future || "";
        break;
      default: text = card.interpretations.general;
    }
    return text || card.interpretations.general;
  };

  const [isLoadingImages, setIsLoadingImages] = React.useState<Record<number, boolean>>({});

  const getReliableImage = (card: SelectedCard) => {
    return getTarotImageById(card.id);
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

  const handleAISearch = (card: SelectedCard) => {
    const typeLabel = getSearchTypeLabel();
    const positionContext = card.position ? `${card.position}(${card.position === 'Past' ? '과거' :
      card.position === 'Present' ? '현재' :
        card.position === 'Future' ? '미래' : '현재'
      })` : "";
    const reversedContext = card.isReversed ? "역방향" : "정방향";

    const queryText = `타로 카드 ${card.name} ${reversedContext} ${positionContext} ${typeLabel} 상세 의미 해석`;
    const query = encodeURIComponent(queryText);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const handleShare = async () => {
    // Generate deep link URL
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams();
    params.set('share', '1');
    params.set('t', readingType);
    params.set('c', cards.map(c => c.id).join(','));
    params.set('r', cards.map(c => c.isReversed ? '1' : '0').join(','));

    const shareUrl = `${baseUrl}?${params.toString()}`;

    // Descriptive summary for SNS
    const cardSummary = cards.map((card) => {
      const pos = card.position ? `[${card.position}] ` : '';
      const rev = card.isReversed ? '(역방향)' : '(정방향)';
      return `${pos}${card.name} ${rev}`;
    }).join('\n');

    const shareText = `🔮 [Mystic Path Tarot] ${getTitle()} 결과\n\n` +
      `${cardSummary}\n\n` +
      `자세한 해석은 아래 링크에서 확인해보세요! 👇\n` +
      `${shareUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mystic Path Tarot Reading',
          text: shareText,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('결과 내용과 링크가 클립보드에 복사되었습니다! SNS에 붙여넣어 공유하세요.');
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-mystic-navy scrollbar-hide">
      <div className="px-6 pb-24 max-w-2xl mx-auto">
        <div className="mt-12 mb-16 text-center animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full border border-mystic-gold/30 bg-mystic-gold/5 mb-4">
            <h2 className="text-mystic-gold font-serif text-[10px] uppercase tracking-[0.5em] font-bold">{getTitle()}</h2>
          </div>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">{new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
        </div>

        {cards.map((card, idx) => (
          <div key={idx} className="mb-24 last:mb-12 animate-slide-up" style={{ animationDelay: `${idx * 0.2}s` }}>
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-mystic-gold/20 font-serif text-4xl font-black italic">0{idx + 1}</span>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-mystic-gold/30 to-transparent"></div>
              {card.position && (
                <span className="text-mystic-gold text-[10px] font-bold uppercase tracking-widest bg-mystic-gold/10 px-3 py-1 rounded-lg border border-mystic-gold/20">
                  {card.position}
                </span>
              )}
            </div>

            {/* Main Visual Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Card Image */}
              <div className="relative group mx-auto md:mx-0">
                <div className="absolute -inset-4 bg-mystic-gold/5 rounded-[2rem] blur-2xl group-hover:bg-mystic-gold/10 transition-colors"></div>
                <div className="relative w-64 h-96 rounded-2xl border-2 border-mystic-gold/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-mystic-gold/40 transition-all duration-700 bg-mystic-navy">
                  <img
                    src={getReliableImage(card)}
                    alt={card.name}
                    className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${card.isReversed ? 'rotate-180' : ''}`}
                    onLoad={() => setIsLoadingImages(prev => ({ ...prev, [card.id]: false }))}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (!img.src.includes('placeholder')) {
                        img.src = `https://placehold.jp/24/1a1a2e/d4af37/300x500.png?text=${encodeURIComponent(card.name)}`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-8 text-center px-4">
                    <h3 className="text-white font-serif text-2xl font-bold tracking-widest uppercase mb-1">
                      {card.name} {card.isReversed ? <span className="text-red-400 text-sm align-middle ml-2">(역)</span> : ''}
                    </h3>
                    <p className="text-mystic-gold text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">{card.arcana} Arcana</p>
                  </div>
                </div>

                {/* Decoration */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-mystic-gold/20 rounded-br-2xl pointer-events-none group-hover:border-mystic-gold/50 transition-colors"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-mystic-gold/20 rounded-tl-2xl pointer-events-none group-hover:border-mystic-gold/50 transition-colors"></div>
              </div>

              {/* Interpretation Content */}
              <div className="space-y-8 py-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-mystic-gold"></div>
                    <h4 className="text-mystic-gold text-xs font-bold uppercase tracking-widest">Key Meanings</h4>
                  </div>
                  <p className="text-white/90 font-serif italic text-lg leading-relaxed">
                    "{card.meaning}"
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-mystic-purple"></div>
                    <h4 className="text-mystic-purple text-xs font-bold uppercase tracking-widest">Deep Interpretation</h4>
                  </div>
                  <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 backdrop-blur-md">
                    <p className="text-white/70 leading-relaxed text-sm whitespace-pre-wrap">
                      {card.isReversed
                        ? `[역방향] ${getInterpretationText(card)}\n\n(참고: 역방향 카드는 해당 카드의 에너지가 내면으로 향하거나, 지연, 정체, 혹은 그 의미가 강조되거나 반전됨을 뜻할 수 있습니다.)`
                        : getInterpretationText(card)}
                    </p>
                  </div>
                </div>

                {/* AI Search Section */}
                <div className="pt-4">
                  <button
                    onClick={() => handleAISearch(card)}
                    className="w-full group/ai flex flex-col items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-mystic-gold/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center -space-x-1">
                        <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#FBBC05]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                      </div>
                      <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest group-hover/ai:text-mystic-gold transition-colors">
                        더 깊은 통찰이 필요하신가요?
                      </span>
                    </div>
                    <span className="text-mystic-gold text-xs font-bold flex items-center gap-2">
                      Google AI 검색으로 상세 해석 확인
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/ai:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
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

          <button
            onClick={handleShare}
            className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-bold text-white transition-all hover:bg-white/10 active:scale-95 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m7.947 0c.202.404.316.86.316 1.342 0 .482-.114.938-.316 1.342m0 0a2 2 0 103.947 0m-3.947 0c.202.404.316.86.316 1.342 0 .482-.114.938-.316 1.342m-7.947 0a2 2 0 10-3.947 0m3.947 0c-.202.404-.316.86-.316 1.342 0 .482.114.938.316 1.342m7.947-2.684a2 2 0 10-3.947 0m-3.947 0a2 2 0 103.947 0m-3.947 0c.202-.404.316-.862.316-1.342 0-.482-.114-.938-.316-1.342m7.947 0c.202-.404.316-.862.316-1.342 0-.482-.114-.938-.316-1.342" />
            </svg>
            친구에게 결과 공유하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
