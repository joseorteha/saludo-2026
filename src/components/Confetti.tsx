import React, { useEffect, useState } from 'react';
import { Sparkles, Star, Heart, Gift, Zap, Award, Crown, Gem } from 'lucide-react';

interface ConfettiPiece {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  Icon: React.ComponentType<{ className?: string }>;
  rotate: number;
  color: string;
}

export const Confetti: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  const icons = [
    { Icon: Sparkles, color: 'text-indigo-500' },
    { Icon: Star, color: 'text-yellow-500' },
    { Icon: Heart, color: 'text-rose-500' },
    { Icon: Gift, color: 'text-emerald-500' },
    { Icon: Zap, color: 'text-purple-500' },
    { Icon: Award, color: 'text-amber-500' },
    { Icon: Crown, color: 'text-pink-500' },
    { Icon: Gem, color: 'text-cyan-500' },
  ];

  useEffect(() => {
    const pieces: ConfettiPiece[] = Array.from({ length: 25 }, (_, i) => {
      const iconData = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: 5 + Math.random() * 5,
        Icon: iconData.Icon,
        rotate: Math.random() * 360,
        color: iconData.color,
      };
    });
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {confettiPieces.map((piece) => {
        const Icon = piece.Icon;
        return (
          <div
            key={piece.id}
            className="absolute animate-fall"
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.animationDelay}s`,
              animationDuration: `${piece.animationDuration}s`,
            }}
          >
            <Icon 
              className={`w-6 h-6 md:w-8 md:h-8 ${piece.color} drop-shadow-lg`}
              style={{ transform: `rotate(${piece.rotate}deg)` }}
            />
          </div>
        );
      })}
    </div>
  );
};
