// Zustand-related
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Types
import { UserData } from '@/types/user';
import { AppState } from '@/types/appState/appState';

// Create the store with middleware
const useStore = create<AppState>()(
  devtools((set) => ({
    token: null,
    setToken: (token) => set({ token }),
    user: {},
    setUser: (user: UserData) => set({ user }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
  }))
);

export default useStore;
