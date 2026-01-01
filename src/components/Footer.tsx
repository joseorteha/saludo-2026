import React from 'react';

export const Footer : React.FC = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center gap-4 mb-8 text-xs text-gray-600">
       <a href="https://alejandrobolano.vercel.app" target="_blank" rel="noopener noreferrer">Copyright © 2024 😍 All rights reserved.</a>
        <a href="https://github.com/alejandrobolano/New-Year" target="_blank" rel="noopener noreferrer">💻 Code</a>
        <a href="/readme">🤔 Readme</a>
      </div>
    </div>
  );
};