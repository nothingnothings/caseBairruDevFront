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
