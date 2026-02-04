
import React from 'react';

interface HeaderProps {
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-mystic-navy/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center p-4 justify-between max-w-2xl mx-auto">
        <div className="w-12">
          {onBack && (
            <button 
              onClick={onBack}
              className="text-mystic-gold hover:text-mystic-gold-muted transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>
        
        <div className="flex flex-col items-center">
          <h1 className="text-white text-sm font-bold leading-tight tracking-[0.2em] uppercase font-serif">
            Mystic Path
          </h1>
          <span className="text-mystic-purple text-[10px] font-bold tracking-[0.3em]">TAROT READING</span>
        </div>
        
        <div className="w-12 flex justify-end">
          <button className="text-mystic-gold hover:text-mystic-gold-muted transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
