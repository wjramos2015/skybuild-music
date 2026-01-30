
import React, { useState } from 'react';

interface CopyBoxProps {
  text: string;
  title?: string;
}

export const CopyBox: React.FC<CopyBoxProps> = ({ text, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <div className="w-full mt-4 animate-fade-in">
      {title && <h4 className="text-sky-400 font-bold mb-2 text-xs uppercase tracking-[0.2em] ml-1">{title}</h4>}
      <div className="relative group">
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 pr-14 text-slate-300 leading-relaxed text-md md:text-lg break-words transition-all hover:border-sky-500/40 neon-border">
          {text}
        </div>
        <button
          onClick={handleCopy}
          className={`absolute right-3 top-3 p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
            copied 
              ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
              : 'bg-slate-800 text-sky-400 hover:bg-sky-500 hover:text-white'
          }`}
          aria-label="Copiar texto"
        >
          {copied ? <i className="fas fa-check"></i> : <i className="fas fa-copy"></i>}
        </button>
      </div>
    </div>
  );
};
