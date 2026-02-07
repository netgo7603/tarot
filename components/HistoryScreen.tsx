
import React, { useState, useEffect } from 'react';
import { ReadingRecord, ReadingType } from '../types';
import { getTarotImageById } from '../constants';

interface HistoryScreenProps {
  onBack: () => void;
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({ onBack }) => {
  const [history, setHistory] = useState<ReadingRecord[]>([]);

  useEffect(() => {
    const historyJson = localStorage.getItem('tarot_history');
    if (historyJson) {
      setHistory(JSON.parse(historyJson));
    }
  }, []);

  const getReadingLabel = (type: ReadingType) => {
    switch (type) {
      case ReadingType.DAILY: return "오늘의 운세";
      case ReadingType.PAST_PRESENT_FUTURE: return "과거, 현재, 미래";
      case ReadingType.LOVE: return "애정운";
      case ReadingType.WEALTH: return "재물운";
      case ReadingType.OVERALL: return "전체운";
      default: return "타로 리딩";
    }
  };

  const clearHistory = () => {
    if (confirm('모든 리딩 기록을 삭제하시겠습니까?')) {
      localStorage.removeItem('tarot_history');
      setHistory([]);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-6 pb-20 max-w-xl mx-auto w-full">
      <div className="mt-8 mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-white font-serif text-2xl font-bold mb-2">My History</h2>
          <p className="text-white/40 text-xs">그동안 당신이 걸어온 운명의 발자취입니다.</p>
        </div>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-red-500/60 text-[10px] font-bold uppercase tracking-widest hover:text-red-500"
          >
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="mt-20 text-center py-20 px-8 rounded-3xl border border-dashed border-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/10 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.246.477 4.253 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <p className="text-white/30 text-sm">아직 저장된 리딩 기록이 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((record) => (
            <div
              key={record.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-mystic-gold/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-mystic-gold font-bold text-sm mb-1">{getReadingLabel(record.type)}</h3>
                  <p className="text-white/30 text-[10px] uppercase tracking-wider">
                    {new Date(record.timestamp).toLocaleString('ko-KR', {
                      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </p>
                </div>
                <div className="flex -space-x-3">
                  {record.cards.map((card, i) => (
                    <div key={i} className="w-8 h-12 rounded-md border border-white/20 overflow-hidden shadow-lg transform group-hover:translate-y-[-4px] transition-transform bg-mystic-navy">
                      <img
                        src={card.image || getTarotImageById(card.id)}
                        alt={card.name}
                        className={`w-full h-full object-cover ${card.isReversed ? 'rotate-180' : ''}`}
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          if (!img.src.includes('placeholder')) {
                            img.src = 'https://via.placeholder.com/150x250/1a1a2e/d4af37?text=TAROT';
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {record.cards.map((card, i) => (
                  <div key={i} className="text-[11px] text-white/60 flex gap-2 items-center">
                    <span className="text-mystic-gold font-bold min-w-[50px]">{card.position || 'Card'}</span>
                    <span className="truncate opacity-80">
                      {card.name} {card.isReversed && <span className="text-red-400/80 ml-1">(역)</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryScreen;
