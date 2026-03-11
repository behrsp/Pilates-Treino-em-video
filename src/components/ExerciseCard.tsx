import React, { useState } from 'react';
import { Exercise } from '../types';
import { Play, Edit2 } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  onEdit: (exercise: Exercise) => void;
  onPlay: (exercise: Exercise) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onEdit, onPlay }) => {
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [tempDesc, setTempDesc] = useState(exercise.description);

  const handleSaveDesc = () => {
    onEdit({ ...exercise, description: tempDesc });
    setIsEditingDesc(false);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-blue-500 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={exercise.imageUrl} 
          alt={exercise.namePt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onPlay(exercise)}
            className="bg-yellow-400 text-black p-4 rounded-full hover:scale-110 transition-transform"
          >
            <Play fill="currentColor" size={24} />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-yellow-400 font-bold text-lg leading-tight">{exercise.nameEn}</h3>
            <p className="text-blue-400 text-sm italic">{exercise.namePt}</p>
          </div>
          <button 
            onClick={() => setIsEditingDesc(!isEditingDesc)}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Edit2 size={16} />
          </button>
        </div>

        {isEditingDesc ? (
          <div className="mt-2">
            <textarea
              className="w-full bg-zinc-800 text-white p-2 rounded-lg text-sm border border-zinc-700 focus:border-yellow-400 outline-none h-24 resize-none"
              value={tempDesc}
              onChange={(e) => setTempDesc(e.target.value)}
            />
            <div className="flex gap-2 mt-2">
              <button 
                onClick={handleSaveDesc}
                className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs font-bold hover:bg-blue-600"
              >
                Salvar
              </button>
              <button 
                onClick={() => setIsEditingDesc(false)}
                className="bg-zinc-700 text-white px-3 py-1 rounded-md text-xs hover:bg-zinc-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <p className="text-zinc-400 text-sm line-clamp-3 mt-2 leading-relaxed">
            {exercise.description}
          </p>
        )}
      </div>
    </div>
  );
};
