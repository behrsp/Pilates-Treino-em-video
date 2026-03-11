import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-zinc-400 text-sm mb-6">{message}</p>
          
          <div className="flex gap-3">
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex-1 bg-red-500 text-white font-bold py-3 rounded-xl hover:bg-red-600 transition-colors"
            >
              Excluir
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-xl hover:bg-zinc-700 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
