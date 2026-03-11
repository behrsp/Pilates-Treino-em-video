export interface Exercise {
  id: string;
  nameEn: string;
  namePt: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
}

export type ViewMode = 'home' | 'dashboard';
