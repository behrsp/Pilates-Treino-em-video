import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (exercise: Omit<Exercise, 'id'> & { id?: string }) => void;
  initialData?: Exercise | null;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState<Omit<Exercise, 'id'>>({
    nameEn: '',
    namePt: '',
    description: '',
    videoUrl: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        nameEn: initialData.nameEn,
        namePt: initialData.namePt,
        description: initialData.description,
        videoUrl: initialData.videoUrl,
        imageUrl: initialData.imageUrl,
      });
    } else {
      setFormData({
        nameEn: '',
        namePt: '',
        description: '',
        videoUrl: '',
        imageUrl: '',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check video duration (approximate check via metadata if possible, but simple file read for now)
    if (type === 'video' && file.size > 10 * 1024 * 1024) {
      alert('O vídeo é muito grande. Tente um vídeo de até 10 segundos (máx 10MB).');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      if (type === 'image') {
        setFormData(prev => ({ ...prev, imageUrl: base64String }));
      } else {
        setFormData(prev => ({ ...prev, videoUrl: base64String }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(initialData ? { ...formData, id: initialData.id } : formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Editar Exercício' : 'Novo Exercício'}
          </h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 uppercase">Nome (PT)</label>
              <input
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-2.5 text-white outline-none focus:border-yellow-400"
                value={formData.namePt}
                onChange={e => setFormData({ ...formData, namePt: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 uppercase">Nome (EN)</label>
              <input
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-2.5 text-white outline-none focus:border-blue-400"
                value={formData.nameEn}
                onChange={e => setFormData({ ...formData, nameEn: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-500 uppercase">Descrição</label>
            <textarea
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-2.5 text-white outline-none focus:border-yellow-400 h-24 resize-none"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 uppercase">Foto do Dispositivo</label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'image')}
                  className="hidden"
                  id="image-upload"
                />
                <label 
                  htmlFor="image-upload"
                  className="flex items-center justify-center w-full bg-zinc-800 border-2 border-dashed border-zinc-700 rounded-lg p-4 cursor-pointer hover:border-yellow-400 transition-colors"
                >
                  {formData.imageUrl ? (
                    <img src={formData.imageUrl} alt="Preview" className="h-12 w-12 object-cover rounded" />
                  ) : (
                    <span className="text-zinc-500 text-xs">Selecionar Foto</span>
                  )}
                </label>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 uppercase">Vídeo (Máx 10s)</label>
              <div className="relative">
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, 'video')}
                  className="hidden"
                  id="video-upload"
                />
                <label 
                  htmlFor="video-upload"
                  className="flex items-center justify-center w-full bg-zinc-800 border-2 border-dashed border-zinc-700 rounded-lg p-4 cursor-pointer hover:border-blue-400 transition-colors"
                >
                  {formData.videoUrl ? (
                    <div className="h-12 w-12 bg-blue-500/20 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    </div>
                  ) : (
                    <span className="text-zinc-500 text-xs">Selecionar Vídeo</span>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-500 transition-colors"
            >
              {initialData ? 'Atualizar' : 'Criar Exercício'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-xl hover:bg-zinc-700 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
