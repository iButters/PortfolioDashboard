import { create } from 'zustand';

interface PortfolioState {
  background: 'gradient' | 'particles' | 'grid';
  setBackground: (bg: 'gradient' | 'particles' | 'grid') => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  background: 'grid',
  setBackground: (bg) => set({ background: bg }),
}));
