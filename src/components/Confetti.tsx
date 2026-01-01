import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  emoji: string;
  rotate: number;
}

export const Confetti: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  const emojis = ['🎉', '🎊', '✨', '🎈', '🎆', '🎇', '⭐', '💫', '🌟', '🎁', '🎀', '🎄', '🎅', '❄️', '⛄'];

  useEffect(() => {
    const pieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => {
      return {
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: 5 + Math.random() * 5,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        rotate: Math.random() * 360,
      };
    });
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-fall text-3xl md:text-4xl"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
            transform: `rotate(${piece.rotate}deg)`,
          }}
        >
          {piece.emoji}
        </div>
      ))}
    </div>
  );
};
