import React from 'react';
import { getCurrentYear } from '../utils/urlParams';

export const YearAnimation: React.FC = () => {
  const currentYear = getCurrentYear();
  
  return (
    <div className="fixed bottom-4 w-full overflow-hidden pointer-events-none z-20">
      <div className="year-container w-48 md:w-72 lg:w-96 aspect-[2/1] animate-fly-year">
        <div className="relative w-full h-full">
          {/* Year with trailing effect */}
          <div className="absolute inset-0 font-bold text-6xl md:text-8xl lg:text-9xl 
                        bg-gradient-to-r from-cyan-600 via-orange-500 to-amber-500 
                        bg-clip-text text-transparent filter drop-shadow-lg">
            {currentYear}
            <span className="absolute -left-4 -top-2 opacity-30">{currentYear}</span>
            <span className="absolute -left-8 -top-4 opacity-10">{currentYear}</span>
          </div>
          {/* Sparkle effects */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex gap-2">
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight">✨</span>
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight" style={{ animationDelay: '0.2s' }}>⭐</span>
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight" style={{ animationDelay: '0.4s' }}>🎉</span>
          </div>
        </div>
      </div>
    </div>
  );
};