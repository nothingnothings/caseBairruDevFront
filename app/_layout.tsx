// React-related
import React, { useEffect } from 'react';

// RN-related
import { Platform } from 'react-native';
import { Slot } from 'expo-router';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { Provider } from 'react-native-paper';


// Context
import { SessionProvider } from '@/context/ctx';

SplashScreen.preventAutoHideAsync();

// Screen Options for the entire app
const screenOptions = {
  headerShown: false,
  statusBarBackgroundColor: '#000000',
  statusBarStyle: 'dark',
  statusBarHidden: false,
};

const Layout: React.FC = ({}) => {
  const prepare = async () => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      NavigationBar.setVisibilityAsync('hidden');
    }
    try {
      await Font.loadAsync({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
      });
    } catch (error) {
      console.warn(error);
    } finally {
      SplashScreen.hide();
    }
  };

  useEffect(() => {
    prepare();
  }, []);

  return (
    <SessionProvider>
      <Provider>
        <StatusBar backgroundColor="#000000" style="light" />
        <Slot screenOptions={screenOptions} />
      </Provider>
    </SessionProvider>
  );
};

export default Layout;
