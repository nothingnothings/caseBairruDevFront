import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './useStorageState';
import { login } from '@/utils/auth';
import { LoginData } from '@/types/auth/login';
import { router } from 'expo-router';

const AuthContext = createContext<{
  signIn: (params: LoginData) => void;
  signOut: () => void;
  session?: string | null;
  user?: string | null;
  isLoading: boolean;
}>({
  signIn: (params: LoginData) => null,
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
          router.replace('/index');
        },
        signOut: () => {
          setSession(null);
          router.replace('/login');
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
