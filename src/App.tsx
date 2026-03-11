import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Search, Download, Upload } from 'lucide-react';
import { Exercise, ViewMode } from './types';
import { getExercises, addExercise, updateExercise, deleteExercise, exportToJson, importFromJson } from './services/storageService';
import { Navbar } from './components/Navbar';
import { ExerciseCard } from './components/ExerciseCard';
import { DashboardList } from './components/DashboardList';
import { ExerciseModal } from './components/ExerciseModal';
import { VideoPlayer } from './components/VideoPlayer';
import { ConfirmModal } from './components/ConfirmModal';

export default function App() {
  const [view, setView] = useState<ViewMode>('home');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [exerciseToDelete, setExerciseToDelete] = useState<string | null>(null);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);
  const [playingExercise, setPlayingExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    setExercises(getExercises());
  }, []);

  const handleSaveExercise = (data: Omit<Exercise, 'id'> & { id?: string }) => {
    if (data.id) {
      const updated = data as Exercise;
      updateExercise(updated);
    } else {
      addExercise(data);
    }
    setExercises(getExercises());
    setEditingExercise(null);
  };

  const handleDeleteClick = (id: string) => {
    setExerciseToDelete(id);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (exerciseToDelete) {
      deleteExercise(exerciseToDelete);
      setExercises(getExercises());
      setExerciseToDelete(null);
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const imported = await importFromJson(file);
      setExercises(imported);
      alert('Backup importado com sucesso!');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Erro ao importar.');
    }
  };

  const handleEditExercise = (exercise: Exercise) => {
    setEditingExercise(exercise);
    setIsModalOpen(true);
  };

  const filteredExercises = exercises.filter(e => 
    e.namePt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
      <Navbar view={view} setView={setView} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">
              {view === 'home' ? 'SESSÃO VÍDEOS' : 'DASHBOARD'}
            </h2>
            <p className="text-zinc-500 font-medium">
              {view === 'home' 
                ? 'Explore os 34 movimentos clássicos de Joseph Pilates.' 
                : 'Gerencie sua biblioteca de exercícios e treinos.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-400 transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Buscar exercício..."
                className="bg-zinc-900 border border-zinc-800 rounded-full py-2.5 pl-10 pr-4 outline-none focus:border-yellow-400 w-full sm:w-64 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {view === 'dashboard' && (
              <div className="flex gap-2">
                <button 
                  onClick={exportToJson}
                  className="bg-zinc-800 text-white font-bold p-2.5 rounded-full hover:bg-zinc-700 transition-colors shadow-lg"
                  title="Exportar Backup JSON"
                >
                  <Download size={20} />
                </button>
                <label 
                  className="bg-zinc-800 text-white font-bold p-2.5 rounded-full hover:bg-zinc-700 transition-colors shadow-lg cursor-pointer"
                  title="Importar Backup JSON"
                >
                  <Upload size={20} />
                  <input type="file" accept=".json" className="hidden" onChange={handleImport} />
                </label>
                <button 
                  onClick={() => {
                    setEditingExercise(null);
                    setIsModalOpen(true);
                  }}
                  className="bg-yellow-400 text-black font-bold px-6 py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-400/10"
                >
                  <Plus size={20} />
                  Adicionar
                </button>
              </div>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredExercises.map((exercise) => (
                <ExerciseCard 
                  key={exercise.id} 
                  exercise={exercise} 
                  onEdit={handleSaveExercise}
                  onPlay={setPlayingExercise}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DashboardList 
                exercises={filteredExercises}
                onEdit={handleEditExercise}
                onDelete={handleDeleteClick}
                onPlay={setPlayingExercise}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {filteredExercises.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">Nenhum exercício encontrado para "{searchTerm}"</p>
          </div>
        )}
      </main>

      <ExerciseModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingExercise(null);
        }}
        onSave={handleSaveExercise}
        initialData={editingExercise}
      />

      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Excluir Exercício"
        message="Tem certeza que deseja excluir este exercício? Esta ação não pode ser desfeita."
      />

      <VideoPlayer 
        exercise={playingExercise}
        onClose={() => setPlayingExercise(null)}
      />

      <footer className="border-t border-zinc-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Treino Pilates • Joseph Pilates 34 Movements
          </p>
        </div>
      </footer>
    </div>
  );
}
