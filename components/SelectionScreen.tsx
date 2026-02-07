
import React, { useState, useEffect, useMemo } from 'react';
import { ReadingType, SelectedCard, TarotCardData } from '../types';
import { ALL_CARDS, getTarotImageById } from '../constants';

interface SelectionScreenProps {
  readingType: ReadingType;
  onComplete: (cards: SelectedCard[]) => void;
}

const SelectionScreen: React.FC<SelectionScreenProps> = ({ readingType, onComplete }) => {
  const [deck, setDeck] = useState<TarotCardData[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [isRevealing, setIsRevealing] = useState(false);

  const requiredCount = readingType === ReadingType.PAST_PRESENT_FUTURE ? 3 : 1;
  const positions: Array<'Past' | 'Present' | 'Future' | 'Current'> =
    readingType === ReadingType.PAST_PRESENT_FUTURE
      ? ['Past', 'Present', 'Future']
      : ['Current'];

  // All 78 cards
  const totalSlots = 78;

  // Pre-calculate positions for a 4-row straight grid layout
  const cardLayouts = useMemo(() =>
    Array.from({ length: totalSlots }).map((_, i) => {
      // Distribute 78 cards over 4 rows (20, 20, 19, 19)
      let row = 0;
      let indexInRow = 0;
      let cardsInThisRow = 0;

      if (i < 20) {
        row = 0;
        indexInRow = i;
        cardsInThisRow = 20;
      } else if (i < 40) {
        row = 1;
        indexInRow = i - 20;
        cardsInThisRow = 20;
      } else if (i < 59) {
        row = 2;
        indexInRow = i - 40;
        cardsInThisRow = 19;
      } else {
        row = 3;
        indexInRow = i - 59;
        cardsInThisRow = 19;
      }

      const xGap = 16;
      const x = (indexInRow - (cardsInThisRow - 1) / 2) * xGap;
      const y = row * 65 + 60; // Row height and initial offset

      return { x, y, rotation: 0, row: row + 1 };
    }), []);

  useEffect(() => {
    // Already shuffled deck should be passed or we shuffle once here
    const shuffledDeck = [...ALL_CARDS].sort(() => Math.random() - 0.5);
    setDeck(shuffledDeck);
  }, []);

  const handleCardClick = (index: number) => {
    if (selectedIndices.includes(index) || selectedIndices.length >= requiredCount || isRevealing) return;

    const newIndices = [...selectedIndices, index];
    setSelectedIndices(newIndices);

    if (newIndices.length === requiredCount) {
      setIsRevealing(true);
      setTimeout(() => {
        const finalCards: SelectedCard[] = newIndices.map((idx, i) => {
          const card = deck[idx % deck.length];
          return {
            ...card,
            image: getTarotImageById(card.id),
            position: positions[i],
            isReversed: Math.random() < 0.2 // 20% chance of reversal
          };
        });
        onComplete(finalCards);
      }, 1000);
    }
  };

  const CARD_BACK = "https://raw.githubusercontent.com/Lymin80/zigzag/main/public/snake.svg"; // 임시로 프로젝트 내 사용 가능한 이미지 또는 더 안정적인 소스로 교체

  return (
    <div className="flex-1 flex flex-col items-center bg-mystic-navy overflow-hidden">
      <div className="mt-4 mb-2 text-center space-y-1 z-10 px-4">
        <p className="text-mystic-gold/50 text-[8px] font-bold tracking-[0.4em] uppercase">Concentrate on your question</p>
        <h2 className="font-serif text-lg font-bold text-white leading-tight">
          내면의 질문에 집중하고 <span className="text-mystic-gold">{requiredCount}장</span>을 골라주세요
        </h2>
      </div>

      <div className="relative flex-1 w-full max-w-5xl flex items-start justify-center overflow-visible mt-20">
        <div className="relative w-full h-full">
          {cardLayouts.map((layout, i) => {
            const isSelected = selectedIndices.includes(i);
            const isClickable = !isRevealing && selectedIndices.length < requiredCount;

            return (
              <button
                key={i}
                onClick={() => handleCardClick(i)}
                disabled={!isClickable || isSelected}
                className={`
                  absolute w-9 h-14 sm:w-16 sm:h-28 rounded-lg border-2 transition-all duration-500 ease-out
                  ${isSelected
                    ? 'border-mystic-gold shadow-[0_0_25px_rgba(212,175,55,0.6)] z-[200] -translate-y-24 scale-125'
                    : 'border-mystic-gold/40 hover:border-mystic-gold/60 hover:-translate-y-4 z-10'}
                  bg-[#0a0a1a] overflow-hidden group
                `}
                style={{
                  transform: isSelected
                    ? `translateX(${layout.x}px) translateY(${layout.y - 100}px) rotate(0deg) scale(1.4)`
                    : `translateX(${layout.x}px) translateY(${layout.y}px) rotate(${layout.rotation}deg)`,
                  left: 'calc(50% - 18px)',
                  top: '5%',
                  zIndex: isSelected ? 500 : 100 + i
                }}
              >
                <img
                  src={CARD_BACK}
                  alt="Tarot Card Back"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.jp/24/1a1a2e/d4af37/150x250.png?text=TAROT';
                  }}
                />
                <div className="absolute inset-1 border border-mystic-gold/10 rounded-md pointer-events-none"></div>
                {isSelected && (
                  <div className="absolute inset-0 bg-mystic-gold/20 animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-md pb-8 flex flex-col items-center gap-6 z-20">
        <div className="flex gap-4">
          {Array.from({ length: requiredCount }).map((_, i) => (
            <div key={i} className={`w-14 h-20 rounded-lg border-2 border-dashed flex items-center justify-center transition-all duration-500 ${selectedIndices[i] !== undefined ? 'border-mystic-gold bg-mystic-gold/20 scale-110 shadow-lg' : 'border-white/10 bg-white/5'}`}>
              {selectedIndices[i] !== undefined ? (
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[8px] text-mystic-gold font-bold mt-1 uppercase tracking-tighter">{positions[i]}</span>
                </div>
              ) : (
                <span className="text-white/10 font-serif text-lg">{i === 0 ? 'I' : i === 1 ? 'II' : 'III'}</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase animate-pulse">당신의 무의식이 이끄는 곳을 선택하세요</p>
      </div>
    </div>
  );
};

export default SelectionScreen;
