import React from 'react';
import { X, Info } from 'lucide-react';
import { Exercise } from '../types';

interface VideoPlayerProps {
  exercise: Exercise | null;
  onClose: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ exercise, onClose }) => {
  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 md:p-8">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-[80]"
      >
        <X size={32} />
      </button>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-4">
          <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative">
            <video 
              src={exercise.videoUrl} 
              className="w-full h-full object-contain"
              controls
              autoPlay
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold text-yellow-400">{exercise.nameEn}</h2>
              <p className="text-blue-400 italic">{exercise.namePt}</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Info size={16} />
              <span>30 segundos de demonstração</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Posição Inicial</h3>
            <div className="aspect-square rounded-xl overflow-hidden border border-zinc-800 mb-6">
              <img 
                src={exercise.imageUrl} 
                alt="Posição Inicial"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Orientação de Execução</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {exercise.description}
            </p>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
          >
            Fechar Visualização
          </button>
        </div>
      </div>
    </div>
  );
};
