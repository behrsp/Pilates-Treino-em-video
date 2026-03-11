import React from 'react';
import { Exercise } from '../types';
import { Edit3, Trash2, PlayCircle } from 'lucide-react';

interface DashboardListProps {
  exercises: Exercise[];
  onEdit: (exercise: Exercise) => void;
  onDelete: (id: string) => void;
  onPlay: (exercise: Exercise) => void;
}

export const DashboardList: React.FC<DashboardListProps> = ({ exercises, onEdit, onDelete, onPlay }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black border-b border-zinc-800">
              <th className="p-4 text-zinc-500 font-medium text-xs uppercase tracking-wider">Exercício</th>
              <th className="p-4 text-zinc-500 font-medium text-xs uppercase tracking-wider hidden md:table-cell">Descrição</th>
              <th className="p-4 text-zinc-500 font-medium text-xs uppercase tracking-wider text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {exercises.map((exercise) => (
              <tr key={exercise.id} className="hover:bg-zinc-800/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={exercise.imageUrl} 
                      alt="" 
                      className="w-12 h-12 rounded-lg object-cover border border-zinc-700"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-white font-medium">{exercise.nameEn}</div>
                      <div className="text-zinc-500 text-xs">{exercise.namePt}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-zinc-400 text-sm line-clamp-1 max-w-xs">
                    {exercise.description}
                  </p>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => onPlay(exercise)}
                      className="p-2 text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors"
                      title="Assistir"
                    >
                      <PlayCircle size={20} />
                    </button>
                    <button 
                      onClick={() => onEdit(exercise)}
                      className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                      title="Editar"
                    >
                      <Edit3 size={20} />
                    </button>
                    <button 
                      onClick={() => onDelete(exercise.id)}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                      title="Excluir"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
