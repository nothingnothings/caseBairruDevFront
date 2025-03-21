import {
  useContext,
  createContext,
  type PropsWithChildren,
  useState,
} from 'react';
import { useStorageState } from './useStorageState';
import { login, register, updateUserName } from '@/utils/auth';
import { LoginData } from '@/types/auth/login';
import { RegisterData } from '@/types/auth/register';

// For Navigation
import { router } from 'expo-router';
import { UpdateUserData } from '@/types/auth/user';

const AuthContext = createContext<{
  signIn: (params: LoginData) => void;
  signUp: (params: RegisterData) => void;
  changeName: (params: UpdateUserData) => void;
  signOut: () => void;
  session?: string | null;
  userName: string | null;
  userId: string | null;
  setUserName: (userName: string | null) => void;
  setUserId: (userId: string | null) => void;
  isLoading: boolean;
}>({
  signIn: (params: LoginData) => null,
  signUp: (params: RegisterData) => null,
  changeName: (params: UpdateUserData) => null,
  signOut: () => null,
  session: null,
  userName: null,
  userId: null,
  setUserName: () => {},
  setUserId: () => {},
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

  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        signIn: async (params: LoginData) => {
          const results = await login(params);

          setSession(results.sessionData); // string or null
          setUserName(results.userName);
          setUserId(results.userId);

          router.push('/');
        },
        signUp: async (params: RegisterData) => {
          const results = await register(params);

          setSession(results.sessionData); // string or null
          setUserName(results.userName);
          setUserId(results.userId);

          router.push('/');
        },
        changeName: async (params: UpdateUserData) => {
          const user = await updateUserName(params);

          if (user) {
            setUserName(user?.name);
          }

          router.push('/');
        },
        signOut: () => {
          setSession(null);
          router.push('/login');
        },
        userId,
        userName,
        setUserName,
        setUserId,
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
