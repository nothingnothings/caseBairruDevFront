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

// Third-party
import tw from 'twrnc';

// Custom Components
import AnimationWrapper from '@/components/animationWrapper/AnimationWrapper';

const image = require('@/assets/images/paper-texture.png');

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <AnimationWrapper>
      <StatusBar barStyle="dark-content" />
      <View style={tw`flex-1 justify-center items-center px-4`}>
        {children}
      </View>
    </AnimationWrapper>
  );
};

export default Layout;
