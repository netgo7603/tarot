
import React, { useState, useCallback } from 'react';
import { ReadingType, Step, SelectedCard, ReadingRecord } from './types';
import Header from './components/Header';
import Home from './components/Home';
import SelectionScreen from './components/SelectionScreen';
import ResultScreen from './components/ResultScreen';
import HistoryScreen from './components/HistoryScreen';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('HOME');
  const [readingType, setReadingType] = useState<ReadingType>(ReadingType.DAILY);
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);

  const saveToHistory = useCallback((type: ReadingType, cards: SelectedCard[]) => {
    const historyJson = localStorage.getItem('tarot_history');
    const history: ReadingRecord[] = historyJson ? JSON.parse(historyJson) : [];
    
    const newRecord: ReadingRecord = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      type,
      cards
    };
    
    localStorage.setItem('tarot_history', JSON.stringify([newRecord, ...history]));
  }, []);

  const startReading = useCallback((type: ReadingType) => {
    setReadingType(type);
    setStep('SELECTION');
    setSelectedCards([]);
  }, []);

  const completeSelection = useCallback((cards: SelectedCard[]) => {
    setSelectedCards(cards);
    saveToHistory(readingType, cards);
    setStep('RESULT');
  }, [readingType, saveToHistory]);

  const viewHistory = useCallback(() => {
    setStep('HISTORY');
  }, []);

  const goHome = useCallback(() => {
    setStep('HOME');
    setSelectedCards([]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-mystic-navy">
      <Header onBack={step !== 'HOME' ? goHome : undefined} />
      
      <main className="flex-1 flex flex-col pt-16">
        {step === 'HOME' && <Home onStart={startReading} onViewHistory={viewHistory} />}
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
        {step === 'HISTORY' && (
          <HistoryScreen onBack={goHome} />
        )}
      </main>
    </div>
  );
};

export default App;
