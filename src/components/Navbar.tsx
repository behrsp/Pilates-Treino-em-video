import React from 'react';
import { Home, LayoutDashboard } from 'lucide-react';
import { ViewMode } from '../types';

interface NavbarProps {
  view: ViewMode;
  setView: (view: ViewMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ view, setView }) => {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 shadow-lg border-b border-blue-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-yellow-400">TREINO</span>
          <span className="text-blue-400">PILATES</span>
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => setView('home')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              view === 'home' 
                ? 'bg-yellow-400 text-black font-bold' 
                : 'hover:bg-blue-500/20 text-gray-300'
            }`}
          >
            <Home size={20} />
            <span className="hidden sm:inline">Home</span>
          </button>
          <button
            onClick={() => setView('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              view === 'dashboard' 
                ? 'bg-blue-500 text-white font-bold' 
                : 'hover:bg-yellow-400/20 text-gray-300'
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="hidden sm:inline">Dashboard</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
