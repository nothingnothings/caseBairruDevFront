// React-related
import {
  useContext,
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
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
  errorMessage: string | null;
  setError: (message: string | null) => void; // New function to set error message
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
  errorMessage: null,
  setError: (message: string | null) => null, // New function to set error message
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

  // Error Handling
  const [errorMessage, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && session) {
      // Check if session is valid, initially
      checkSessionValidity();

      // Check validity every 61 seconds; tokens from backend expires every 5 minutes.
      const interval = setInterval(checkSessionValidity, 1000 * 61);

      return () => clearInterval(interval);
    }
  }, [isLoading, session]);

  //  Helper functions
  const checkSessionValidity = async () => {
    const isValid = await validateSession(session);
    // If session is invalid, sign user out
    if (!isValid) {
      signOut();
    }
  };

  const signOut = async () => {
    // Clear state data
    setSession(null);
    setUserName(null);
    setUserId(null);

    // Clear stored data
    await setStorageItemAsync('session', null);
    await setStorageItemAsync('userName', null);
    await setStorageItemAsync('userId', null);

    router.push('/login');
  };

  const setData = (results: {
    sessionData: string | null;
    userName: string | null;
    userId: string | null;
  }) => {
    setSession(results.sessionData);
    setUserName(results.userName);
    setUserId(results.userId);
  };

  const setStorageData = async (results: {
    sessionData: string | null;
    userName: string | null;
    userId: string | null;
  }) => {
    // Save user data persistently:
    await setStorageItemAsync('session', results.sessionData);
    await setStorageItemAsync('userName', results.userName);

    router.push('/');
  };

  //  Main function
  return (
    <AuthContext.Provider
      value={{
        signIn: async (params: LoginData) => {
          const results = await login(params, setError);

          if (results.sessionData) {
            // Save user data in state
            setData(results);

            // Save user data persistently
            await setStorageData(results);
          }
        },

        signUp: async (params: RegisterData) => {
          const results = await register(params, setError);

          if (results.sessionData) {
            // Save user data in state
            setData(results);

            // Save user data persistently
            await setStorageData(results);
          }
        },
        changeName: async (params: UpdateUserData) => {
          const user = await updateUserName(params, session, setError);

          if (user) {
            // Update user name in state
            setUserName(user?.name);

            // Save user name in persistent storage
            await setStorageItemAsync('userName', user.name).then(() => {
              router.push('/');
            });
          } else {
            router.push('/');
          }
        },
        signOut,
        userId,
        userName,
        setUserName,
        setUserId,
        session,
        isLoading,
        errorMessage,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
