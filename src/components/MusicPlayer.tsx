import React, { useState } from 'react';
import { Music, X } from 'lucide-react';

// ========================================
// CONFIGURACIÓN DE MÚSICA
// ========================================
// Opción 1: Usar YouTube
// Copia el ID del video de YouTube (lo que viene después de "v=" en la URL)
// Ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ → ID: dQw4w9WgXcQ

// Opción 2: Usar Spotify
// Copia el ID de la canción de Spotify (lo que viene después de "track/")
// Ejemplo: https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT → ID: 4cOdK2wGLETKBW3PvgPWqT

// ELIGE UNO:
const MUSIC_CONFIG = {
  type: 'spotify', // Configurado para Spotify
  youtubeId: 'dQw4w9WgXcQ', // 🎵 Reemplaza con tu video de YouTube
  spotifyId: '1JEsBoCgrdy4Xmu2E6aSj7', // 🎵 Canción configurada
};
// ========================================

export const MusicPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    setShowPrompt(false);
  };

  const getEmbedUrl = () => {
    if (MUSIC_CONFIG.type === 'youtube') {
      return `https://www.youtube.com/embed/${MUSIC_CONFIG.youtubeId}?autoplay=1&loop=1&playlist=${MUSIC_CONFIG.youtubeId}`;
    } else {
      return `https://open.spotify.com/embed/track/${MUSIC_CONFIG.spotifyId}?utm_source=generator&theme=0`;
    }
  };

  return (
    <>
      {showPrompt && !isOpen && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg z-50 animate-bounce-slight max-w-[90%]">
          <p className="text-xs sm:text-sm font-semibold text-purple-600 text-center">
            🎵 ¡Activa la música!
          </p>
        </div>
      )}
      
      <div className="fixed bottom-20 sm:bottom-4 right-4 z-40 flex flex-col gap-2 items-end">
        {!isOpen ? (
          <button
            onClick={handleOpen}
            className="bg-white/90 backdrop-blur-md p-3 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Abrir reproductor de música"
          >
            <Music className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 group-hover:text-purple-600 transition-colors animate-pulse" />
          </button>
        ) : (
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 max-w-[calc(100vw-2rem)] sm:max-w-none">
            <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-indigo-600 to-purple-600">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-white font-semibold text-xs sm:text-sm">
                  {MUSIC_CONFIG.type === 'youtube' ? '🎬 YouTube' : '🎧 Spotify'}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Cerrar reproductor"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <iframe
              width="280"
              height={MUSIC_CONFIG.type === 'youtube' ? '158' : '152'}
              src={getEmbedUrl()}
              title="Music Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            />
          </div>
        )}
      </div>
    </>
  );
};
