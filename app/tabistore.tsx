import React, { useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';
import { ScreenHeaderBtn } from '@/components';
import { COLORS, icons, images, SIZES } from '@/constants';
import useStore from '@/store/store';

import AnimationWrapper from '@/components/animationWrapper/AnimationWrapper';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Tabistore = () => {
  const token = useStore((state) => state.token);
  const isLoading = useStore((state) => state.isLoading);

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
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <AnimationWrapper onLayout={onLayoutRootView}>
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Text>Item Store Page Content</Text>
      </View>
    </AnimationWrapper>
  );
};

export default Tabistore;
