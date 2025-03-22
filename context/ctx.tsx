// React-related
import {
  useContext,
  createContext,
  type PropsWithChildren,
  useEffect,
} from 'react';

// StorageState
import { setStorageItemAsync, useStorageState } from './useStorageState';

// Utility Functions
import { login, register, updateUserName, validateSession } from '@/utils/auth';

// Router-related
import { router } from 'expo-router';

// Types
import { LoginData } from '@/types/auth/login';
import { RegisterData } from '@/types/auth/register';
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
  const [[, userName], setUserName] = useStorageState('userName');
  const [[, userId], setUserId] = useStorageState('userId');

  useEffect(() => {
    if (!isLoading && session) {
      validateSession(session).then((isValid) => {
        console.log(session, 'THE SESSION');
        if (!isValid) {
          console.log(isValid, 'IS VALID');
          setSession(null);
          setUserName(null);
          setUserId(null);
          router.push('/login');
        }
      });
    }
  }, [isLoading, session]); // Add `isLoading` to dependencies

  return (
    <AuthContext.Provider
      value={{
        signIn: async (params: LoginData) => {
          const results = await login(params);

          setSession(results.sessionData); // string or null
          setUserName(results.userName);
          setUserId(results.userId);

          // Save user data persistently:
          await setStorageItemAsync('session', results.sessionData);
          await setStorageItemAsync('userName', results.userName);
          await setStorageItemAsync('userId', results.userId);

          router.push('/');
        },
        signUp: async (params: RegisterData) => {
          const results = await register(params);

          setSession(results.sessionData); // string or null
          setUserName(results.userName);
          setUserId(results.userId);

          // Save user data persistently:
          await setStorageItemAsync('session', results.sessionData);
          await setStorageItemAsync('userName', results.userName);
          await setStorageItemAsync('userId', results.userId);

          router.push('/');
        },
        changeName: async (params: UpdateUserData) => {
          const user = await updateUserName(params, session);

          if (user) {
            setUserName(user?.name);

            // Update stored username
            await setStorageItemAsync('userName', user.name);
          }

          router.push('/');
        },
        signOut: async () => {
          setSession(null);
          setUserName(null);
          setUserId(null);

          // Clear stored data
          await setStorageItemAsync('session', null);
          await setStorageItemAsync('userName', null);
          await setStorageItemAsync('userId', null);

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
