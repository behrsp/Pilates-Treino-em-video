import { Exercise } from '../types';

const STORAGE_KEY = 'pilates_exercises';

export const initialExercises: Exercise[] = [
  { id: '1', nameEn: 'The Hundred', namePt: 'O Cem', description: 'Exercício de aquecimento que foca na respiração e estabilidade do core.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/hundred/400/300' },
  { id: '2', nameEn: 'The Roll Up', namePt: 'Enrolamento para Cima', description: 'Trabalha a articulação da coluna e força abdominal.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/rollup/400/300' },
  { id: '3', nameEn: 'The Roll Over', namePt: 'Enrolamento por Trás', description: 'Foca na flexibilidade da coluna e controle abdominal.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/rollover/400/300' },
  { id: '4', nameEn: 'The One Leg Circle', namePt: 'Círculo com uma Perna', description: 'Estabilização da pelve e mobilidade do quadril.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/legcircle/400/300' },
  { id: '5', nameEn: 'Rolling Back', namePt: 'Rolando para Trás', description: 'Massagem na coluna e equilíbrio.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/rollingback/400/300' },
  { id: '6', nameEn: 'The One Leg Stretch', namePt: 'Alongamento de uma Perna', description: 'Coordenação e força abdominal.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/onestretch/400/300' },
  { id: '7', nameEn: 'The Double Leg Stretch', namePt: 'Alongamento das Duas Pernas', description: 'Desafio de estabilidade do core com movimento de braços e pernas.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/doublestretch/400/300' },
  { id: '8', nameEn: 'The Spine Stretch', namePt: 'Alongamento da Coluna', description: 'Flexibilidade da coluna e alongamento dos isquiotibiais.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/spinestretch/400/300' },
  { id: '9', nameEn: 'Rocker With Open Legs', namePt: 'Balanço com Pernas Abertas', description: 'Equilíbrio e controle da coluna.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/rocker/400/300' },
  { id: '10', nameEn: 'The Cork Screw', namePt: 'O Sacarrolhas', description: 'Trabalho abdominal oblíquo e estabilidade pélvica.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/corkscrew/400/300' },
  { id: '11', nameEn: 'The Saw', namePt: 'A Serra', description: 'Rotação da coluna e alongamento.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/saw/400/300' },
  { id: '12', nameEn: 'The Swan Dive', namePt: 'Mergulho do Cisne', description: 'Extensão da coluna e força das costas.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/swandive/400/300' },
  { id: '13', nameEn: 'The One Leg Kick', namePt: 'Chute com uma Perna', description: 'Fortalecimento de glúteos e isquiotibiais.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/onekick/400/300' },
  { id: '14', nameEn: 'The Double Leg Kick', namePt: 'Chute com as Duas Pernas', description: 'Extensão profunda das costas e coordenação.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/doublekick/400/300' },
  { id: '15', nameEn: 'The Neck Pull', namePt: 'Puxada de Pescoço', description: 'Articulação da coluna e força abdominal intensa.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/neckpull/400/300' },
  { id: '16', nameEn: 'The Scissors', namePt: 'A Tesoura', description: 'Flexibilidade e controle abdominal em suspensão.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/scissors/400/300' },
  { id: '17', nameEn: 'The Bicycle', namePt: 'A Bicicleta', description: 'Coordenação e mobilidade do quadril em suspensão.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/bicycle/400/300' },
  { id: '18', nameEn: 'The Shoulder Bridge', namePt: 'Ponte sobre os Ombros', description: 'Fortalecimento de glúteos e mobilidade da coluna.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/bridge/400/300' },
  { id: '19', nameEn: 'The Spine Twist', namePt: 'Torção da Coluna', description: 'Rotação axial e controle do core.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/spinetwist/400/300' },
  { id: '20', nameEn: 'The Jack Knife', namePt: 'O Canivete', description: 'Controle abdominal e inversão.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/jackknife/400/300' },
  { id: '21', nameEn: 'The Side Kick', namePt: 'Chute Lateral', description: 'Estabilidade lateral e força de quadril.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/sidekick/400/300' },
  { id: '22', nameEn: 'The Teaser', namePt: 'O Teaser', description: 'Equilíbrio em V e força abdominal total.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/teaser/400/300' },
  { id: '23', nameEn: 'The Hip Twist', namePt: 'Torção de Quadril', description: 'Estabilidade do core com rotação de pernas.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/hiptwist/400/300' },
  { id: '24', nameEn: 'Swimming', namePt: 'Natação', description: 'Extensão das costas e coordenação cruzada.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/swimming/400/300' },
  { id: '25', nameEn: 'The Leg Front', namePt: 'Perna para Frente (Prancha)', description: 'Força de braços e estabilidade do core.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/legfront/400/300' },
  { id: '26', nameEn: 'The Leg Back', namePt: 'Perna para Trás (Prancha Invertida)', description: 'Fortalecimento da cadeia posterior.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/legback/400/300' },
  { id: '27', nameEn: 'The Side Kick Kneeling', namePt: 'Chute Lateral Ajoelhado', description: 'Equilíbrio e força lateral avançada.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/kneelingkick/400/300' },
  { id: '28', nameEn: 'The Side Bend', namePt: 'Curva Lateral', description: 'Força oblíqua e estabilidade de ombro.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/sidebend/400/300' },
  { id: '29', nameEn: 'The Boomerang', namePt: 'O Bumerangue', description: 'Coordenação complexa e controle abdominal.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/boomerang/400/300' },
  { id: '30', nameEn: 'The Seal', namePt: 'A Foca', description: 'Equilíbrio e massagem na coluna de forma lúdica.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/seal/400/300' },
  { id: '31', nameEn: 'The Crab', namePt: 'O Caranguejo', description: 'Rolamento avançado com troca de pernas.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/crab/400/300' },
  { id: '32', nameEn: 'The Rocking', namePt: 'O Balanço', description: 'Extensão total e massagem abdominal.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/rocking/400/300' },
  { id: '33', nameEn: 'The Control Balance', namePt: 'Controle de Equilíbrio', description: 'Inversão e alongamento profundo.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/controlbalance/400/300' },
  { id: '34', nameEn: 'The Push Up', namePt: 'A Flexão', description: 'Força de membros superiores e integração do corpo todo.', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', imageUrl: 'https://picsum.photos/seed/pushup/400/300' },
];

export const getExercises = (): Exercise[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialExercises));
    return initialExercises;
  }
  return JSON.parse(stored);
};

