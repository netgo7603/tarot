
import React, { useState, useEffect } from 'react';
import { ReadingType, SelectedCard } from '../types';
import { MAJOR_ARCANA } from '../constants';

interface SelectionScreenProps {
  readingType: ReadingType;
  onComplete: (cards: SelectedCard[]) => void;
}

const SelectionScreen: React.FC<SelectionScreenProps> = ({ readingType, onComplete }) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [isRevealing, setIsRevealing] = useState(false);
  
  const requiredCount = readingType === ReadingType.PAST_PRESENT_FUTURE ? 3 : 1;
  const positions: Array<'Past' | 'Present' | 'Future' | 'Current'> = 
    readingType === ReadingType.PAST_PRESENT_FUTURE 
    ? ['Past', 'Present', 'Future'] 
    : ['Current'];

  const handleCardClick = (index: number) => {
    if (selectedIndices.includes(index) || selectedIndices.length >= requiredCount || isRevealing) return;
    
    const newIndices = [...selectedIndices, index];
    setSelectedIndices(newIndices);

    if (newIndices.length === requiredCount) {
      setIsRevealing(true);
      setTimeout(() => {
        const finalCards: SelectedCard[] = newIndices.map((idx, i) => {
          // Shuffling logic within the selection set
          const randomCard = MAJOR_ARCANA[Math.floor(Math.random() * MAJOR_ARCANA.length)];
          return {
            ...randomCard,
            position: positions[i]
          };
        });
        onComplete(finalCards);
      }, 1000);
    }
  };

  return (
    <div className="flex-1 px-6 flex flex-col items-center">
      <div className="mt-8 mb-6 text-center space-y-2">
        <p className="text-mystic-purple text-[10px] font-bold tracking-[0.3em] uppercase">Step 1 of 2</p>
        <h2 className="font-serif text-2xl font-bold text-white max-w-xs leading-snug">
          Concentrate on your question and <span className="text-mystic-gold">pick {requiredCount} card{requiredCount > 1 ? 's' : ''}</span>
        </h2>
      </div>

      <div className="relative flex-1 w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-wrap justify-center gap-[-40px] px-10 py-10 max-w-lg">
          {Array.from({ length: 12 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleCardClick(i)}
              disabled={isRevealing}
              className={`
                relative w-32 h-48 rounded-xl border-2 transition-all duration-500 transform
                ${selectedIndices.includes(i) ? '-translate-y-8 border-mystic-gold shadow-2xl shadow-mystic-gold/20 z-20' : 'border-mystic-gold/30 hover:-translate-y-4 hover:border-mystic-gold/60 -ml-16 first:ml-0'}
                bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] overflow-hidden group
              `}
              style={{ 
                rotate: `${(i - 5.5) * 3}deg`,
                zIndex: selectedIndices.includes(i) ? 50 : 10 + i
              }}
            >
              <div className="absolute inset-2 border border-mystic-gold/10 rounded-lg pointer-events-none"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mystic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              {selectedIndices.includes(i) && (
                <div className="absolute inset-0 bg-mystic-purple/10 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md pb-10 flex justify-center gap-4">
        {Array.from({ length: requiredCount }).map((_, i) => (
          <div key={i} className={`w-16 h-24 rounded-lg border-2 border-dashed flex items-center justify-center transition-all ${selectedIndices[i] !== undefined ? 'border-mystic-gold bg-mystic-gold/10' : 'border-white/10 bg-white/5'}`}>
             {selectedIndices[i] !== undefined ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mystic-gold animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
               </svg>
             ) : (
               <span className="text-white/20 font-serif text-lg">{i === 0 ? 'I' : i === 1 ? 'II' : 'III'}</span>
             )}
          </div>
        ))}
      </div>
      <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-8">Selected cards will appear above</p>
    </div>
  );
};

export default SelectionScreen;
