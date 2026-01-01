import React from 'react';
import { Github, Globe, Facebook } from 'lucide-react';

export const Footer : React.FC = () => {
  return (
    <div className="text-center px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600">
       <a href="https://jose-ortega-dev.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
        <Globe className="w-4 h-4" />
        <span>Jose Ortega</span>
       </a>
        <a href="https://github.com/joseorteha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-purple-600 transition-colors">
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        <a href="https://www.facebook.com/JoseOrtega.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
          <Facebook className="w-4 h-4" />
          <span>Facebook</span>
        </a>
      </div>
      <p className="text-xs text-slate-500 mt-2">
        © 2026 Jose Ortega. Todos los derechos reservados.
      </p>
    </div>
  );
};