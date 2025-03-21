// React-related
import React, { useCallback } from 'react';

// RN-related
import {
  View,
  StatusBar,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { SplashScreen } from 'expo-router';

// Zustand-related
import useStore from '@/store/store';

// Third-party
import tw from 'twrnc';

// Custom Components
import AnimationWrapper from '@/components/animationWrapper/AnimationWrapper';

const image = require('@/assets/images/paper-texture.png');

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const isLoading = useStore((state) => state.isLoading);
  const token = useStore((state) => state.token);

  const onLayoutRootView = useCallback(async () => {
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  if (isLoading) {
    return null; // Return nothing if fonts are still loading
  }

  // If loading, show an ActivityIndicator
  if (isLoading || token === '') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <AnimationWrapper onLayout={onLayoutRootView}>
      <ImageBackground
        // source={image}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        resizeMode="stretch"
      >
        <StatusBar barStyle="dark-content" />
        <View style={tw`flex-1 justify-center items-center px-4`}>
          {children}
        </View>
      </ImageBackground>
    </AnimationWrapper>
  );
};

export default Layout;
