
import React, { useState } from 'react';
import { CopyBox } from './CopyBox';

interface PromptSectionProps {
  label: string;
  icon: string;
  buttonText: string;
  promptText: string | { title: string; description: string };
  isCompound?: boolean;
}

export const PromptSection: React.FC<PromptSectionProps> = ({ label, icon, buttonText, promptText, isCompound }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <div className="flex flex-col">
        <span className="text-sky-500/60 font-black text-[10px] md:text-xs tracking-[0.4em] mb-3 uppercase text-center">
          {label}
        </span>
        <button
          onClick={() => setIsVisible(true)}
          className="w-full glass-panel hover:bg-sky-500/10 text-white font-bold py-6 px-8 rounded-3xl transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-between group"
        >
          <div className="flex items-center gap-5">
            <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">{icon}</span>
            <span className="text-lg md:text-xl tracking-wide">{buttonText}</span>
          </div>
          <i className="fas fa-chevron-right text-sky-500/50 group-hover:translate-x-1 transition-transform"></i>
        </button>

        {isVisible && (
          <div className="w-full mt-4">
            {!isCompound ? (
              <CopyBox text={promptText as string} />
            ) : (
              <div className="space-y-4">
                <CopyBox title="Título Sugerido" text={(promptText as any).title} />
                <CopyBox title="Descrição Sugerida" text={(promptText as any).description} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