export const saveExercises = (exercises: Exercise[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(exercises));
};

export const addExercise = (exercise: Omit<Exercise, 'id'>) => {
  const exercises = getExercises();
  const newExercise = { ...exercise, id: Date.now().toString() };
  exercises.push(newExercise);
  saveExercises(exercises);
  return newExercise;
};

export const updateExercise = (updated: Exercise) => {
  const exercises = getExercises();
  const index = exercises.findIndex(e => e.id === updated.id);
  if (index !== -1) {
    exercises[index] = updated;
    saveExercises(exercises);
  }
};

export const deleteExercise = (id: string) => {
  const exercises = getExercises();
  const filtered = exercises.filter(e => e.id !== id);
  saveExercises(filtered);
};

export const exportToJson = () => {
  const exercises = getExercises();
  const dataStr = JSON.stringify(exercises, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
  
  const exportFileDefaultName = `treino_pilates_backup_${new Date().toISOString().split('T')[0]}.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

export const importFromJson = (file: File): Promise<Exercise[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (Array.isArray(json)) {
          saveExercises(json);
          resolve(json);
        } else {
          reject(new Error('Formato de arquivo inválido.'));
        }
      } catch (e) {
        reject(new Error('Erro ao ler o arquivo JSON.'));
      }
    };
    reader.onerror = () => reject(new Error('Erro no leitor de arquivos.'));
    reader.readAsText(file);
  });
};
