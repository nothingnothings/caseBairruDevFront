// React-related
import React, { useCallback, useEffect } from 'react';

// RN-related
import { Platform } from 'react-native';
import { Redirect, Slot, useFocusEffect, usePathname } from 'expo-router';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

// Auth-related
import { getToken, saveToken } from '../services/tokenService';

// Custom Components and styles
import { Provider } from 'react-native-paper';
import { AuthProvider } from '@/context/AuthContext';

SplashScreen.preventAutoHideAsync();

// Screen Options for the entire app
const screenOptions = {
  headerShown: false,
  statusBarBackgroundColor: '#000000',
  statusBarStyle: 'dark',
  statusBarHidden: false,
};

const Layout: React.FC = ({}) => {
  // Route-related
  const currentPath = usePathname();

  const prepare = async () => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      NavigationBar.setVisibilityAsync('hidden');
    }
    try {
      await Font.loadAsync({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        tabibito: require('../assets/fonts/tabibito.ttf'),
      });

      await fetchToken();
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
      SplashScreen.hide();
    }
  };

  const fetchToken = async () => {
    try {
      const result = await getToken('authToken');

      if (result && result.token && result.user) {
        // Check if result is not undefined and has a token and a user.
        setToken(result.token);
        setUser(result.user);
        saveToken('authData', JSON.stringify(result.token));
        setIsLoggedIn(true);
      }
    } catch (errorData: any) {
      setError(errorData.message);
    }
  };

  const hideDialog = () => resetError();

  useEffect(() => {
    prepare();
  }, []);

  return (
    <AuthProvider>
      <Provider>
        <StatusBar backgroundColor="#000000" style="light" />
        {/* {((isLoggedIn && currentPath === '/login') ||
          (isLoggedIn && currentPath === '/register')) && (
          <Redirect href="/home" />
        )} */}
        <Slot screenOptions={screenOptions} />
      </Provider>
    </AuthProvider>
  );
};

export default Layout;
