
import React, { useState, useCallback } from 'react';
import { ReadingType, Step, SelectedCard } from './types';
import Header from './components/Header';
import Home from './components/Home';
import ShuffleScreen from './components/ShuffleScreen';
import SelectionScreen from './components/SelectionScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('HOME');
  const [readingType, setReadingType] = useState<ReadingType>(ReadingType.DAILY);
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);

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
