// Zustand-related
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Types
import { UserData } from '@/types/user';
import { AppState } from '@/types/appState/appState';

// Create the store with middleware
const useStore = create<AppState>()(
  devtools((set) => ({
    activeTab: 'locales',
    setActiveTab: (tab) => set({ activeTab: tab }),
    token: null,
    setToken: (token) => set({ token }),
    user: {},
    setUser: (user: UserData) => set({ user }),
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
    message: null,
    setMessage: (message) => set({ message }),
    error: null,
    setError: (error) => set({ error }),
    resetError: () => set({ error: null }),
    authPage: 'register',
    setAuthPage: (authPage) => set({ authPage }),
    selectedAccountType: null,
    setSelectedAccountType: (selectedAccountType) =>
      set({ selectedAccountType }),
  }))
);

export default useStore;
