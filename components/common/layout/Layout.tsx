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
import { SIZES } from '@/constants';
import { StyleSheet } from 'react-native';

const image = require('@/assets/images/paper-texture.png');

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <AnimationWrapper>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>{children}</View>
    </AnimationWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
