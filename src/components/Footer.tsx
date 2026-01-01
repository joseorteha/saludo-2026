import React from 'react';
import { Github, Globe, BookOpen } from 'lucide-react';

export const Footer : React.FC = () => {
  return (
    <div className="text-center px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600">
       <a href="https://alejandrobolano.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
        <Globe className="w-4 h-4" />
        <span>Copyright © 2024</span>
       </a>
        <a href="https://github.com/alejandrobolano/New-Year" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-purple-600 transition-colors">
          <Github className="w-4 h-4" />
          <span>Código</span>
        </a>
        <a href="/readme" className="flex items-center gap-1 hover:text-pink-600 transition-colors">
          <BookOpen className="w-4 h-4" />
          <span>Info</span>
        </a>
      </div>
    </div>
  );
};