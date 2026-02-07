import React, { useState, useCallback, useEffect } from 'react';
import { ReadingType, Step, SelectedCard } from './types';
import Header from './components/Header';
import Home from './components/Home';
import ShuffleScreen from './components/ShuffleScreen';
import SelectionScreen from './components/SelectionScreen';
import ResultScreen from './components/ResultScreen';
import { ALL_CARDS } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('HOME');
  const [readingType, setReadingType] = useState<ReadingType>(ReadingType.DAILY);
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);

  // Deep Linking: Parse URL parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isShare = params.get('share');
    const type = params.get('t') as ReadingType | null;
    const cardIds = params.get('c')?.split(',').map(Number);
    const reversedFlags = params.get('r')?.split(',').map(v => v === '1');

    if (isShare && type && cardIds && reversedFlags && cardIds.length === reversedFlags.length) {
      const reconstructedCards: SelectedCard[] = cardIds.map((id, i) => {
        const cardData = ALL_CARDS.find(c => c.id === id);
        if (!cardData) return null;

        // Reconstruct position
        let position: SelectedCard['position'] = 'Current';
        if (type === ReadingType.PAST_PRESENT_FUTURE) {
          position = i === 0 ? 'Past' : i === 1 ? 'Present' : 'Future';
        }

        return {
          ...cardData,
          isReversed: reversedFlags[i],
          position
        } as SelectedCard;
      }).filter((c): c is SelectedCard => c !== null);

      if (reconstructedCards.length > 0) {
        setReadingType(type);
        setSelectedCards(reconstructedCards);
        setStep('RESULT');
      }
    }
  }, []);

  const startReading = useCallback((type: ReadingType) => {
    setReadingType(type);
    setStep('SHUFFLE');
    setSelectedCards([]);
  }, []);

  const completeShuffle = useCallback(() => {
    setStep('SELECTION');
  }, []);

  const completeSelection = useCallback((cards: SelectedCard[]) => {
    setSelectedCards(cards);
    setStep('RESULT');
  }, []);

  const goHome = useCallback(() => {
    setStep('HOME');
    setSelectedCards([]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-mystic-navy font-sans">
      <Header onBack={step !== 'HOME' ? goHome : undefined} />

      <main className="flex-1 flex flex-col pt-16">
        {step === 'HOME' && <Home onStart={startReading} />}
        {step === 'SHUFFLE' && (
          <ShuffleScreen
            readingType={readingType}
            onShuffleComplete={completeShuffle}
          />
        )}
        {step === 'SELECTION' && (
          <SelectionScreen
            readingType={readingType}
            onComplete={completeSelection}
          />
        )}
        {step === 'RESULT' && (
          <ResultScreen
            readingType={readingType}
            cards={selectedCards}
            onRestart={goHome}
          />
        )}
      </main>
    </div>
  );
};

export default App;
