import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './useStorageState';
import { login, register } from '@/utils/auth';
import { LoginData } from '@/types/auth/login';
import { RegisterData } from '@/types/auth/register';

// For Navigation
import { router } from 'expo-router';

const AuthContext = createContext<{
  signIn: (params: LoginData) => void;
  signUp: (params: RegisterData) => void;
  signOut: () => void;
  session?: string | null;
  user?: string | null;
  isLoading: boolean;
}>({
  signIn: (params: LoginData) => null,
  signUp: (params: RegisterData) => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async (params: LoginData) => {
          const sessionData = await login(params);
          setSession(sessionData); // string or null
          router.push('/');
        },
        signUp: async (params: RegisterData) => {
          const sessionData = await register(params);
          setSession(sessionData); // string or null
          router.push('/');
        },
        signOut: () => {
          setSession(null);
          router.push('/login');
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
