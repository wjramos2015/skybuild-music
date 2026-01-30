
import React from 'react';
import { PROMPTS } from './constants';
import { PromptSection } from './components/PromptSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen px-6 py-16 md:py-28 max-w-4xl mx-auto relative z-10">
      {/* Hero Section */}
      <header className="text-center mb-24 animate-fade-in">
        <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 rounded-full bg-sky-500/10 border border-sky-500/30 backdrop-blur-md">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="text-sky-400 font-bold tracking-[0.2em] text-[11px]">SISTEMA SKYBUILD ATIVO</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter neon-glow italic select-none">
          SKYBUILD<span className="text-sky-500">MUSIC</span>
        </h1>
        <h2 className="text-xl md:text-3xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          O gerador cinematográfico para <span className="text-sky-400 font-bold">músicas e visuais épicos</span>.
          <p className="text-slate-500 text-lg mt-4 font-normal">Tudo pronto em segundos, sem necessidade de código.</p>
        </h2>
      </header>

      {/* Main Tools */}
      <main className="flex-grow space-y-8">
        <PromptSection 
          label="PASSO 1: CRIAÇÃO SONORA"
          icon="🎵"
          buttonText="Prompt de Música AI"
          promptText={PROMPTS.MUSIC}
        />

        <PromptSection 
          label="PASSO 2: CINEMATOGRAFIA"
          icon="🎬"
          buttonText="Prompt de Vídeo AI"
          promptText={PROMPTS.VIDEO}
        />

        <PromptSection 
          label="PASSO 3: IDENTIDADE VISUAL"
          icon="🖼️"
          buttonText="Prompt de Thumbnail"
          promptText={PROMPTS.THUMBNAIL}
        />

        <PromptSection 
          label="PASSO 4: ALAVANCAGEM (SEO)"
          icon="📄"
          buttonText="Título e Descrição Social"
          promptText={PROMPTS.TITLE_AND_DESC}
          isCompound={true}
        />

        {/* Info Guide */}
        <div className="w-full max-w-2xl mx-auto mt-32">
          <div className="glass-panel rounded-[2.5rem] p-12 text-center relative overflow-hidden group transition-all hover:bg-sky-500/5">
            <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
               <i className="fas fa-music text-[12rem]"></i>
            </div>
            <h3 className="text-sky-400 font-black mb-6 flex items-center justify-center gap-3 uppercase tracking-[0.4em] text-xs">
               Como Publicar
            </h3>
            <p className="text-slate-300 text-xl leading-relaxed italic">
              "Basta copiar os prompts para sua IA favorita e usar o título/descrição ao postar no <span className="text-sky-400">YouTube ou TikTok</span>. Rápido, profissional e grátis."
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-40 pb-16 text-center">
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-sky-800 to-transparent mx-auto mb-12"></div>
        <p className="text-slate-600 text-xs tracking-[0.5em] font-black uppercase mb-8">
          SKYBUILD MUSIC • POWERED BY CREATIVITY
        </p>
        <div className="flex justify-center gap-10 text-slate-500 text-2xl">
          <a href="#" className="hover:text-sky-400 transition-all hover:scale-110"><i className="fab fa-youtube"></i></a>
          <a href="#" className="hover:text-sky-400 transition-all hover:scale-110"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-sky-400 transition-all hover:scale-110"><i className="fab fa-tiktok"></i></a>
        </div>
        <p className="mt-12 text-slate-700 text-[10px] tracking-widest">© 2024 SKYBUILD • DESENVOLVIDO PARA ARTISTAS</p>
      </footer>
    </div>
  );
};

export default App;
