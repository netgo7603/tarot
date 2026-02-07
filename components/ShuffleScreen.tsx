
import React, { useState, useEffect, useCallback } from 'react';
import { ReadingType } from '../types';

interface ShuffleScreenProps {
    readingType: ReadingType;
    onShuffleComplete: () => void;
}

const ShuffleScreen: React.FC<ShuffleScreenProps> = ({ readingType, onShuffleComplete }) => {
    const [isGathering, setIsGathering] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Start gathering cards after a short delay
        const gatherTimer = setTimeout(() => {
            setIsGathering(true);
        }, 500);

        // Increment progress bar
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        // Complete after progress reaches 100
        const completeTimer = setTimeout(() => {
            onShuffleComplete();
        }, 4500);

        return () => {
            clearTimeout(gatherTimer);
            clearInterval(progressInterval);
            clearTimeout(completeTimer);
        };
    }, [onShuffleComplete]);

    return (
        <div className="flex-1 flex flex-col items-center justify-center px-6 overflow-hidden">
            <div className="text-center mb-12 space-y-3">
                <h2 className="font-serif text-2xl font-bold text-white tracking-widest">
                    운명을 섞는 중
                </h2>
                <p className="text-mystic-gold/70 text-sm font-light tracking-widest uppercase">
                    Concentrate on your question...
                </p>
            </div>

            <div className="relative w-64 h-96 flex items-center justify-center">
                {/* Animated Deck */}
                <div className="relative w-48 h-72">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div
                            key={i}
                            className={`
                absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] 
                rounded-xl border-2 border-mystic-gold/20 shadow-2xl
                transition-all duration-700 ease-in-out
              `}
                            style={{
                                transform: isGathering
                                    ? `translateY(${i * -1}px) rotate(0deg)`
                                    : `translate(${(i - 7) * 20}px, ${(i % 2 === 0 ? 1 : -1) * 20}px) rotate(${(i - 7) * 5}deg)`,
                                opacity: 1,
                                zIndex: 10 + i,
                                transitionDelay: `${i * 0.05}s`
                            }}
                        >
                            <div className="absolute inset-2 border border-mystic-gold/10 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mystic-gold/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                        </div>
                    ))}

                    {/* Magical Particles effect (Simplified) */}
                    {isGathering && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-full h-full animate-ping bg-mystic-gold/5 rounded-full blur-3xl"></div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-16 w-full max-w-xs space-y-4">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-mystic-purple via-mystic-gold to-mystic-purple transition-all duration-300 ease-linear shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-[10px] text-white/30 font-bold tracking-widest uppercase">
                    <span>Shuffling...</span>
                    <span>{progress}%</span>
                </div>
            </div>
        </div>
    );
};

export default ShuffleScreen;
