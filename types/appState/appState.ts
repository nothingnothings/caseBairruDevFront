import { UserData } from '@/types/user';

export interface AppState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  token: string | null;
  setToken: (token: string) => void;
  user: null | UserData;
  setUser: (user: UserData) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  message: null | string;
  setMessage: (message: string | null) => void;
  error: null | string;
  setError: (error: string | null) => void;
  resetError: () => void;
  authPage: 'login' | 'register';
  setAuthPage: (authPage: 'login' | 'register') => void;
  selectedAccountType: 'tabibito' | 'company' | null;
  setSelectedAccountType: (
    selectedAccountType: 'tabibito' | 'company' | null
  ) => void;
}
